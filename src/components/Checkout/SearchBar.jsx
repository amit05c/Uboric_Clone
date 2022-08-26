import React, { useRef, useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { useThrottle } from "use-throttle";
import {Input} from "@chakra-ui/react"

const SearchBar = ({ inputQueryHandler, suggestions,label }) => {
  const [inputText, setInputText] = useState("");
  const [active, setActive] = useState(0);
  const scrollRef = useRef();

  const handleInputTextChange = (e) => {
    setInputText(e.target.value);
  };

  const handleActiveSuggestions = (e) => {
    switch (e.keyCode) {
      //up arrow key code is 38
      case 38:
        if (active === 1) {
          scrollRef.current.scrollTop = suggestions.length * 38.667;
          setActive(suggestions.length);
        } else if (active <= suggestions.length - 3) {
          scrollRef.current.scrollTop -= 38.667;
        }
        setActive((prev) => prev - 1);
        break;

      //down arrow key code is 40
      case 40:
        if (active === suggestions.length) {
          scrollRef.current.scrollTop = 0;
          setActive(0);
        } else if (active >= 4) {
          scrollRef.current.scrollTop += 38.667;
        }

        setActive((prev) => prev + 1);
        break;

      //   case 13:
      //     navigate(to = `country/${active}`);
      //     break;

      default:
        return;
    }
  };

  const throttledText = useThrottle(inputText, 200);

  useEffect(() => {
    inputQueryHandler(throttledText);
  }, [inputQueryHandler, throttledText]);  

  return (
    <Wrapper onKeyUp={handleActiveSuggestions}>
      {/* <SearchBarWrapper> */}
        <Input value={inputText} onChange={handleInputTextChange} borderRadius="none" placeholder={label} size={"lg"}/>
      {/* </SearchBarWrapper> */}
      {suggestions.length > 0 && (
        <SearchBarSuggestion ref={scrollRef} active={active} limit={5}>
          {suggestions.map((item, index) => {
            return (
              <div
                key={index}
                onMouseOver={() => {
                  setActive(index + 1);
                }}
              >
                {item}
              </div>
            );
          })}
        </SearchBarSuggestion>
      )}
    </Wrapper>
  );
};

export default SearchBar;

const SearchBarSuggestion = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  margin: auto;
  max-height: ${({ limit }) => `${limit * 38.667}px`};
  overflow: auto;

  & * {
    flex: 1;
    text-align: left;
    padding: 10px;
    padding-left: 20px;
  }

  & :nth-child(${({ active }) => active}) {
    background: rgba(0, 0, 0, 0.08);
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  // max-width: 400px;
  margin: auto;
`;


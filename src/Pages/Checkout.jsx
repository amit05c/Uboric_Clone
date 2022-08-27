import React, { useState, useCallback, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Input,
  Button,
  Grid,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import styles from "../Styles/checkout.module.css";
import SearchBar from "../components/Checkout/SearchBar";
import countries from "../utils/contries.json";
import state from "../utils/states.json";
const Checkout = () => {
  const [show, setShow] = useState(false);

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const queryHandler = useCallback((val) => {
    console.log("The query is", val);
    //API call
    setQuery(val);
  }, []);

  //the logic of searching cities whenever the query changes
  useEffect(() => {
    if (query === "") {
      setSuggestions([]);
    } else {
      let newCountriesSuggestions = countries
        .filter((item) => {
          return item.country.toLowerCase().indexOf(query) !== -1
            ? true
            : false;
        })
        .map((item) => item.country);
      setSuggestions(newCountriesSuggestions);
    }
  }, [query]);

  const [query1, setQuery1] = useState("");
  const [suggestions1, setSuggestions1] = useState([]);

  const queryHandler1 = useCallback((val) => {
    // console.log("The query is", val);
    //API call
    setQuery1(val);
  }, []);

  //the logic of searching cities whenever the query changes
  useEffect(() => {
    if (query1 === "") {
      setSuggestions1([]);
    } else {
      let newCountriesSuggestions = state
        .filter((item) => {
          return item.state.toLowerCase().indexOf(query1) !== -1
            ? true
            : false;
        })
        .map((item) => item.state);
      setSuggestions1(newCountriesSuggestions);
    }
  }, [query1]);

  return (
    <Box>
      <Box>
        <Text textAlign={"start"}>Home » Checkout</Text>
      </Box>
      <Box>
        <Heading>Chechout</Heading>
      </Box>
      <Box
        textAlign={"start"}
        bgColor={"#f5f5f5"}
        width="45%"
        margin={"auto"}
        padding="1.2rem 2rem"
      >
        <Text>
          Have a coupon?
          <button onClick={() => setShow(!show)}>
            Click here to enter your code
          </button>
        </Text>
      </Box>
      <Box
        className={show ? styles.show : styles.hide}
        width="45%"
        margin={" 2rem auto"}
        border="1px solid lightGrey"
        padding={"2.5rem 1.5rem"}
      >
        <Text textAlign={"start"}>
          If you have a coupon code, please apply it below.
        </Text>
        <Input
          size={"lg"}
          placeholder="Coupon Code"
          borderRadius={"none"}
          margin="1.5rem 0"
        />
        <Button
          bgColor="black"
          color={"white"}
          size="sm"
          padding={"1.5rem 5rem"}
          borderRadius={"none"}
          _hover="none"
          width={"9rem"}
          mr="100%"
        >
          Apply Coupon
        </Button>
      </Box>
      <Box padding={"3rem"}>
        <Grid gridTemplateColumns="5fr 3fr" gap={"5rem"}>
          <Box border={"1px solid black"}>
            <Heading textAlign={"start"} size="md">
              Billing details
            </Heading>
            {/* <FormControl></FormControl> */}
            <Box>
              <Flex gap={"2rem"}>
                <FormControl isRequired>
                  <FormLabel>First name</FormLabel>
                  <Input borderRadius={"none"} size="lg" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Last name</FormLabel>
                  <Input borderRadius={"none"} size="lg" />
                </FormControl>
              </Flex>
            </Box>
            <Box>
              <FormControl>
                <FormLabel>Company name (optional)</FormLabel>
                <Input borderRadius={"none"} size="lg" />
              </FormControl>
            </Box>
            <Box>
              <FormControl isRequired>
                <FormLabel>Country / Region</FormLabel>
                <SearchBar
                  inputQueryHandler={queryHandler}
                  suggestions={suggestions}
                  label={"Country"}
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl isRequired>
                <FormLabel>Street address</FormLabel>
                <Input
                  size="lg"
                  placeholder="House number and street name"
                  borderRadius={"none"}
                  mb="1rem"
                />
                <Input
                  size="lg"
                  placeholder="Apartment, siute, unit, etc. (optional)"
                  borderRadius={"none"}
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl isRequired>
                <FormLabel>Town / City </FormLabel>
                <Input borderRadius={"none"} size="lg" />
              </FormControl>
            </Box>
            <Box>
            <FormControl isRequired>
                <FormLabel>State</FormLabel>
                <SearchBar
                  inputQueryHandler={queryHandler1}
                  suggestions={suggestions1}
                  label={"State"}
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl isRequired>
                <FormLabel>PIN Code</FormLabel>
                <Input borderRadius={"none"} size="lg" />
              </FormControl>
            </Box>
            <Box>
              <FormControl isRequired>
                <FormLabel>Phone</FormLabel>
                <Input borderRadius={"none"} size="lg" />
              </FormControl>
            </Box>
            <Box>
              <FormControl isRequired>
                <FormLabel>PIN Code</FormLabel>
                <Input borderRadius={"none"} size="lg" />
              </FormControl>
            </Box>
            <Box>
              <FormControl isRequired>
                <FormLabel>Email address *</FormLabel>
                <Input borderRadius={"none"} size="lg" />
              </FormControl>
            </Box>
          </Box>
          <Box border={"1px solid black"}></Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Checkout;

import React, { useEffect, useState } from "react";
import {useSearchParams} from "react-router-dom"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Checkbox,
  Text,
} from "@chakra-ui/react";

const Items = ({ type, categoryFn }) => {
  return (
    <Flex>
      <Checkbox
    
        onChange={() => {
          categoryFn(type);
        }}
      />
      <Text>{type}</Text>
    </Flex>
  );
};

export const Category = () => {
  const [searchParams, setSearchParams] = useSearchParams();
    const [category,setCategory] = useState([]);
  const categoryFn = (type) => {
    
    let newCat= type;
    if(category.includes(newCat)){
      let x= category.filter(el=>el!=newCat)
      setCategory(x)
    }else{
      setCategory([...category,newCat])
    }

  };

  useEffect(()=>{
    setSearchParams({
      category
    })
  },[category])
    

  // console.log(category)

  return (
    <Accordion allowToggle width={"60%"}>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Category
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Items
            // title={"Price"}
            name="Category"
            type={"Men"}
            categoryFn={categoryFn}
          />
          <Items
            // title={"Price"}
            name="Category"
            type={"clothings"}
            categoryFn={categoryFn}
          />

             <Items
            // title={"Price"}
            name="Category"
            type={"Aniversary"}
            categoryFn={categoryFn}
          />


<Items
            // title={"Price"}
            name="Category"
            type={"Bathroom Accessories"}
            categoryFn={categoryFn}
          />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Category;

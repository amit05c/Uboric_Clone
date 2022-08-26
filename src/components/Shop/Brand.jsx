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
  Input,
  Checkbox,
  Text,
} from "@chakra-ui/react";

const Items = ({  type, BrandFn }) => {
  return (
    <Flex>
      <Checkbox
        onChange={() => {
          BrandFn(type);
        }}
      />
      <Text color={"#818181"} >{type}</Text>
    </Flex>
  );
};

export const Brand = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let catParams= searchParams.getAll("category") || ""
  // let priceParams= searchParams.getAll("Price") || ""
  const [brand,setBrand] = useState([])
  const BrandFn = (type) => {
    let newbrand= type;
    if(brand.includes(newbrand)){
      let x= brand.filter(el=>el!=newbrand)
      setBrand(x)
    }else{
      setBrand([...catParams,...brand,newbrand])
    }

  };
  
  useEffect(()=>{
    setSearchParams({
      brand
    })
  },[brand])
    

  return (
    <Accordion allowToggle width={"80%"}>
      <AccordionItem md={"1rem"}>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Brand
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Items
            // title={"Price"}
            name="Brand"
            type={"26 carat"}
            BrandFn={BrandFn}
          />
          <Items
            // title={"Price"}
            name="Brand"
            type={"DANIEL CHRISTIAN"}
            BrandFn={BrandFn}
          />

          <Items
            // title={"Price"}
            name="Brand"
            type={"Finachi"}
            BrandFn={BrandFn}
          />

         <Items
            // title={"Price"}
            name="Brand"
            type={"jacksapprow"}
            BrandFn={BrandFn}
          />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Brand;

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../Redux/ProductsReducer/action";
import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useSelector((state) => state.ProductReducer);
  console.log(products);
  const dispatch = useDispatch();

  const singleProd = products.filter((el) => el.id == id);
  const sizes = singleProd?.size?.split(" ").map(Number);
  console.log(sizes);
  console.log(singleProd);
  console.log(id);
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <Flex width={"100%"} border={"1px solid red"}  justifyContent="space-evenly" 
     margin={"2rem 0 5rem 0"}
    >
      <Flex width={"40%"} border={"1px solid black"} >
        <Image src={singleProd[0]?.images}  border="1px solid red" margin="auto" width="60%"/>
      </Flex>

      <Flex
        border={"1px solid black"}
        direction="column"
        justifyContent="space-evenly"
        
        width="50%"
        h={"80vh"}
      >
        <Stack>
          <Box>
        <Text as={"b"}>{singleProd[0]?.title}</Text>

          </Box>
          <Box>
          <Text as={"b"}>{`Brand: ${singleProd[0]?.brand}`}</Text>
          </Box>
        
        <Box>
        <Text as={"b"}>{`Price: ${singleProd[0]?.Price}`}</Text>
        </Box>
        

        </Stack>
        
        <Stack width="50%" ml="1rem"  border="1px solid red">
          <Select placeholder="Select option">
            {singleProd[0].size?.map((el, i) => (
              <option key={i} value={el}>
                {el}
              </option>
            ))}
          </Select>
        </Stack>

        <Flex border="1px solid red" justifyContent={"space-around"}>
       
       <Box display={"flex"}
        gap="1rem"
        border="1px solid black"
       >
        <Button bg={"gray"} borderRadius="50%">+</Button>
        <Flex>5</Flex>
        <Button borderRadius="50%" bg={"gray"}>-</Button>
       </Box>

        <Box>
        <Button bg="blue">add to cart</Button>
        </Box>
          
        </Flex>
      </Flex>


    </Flex>
  );
};

export default ProductDetails;

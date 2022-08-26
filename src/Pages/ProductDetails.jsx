import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../Redux/ProductsReducer/action";
import { useNavigate } from "react-router-dom";
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
import { getCartData } from "../Redux/CartReducer/action";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate= useNavigate()
  const  {products}  = useSelector((state) => state.ProductReducer);
  const {cartData} = useSelector((state)=>state.CartReducer)
  // console.log(cartData)
  const dispatch = useDispatch();
  const [selectSize,setSize]= useState('')
  const [qty,setQty]= useState(0)
  

  const singleProd = products.filter((el) => el.id == id);
    

  useEffect(() => {
    dispatch(getData())
   dispatch(getCartData())
    
  }, []);
  // console.log(cartData.length+1)
  const addToCart=async ()=>{
    const newData={
      id:cartData.length+1,
      title:singleProd[0].title,
      price:singleProd[0].Price,
      size:selectSize,
      quantity:qty
    }
     
    // console.log(newData)
    
    
    await axios.post(`http://localhost:8080/cart`,newData)
    .then(()=>dispatch(getCartData()))
    .then(()=>navigate(`/cart`))
  }

  return (
    <Flex width={"100%"}   justifyContent="space-evenly"   //border={"1px solid red"}
     margin={"2rem 0 5rem 0"}
    >
      <Flex width={"40%"}  //border={"1px solid black"}
       >          
        <Image src={singleProd[0]?.images}   //border="1px solid red"
        margin="auto" width="60%"
        />
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
        
        <Stack width="50%" ml="1rem"   // border="1px solid red"
        >
          <Select placeholder="Select option"  onChange={(e)=>setSize(e.target.value)}>
            {singleProd[0]?.size?.map((el, i) => (
              <option key={i} value={el}>
                {el}
              </option>
            ))}
          </Select>
        </Stack>

        <Flex         // border="1px solid red"
         justifyContent={"space-around"}>
       
       <Box display={"flex"}
        gap="1rem"
        border="1px solid black"
       >
        <Button bg={"gray"} borderRadius="50%" onClick={()=>setQty(qty+1)} >+</Button>
        <Flex>{qty}</Flex>
        <Button borderRadius="50%" bg={"gray"} onClick={()=>setQty(qty-1)}>-</Button>
       </Box>

        <Box>
        <Button bg="blue" onClick={addToCart}>add to cart</Button>
        </Box>
          
        </Flex>
      </Flex>


    </Flex>
  );
};

export default ProductDetails;

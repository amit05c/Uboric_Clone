import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { getData } from '../Redux/ProductsReducer/action'
import { Box, Container, Flex, Image, Text } from '@chakra-ui/react'

const ProductDetails = () => {
  const {id}= useParams()
  const {products}= useSelector(state=>state.ProductReducer)
  console.log(products)
  const dispatch= useDispatch()
  
  const singleProd= products.filter((el)=>el.id==id)
  console.log(singleProd)
 console.log(id)
  useEffect(()=>{
    dispatch(getData())
  },[])
  return (
    <Flex width={"100%"} border={"1px solid red"} h={"100vh"}>
      <Container width={"50%"} border={"1px solid black"}>
        <Image src={singleProd[0]?.images}/>
      </Container>

      <Container border={"1px solid black"}>
      <Text as={"b"}>{singleProd[0]?.title}</Text>
      </Container>
    </Flex>
  )
}

export default ProductDetails
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import {useNavigate} from "react-router-dom"

const AllProducts = ({data}) => {
  const navigate= useNavigate()
  return (
    <Flex      //border={"1px solid red"} 
     direction={"column"} justifyContent="center" alignItems={"center"}
onClick={()=>navigate(`/shop/${data.id}`)}
    >
        <Image src={data.images} boxSize="60%"  />
        
       <Box width="60%"><Text color={"black"} as={"b"}>{data.title}</Text></Box> 
        <Text color="red" as={"b"}>{`₹ ${data.Price}`}</Text>
    </Flex>

  )
}

export default AllProducts
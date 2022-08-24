import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const AllProducts = ({data}) => {
  return (
    <Flex border={"1px solid red"}  direction={"column"} justifyContent="center" alignItems={"center"}
    
    >
        <Image src={data.images} boxSize="200px"  />
        
        <Text color={"black"} as={"b"}>{data.title}</Text>
        <Text color="red" as={"b"}>{`₹ ${data.Price}`}</Text>
    </Flex>

  )
}

export default AllProducts
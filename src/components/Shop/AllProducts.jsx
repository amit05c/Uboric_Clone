import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const AllProducts = ({data}) => {
  return (
    <Flex border={"1px solid red"}  direction={"column"} justifyContent="center" alignItems={"center"}>
        <Image src={data.images[0]} boxSize="200px"  />
        
        <Text>{data.title}</Text>
        <Text>{data.Price}</Text>
    </Flex>

  )
}

export default AllProducts
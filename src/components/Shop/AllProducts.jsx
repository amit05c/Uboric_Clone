import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import Aos from 'aos'
import "aos/dist/aos.css"

const AllProducts = ({data}) => {
  const navigate= useNavigate()

  useEffect(()=>{
    
    Aos.init({duration:1000})
    
  },[])

  return (
    <Flex  data-aos='fade-up'    //border={"1px solid red"} 
     direction={"column"} justifyContent="center" alignItems={"center"}
onClick={()=>navigate(`/shop/${data.id}`)}
    >
        <Image data-aos='fade-up' src={data.images} boxSize="60%"  />
        
       <Box data-aos='fade-up' width="60%"><Text color={"black"} as={"b"}>{data.title}</Text></Box> 
        <Text data-aos='fade-up' color="red" as={"b"}>{`₹ ${data.Price}`}</Text>
    </Flex>

  )
}

export default AllProducts
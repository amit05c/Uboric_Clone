import { Box, Flex, Grid, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux"
import AllProducts from '../components/Shop/AllProducts'
import { getData } from '../Redux/ProductsReducer/action'

const Shop = () => {
    const {products}= useSelector(state=>state.ProductReducer)
    const dispatch= useDispatch()
    console.log(products)
    
    useEffect(()=>{
      dispatch(getData())
    },[])


  return (
    <Flex w="100%" >
      <Box w="20%">fjfjfjfjf</Box>

      <Grid templateColumns='repeat(3, 1fr)' gap={6}>
 
        
        {products.map(item=>(

        <AllProducts key={item.id} data={item}/>
        ))}
      </Grid>
    </Flex>
  )
}

export default Shop
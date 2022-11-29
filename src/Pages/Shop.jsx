import {
  Box,
  Flex,
  Grid,
  SimpleGrid,
  Spacer,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams, useLocation } from "react-router-dom";
import AllProducts from "../components/Shop/AllProducts";
import { Brand } from "../components/Shop/Brand";
import Category from "../components/Shop/Category";
import { Price } from "../components/Shop/Price";
import { getData } from "../Redux/ProductsReducer/action";
const breakpoints = {
  sm: "repeat(1,1fr)",
  md: "repeat(2,1fr)",
  lg: "repeat(3,1fr)",
};
const Shop = () => {
  let { products } = useSelector((state) => state.ProductReducer);
  console.log(products);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();
  // const [update, setUpdate] = useState("false");
  // const [updateData, setUpdateData] = useState([]);
  // const [data,setData]= useState(products)

  // console.log(products)
  // console.log(searchParams)

  // const filterPrice = async (start, end) => {
  //   dispatch(getData());
  //   setUpdate("true");
  //   let newData = products.filter(
  //     (el) =>
  //       Number(el.Price) >= Number(start) && Number(el.Price <= Number(end))
  //   );
  //   setUpdateData(newData);
  // };

  
  // useEffect(() => {
  //   dispatch(getData());
  // }, [update]);


  // console.log(location.search)
  useEffect(() => {
    if (location || products.length == 0) {
      //  products=products.filter(el=>Number(el.Price)>=100 && Number(el.Price<=500))
      //  setData(newProd)

      // const sortBy= searchParams.getAll('sortBy')
      const category = searchParams.getAll("category");
      const brand = searchParams.getAll("brand");
      const Price = searchParams.getAll("range");
      // console.log(Price);
      // console.log(brand);
      let params = {
        category,
        brand,
        Price,
      };
      console.log(params);
      const queryParams = {
        params: {
          category: category,
          brand: brand,
          Price: Price,
        },
      };
      // console.log(`params ${queryParams.pa}`)
      dispatch(getData(queryParams));
    }else{
      dispatch(getData())
    }
  }, [location]);

  // console.log(products)

  // useEffect(()=>{
  //   dispatch(getData())

  // },[location.search])

  return (
    <Flex w="100%" gap="2rem" padding="2rem">
      <Stack w="20%" gap={"1rem"}>
        <Price  />

        <Brand />

        <Category />
      </Stack>

      <Grid templateColumns={breakpoints} gap={6} cursor={"pointer"} w="80%">
        {/* {update == "true"
          ? updateData.map(
              (item) => (
                console.log(update), (<AllProducts key={item.id} data={item} />)
              )
            )
          : products?.map((item) => <AllProducts key={item.id} data={item} />)} */}
        { products?.map(item=>(

<AllProducts key={item.id} data={item}/>
))}
      </Grid>
    </Flex>
  );
};

export default Shop;

import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Home'
import Shop from "./Shop"
import ProductDetails from "./ProductDetails"
import Login from "./Login"
import Cart from "./Cart"
import AboutUs from './AboutUs'
import Checkout from './Checkout'
import ContactUs from './ContactUs'
import WishList from './WishList'
import SignUp from './SignUp'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/shop/:id' element={<ProductDetails/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/wishlist' element={<WishList/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        
    </Routes>
  )
}

export default AllRoutes
import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Home'
import Shop from "./Shop"
import ProductDetails from "./ProductDetails"
import SignIn from './SignIn'
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
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/wishlist' element={<WishList/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/SignIn' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        
    </Routes>
  )
}

export default AllRoutes
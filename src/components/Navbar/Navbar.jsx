import React from 'react'
import '../Navbar/Navbar.css';
import {BsHandbag} from "react-icons/bs"
import {AiOutlineHeart,AiOutlineSearch} from "react-icons/ai"
import {MdOutlineManageAccounts} from "react-icons/md"
const Navbar = () => {
  return (
   <>
     <p className='app'>
     FOR ONLINE PAYMENT EXTRA ₹10% DISCOUNT ON ORDERS ABOVE ₹500
  </p>
  <br/>
  <div className='menu-bar'>
    <img className='logo' 
    src='logo.png' alt='logo'/>
 <div className='menu'>
     <a href='/' className='hover-underline-animation' >Home</a>
     <a href='/about-us' className='hover-underline-animation' >About Us </a>
     <a href='/shop' className='hover-underline-animation' >Shop</a>
     <a href='/categories' className='hover-underline-animation' >Categories</a>
    <a href='/contact-us' className='hover-underline-animation' >Contact Us</a>
 </div>
<div className='icons'>
  <a href='sign-in'><MdOutlineManageAccounts style={{fontSize:"1.5rem"}}/></a>
<a href='shop'><AiOutlineSearch style={{fontSize:"1.5rem"}}/></a>
<a href='whishlist'><AiOutlineHeart style={{fontSize:"1.5rem"}}/></a>
<a href='checkout'><BsHandbag style={{fontSize:"1.5rem"}}/></a>
</div>
  </div>
   </>
   
  )
}

export default Navbar
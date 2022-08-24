import React from 'react'
// import {PhoneIcon } from '@chakra-ui/icon'
import '../Navbar/Navbar.css';

const Navbar = () => {
  return (
   <>
     <p className='app'>
     FOR ONLINE PAYMENT EXTRA ₹10% DISCOUNT ON ORDERS ABOVE ₹500
  </p>
  <br/>
  <div className='menu-bar'>
    <img height= "70px"
    width="100px" src='logo.png' alt='logo'/>
 <div className='menu'>
     <a href='home' className='hover-underline-animation' >Home</a>
     <a href='about' className='hover-underline-animation' >About Us </a>
     <a href='shop' className='hover-underline-animation' >Shop</a>
     <a href='categories' className='hover-underline-animation' >
     <select>Categories
      <option>Shop</option>
      <option>Shop</option>
      </select>
     </a>
     
     <a href='contact_us' className='hover-underline-animation'>Contact Us</a>
 </div>
{/* < PhoneIcon/> */}
  </div>
   </>
   
  )
}

export default Navbar
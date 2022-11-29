import React from 'react'
import '../Navbar/Navbar.css';
import {BsHandbag} from "react-icons/bs"
import {AiOutlineHeart,AiOutlineSearch} from "react-icons/ai"
import {MdOutlineManageAccounts} from "react-icons/md"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { logout } from '../../Redux/AuthReducer/action';

const Navbar = () => {
  const navigate= useNavigate()
  let {token,user,isAuth}= useSelector(state=>state.AuthReducer)
  const dispatch= useDispatch()
   user= user.toUpperCase().split("").join("")
  //  console.log(user,isAuth)
  const handleClick= async()=>{

    dispatch(logout())
    navigate("/sign-in")

  }

  useEffect(()=>{
    // console.log("amit")
 },[isAuth])
  return (
   <>
     <p className='app'>
     FOR ONLINE PAYMENT EXTRA ₹10% DISCOUNT ON ORDERS ABOVE ₹500
  </p>
  <br/>
  <div className='menu-bar'>
   <Link to="/"><img className='logo' 
    src='logo.png' alt='logo'/></Link> 
 <div className='menu'>
     <a href='/' className='hover-underline-animation' >Home</a>
     <a href='/about-us' className='hover-underline-animation' >About Us </a>
     <a href='/shop' className='hover-underline-animation' >Shop</a>
     <a href='/categories' className='hover-underline-animation' >Categories</a>
    <a href='/contact-us' className='hover-underline-animation' >Contact Us</a>
 </div>
<div className='icons'>
{isAuth  ? <Box><Text bg={"black"} color="white">{user}</Text><Button bg={"green.300"} onClick={handleClick}>Logout</Button></Box> : <Link to="/sign-in"><MdOutlineManageAccounts style={{fontSize:"1.5rem"}}/></Link> }  
<AiOutlineSearch style={{fontSize:"1.5rem"}}/>
<AiOutlineHeart style={{fontSize:"1.5rem"}}/>
 <Link to="/cart"><BsHandbag style={{fontSize:"1.3rem"}}/></Link>    
</div>
  </div>
   </>
   
  )
}

export default Navbar
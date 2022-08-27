import React from 'react'
import Slider from '../components/slider/Slider'
import styles from "../Styles/Home.module.css"
import {AiOutlineArrowRight} from "react-icons/ai"
const Home = () => {
  return (
    <div>
      <Slider/>
      {/* images */}
    <div className={styles.imgs}>
    <h1 style={{position:"absolute",paddingLeft:"10%", fontWeight:"bold", fontSize:"170%"}}>Kitchen</h1>
    <p style={{position:"absolute",marginTop:"30px",fontWeight:"40px",paddingLeft:"10%"}}>Tools</p>
    <h1 style={{position:"absolute",paddingLeft:"40%", fontWeight:"bold", fontSize:"170%"}}>Air Tools</h1>
    <p style={{position:"absolute",marginTop:"30px",fontWeight:"40px",paddingLeft:"40%"}}>Containers</p>
     <img className={styles.img1} width="32%"  src='kitchen.jpg' alt='kitchen'/>
    <img className={styles.img1}  width="32%" src='food.jpg' alt='kitchen'/>
    <img className={styles.img1}  width="32%"  src='Gas.jpg' alt='kitchen'/>
    </div>
    {/* Shop By Category */}
    <h1 style={{fontWeight:"bold",fontSize:"30px"}}>Shop By Category</h1>
    <div className={styles.menu}>
     <a href='home' className='hover-underline-animation' >Electronics</a>
     <a href='about' className='hover-underline-animation' >Clothing </a>
     <a href='shop' className='hover-underline-animation' >Foot Wear</a>
     {/* <div className={styles.secondslider} style={{backgroundImage:"banner2-1.jpg"}}> */}
    
 </div>
<div className={styles.main}>
<div className={styles.secondSlider}
      style={{ height:"290px",width:"50%",marginLeft:"30px",
      backgroundImage: `url("banner.jpg")` 
    }}>
     </div>
     <div className={styles.secondSlider}
      style={{ height:"290px",width:"50%",marginLeft:"30px",
      backgroundImage: `url("banners.jpg")` 
    }}></div>
</div>
<div className={styles.textimg}>
  <h1 style={{fontWeight:"bold",paddingTop:"18px",fontSize:"28px"}}>Bathroom Accessories</h1>
  <div className={styles.tag}>
  <p style={{display:"flex", marginLeft:"40%",maarginTop:"5px"}}>shop now 
   <AiOutlineArrowRight/>
   </p>
  </div>
</div>
      </div>
  )
}

export default Home

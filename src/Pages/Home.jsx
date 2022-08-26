import React from 'react'
import Slider from '../components/Home/slider/Slider'
import styles from "../Styles/Home.module.css"
import {AiOutlineArrowRight} from "react-icons/ai"
import TextSlider from '../components/Home/slider/TextSlider'

 
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
    {/* <div className={styles.img1}> */}
    <div className={styles.childs}>
    <img    src='kitchen.jpg' alt='kitchen'/>
    </div>
    <div className={styles.childs}>
    <img  src='food.jpg' alt='kitchen'/>
    </div>
    <div className={styles.childs}>
    <img   src='Gas.jpg' alt='kitchen'/>
    </div>
    
    {/* </div> */}
    
    
    </div>
    {/* Shop By Category */}
    <h1 style={{fontWeight:"bold",fontSize:"30px"}}>Shop By Category</h1>
    {/* <TextSlider/> */}
    <div className={styles.menu}>
     <a href='home' className={styles.hoverunderlineanimation} >Electronics</a>
     <a href='about' className={styles.hoverunderlineanimation}>Clothing </a>
     <a href='shop' className={styles.hoverunderlineanimation}>Foot Wear</a>
 </div>
 <TextSlider/>
<div className={styles.main}>
<div className={styles.secondSlider}
      style={{ height:"290px",gap:"20px",width:"49%",
      backgroundImage: `url("banner.jpg")` 
    }}>
     </div>
     <div className={styles.secondSlider}
      style={{ height:"290px",gap:"20px",width:"49%",marginLeft:"30px",
      backgroundImage: `url("banners.jpg")` 
    }}></div>
</div>
<div className={styles.textimg}>
  <h1 style={{fontWeight:"bold",paddingTop:"18px",fontSize:"28px"}}>Bathroom Accessories</h1>
  <div className={styles.tag}>
  <p style={{display:"flex", marginLeft:"40%",marginTop:"5px"}}>shop now 
   <AiOutlineArrowRight style={{marginLeft:"15px",marginTop:"7px"}}/>
   </p>
  </div>
  
</div>
<div className={styles.textimg1}>
  <h1 style={{fontWeight:"bold",paddingTop:"18px",fontSize:"28px"}}>Electric 
  Appliances</h1>
  <div className={styles.tag}>
  <p style={{display:"flex", marginLeft:"40%",marginTop:"5px"}}>shop now 
   <AiOutlineArrowRight style={{marginLeft:"15px",marginTop:"7px"}}/>
   </p>
  </div>
</div>

<div className={styles.main}>
<div className={styles.secondSlider}
      style={{ height:"290px", gap:"10px",width:"49%",
      backgroundImage: `url("Third.jpg")` 
    }}> 
     </div>
     <div className={styles.secondSlider}
      style={{ height:"290px",width:"50%",marginLeft:"30px",
      backgroundImage: `url("banner4.jpg")` 
    }}>
  </div>
</div>
<div className={styles.textimg}>
  <h1 style={{fontWeight:"bold",paddingTop:"18px",fontSize:"28px"}}>Clothing</h1>
  <div className={styles.tag}>
  <p style={{display:"flex", marginLeft:"40%",marginTop:"5px"}}>shop now 
   <AiOutlineArrowRight style={{marginLeft:"15px",marginTop:"7px"}}/>
   </p>
  </div>
</div>
<div className={styles.textimg1}>
  <h1 style={{fontWeight:"bold",paddingTop:"18px",fontSize:"28px"}}>Painting</h1>
  <div className={styles.tag}>
  <p style={{display:"flex", marginLeft:"40%",marginTop:"5px"}}>shop now 
   <AiOutlineArrowRight style={{marginLeft:"15px",marginTop:"7px"}}/>
   </p>
  </div>
</div>
<h1 style={{fontWeight:"bold",fontSize:"30px"}}>Best Selling Product</h1>
 <div className={styles.products}>
  </div>  
  <h1 style={{fontWeight:"bold",fontSize:"30px"}}>New Arrivals</h1> 
  <div className={styles.products}>
  </div>   
  <h1 style={{fontWeight:"bold",fontSize:"30px"}}>
The Ultimate Domestic Online Shopping Experience Platform in India</h1>
  <div className={styles.products}>
  </div>  

</div>
  )
}

export default Home

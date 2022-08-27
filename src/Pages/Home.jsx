import React from 'react'
import Slider from '../components/slider/Slider'
import styles from "../Styles/Home.module.css"
import {AiOutlineArrowRight} from "react-icons/ai"
import TextSlider from '../components/slider/TextSlider'
import SecondSlider from '../components/slider/SecondSlider'
import ThirdSlider from '../components/slider/ThirdSlider'

 
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
  <h1 style={{fontWeight:"bold",paddingTop:"18px",fontSize:"28px"}}>
    Bathroom Accessories</h1>
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
      backgroundImage: `url("Third.jpg")`}}> 
     </div>
     <div className={styles.secondSlider}
      style={{ height:"290px",width:"50%",marginLeft:"30px",
      backgroundImage: `url("banner4.jpg")`}}>
  </div>
</div>
<div className={styles.textimg}>
  <h1 style={{fontWeight:"bold",paddingTop:"18px",fontSize:"28px"}}>Clothing</h1>
  <div className={styles.tag}>
  <p style={{display:"flex", marginLeft:"40%",marginTop:"5px"}}>shop now 
   <AiOutlineArrowRight className={styles.tag} style={{marginLeft:"15px",marginTop:"7px"}}/>
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
  <SecondSlider/>
  </div>  
  <h1 style={{fontWeight:"bold",fontSize:"30px"}}>New Arrivals</h1> 
  <div className={styles.products}>
    <ThirdSlider/>
  </div>   
  <h1 style={{fontWeight:"bold",fontSize:"30px"}}>
The Ultimate Domestic Online Shopping Experience Platform in India</h1>
  <div className={styles.paragraph}>
    <p>Online shopping with Uboric is quick, convenient and trouble-free. 
      You can shop for the desired product right from the comfort of your
       home and get them delivered straight to your doorstep. Uboric offers 
       you the chance to choose top branded products sitting in the comfort
        of your homes and just clicking on your requirements to get it delivered 
        at your doorstep. Your search for the latest trending variety of unique
         products ends right here. A wide range of international products from 
         global brands are available at your fingertips. We provide you with a
          world-class online shopping experience, along with superior service, 
          to suit all your specific requirements. Our products are very reasonably 
          priced and are not easily available elsewhere. Our high-end technology-based
           systems, combined with a human approach, ensure that you have an amazing and
            blissful online shopping experience with us. Our emphasis on customer delight 
            drives every activity we undertake to provide you an ultimate, hassle-free and
             pleasant shopping experience. Our diverse categories of products comprise of 
             fashion & jewellery, mobiles and tablets, home and furniture, electronics,
              health care and supplements, sports and fitness, beauty and perfumes.
               We offer almost every variety of product that your heart desires. 
               Just Go Ahead and Explore the magical world of online shopping with Uboric! 
               24×7 Customer Care: 
      For all your queries and concerns regarding your shopping orders.</p>
  </div>  
  <div className={styles.box}>
  <div className={styles.ben}>
    <h1 style={{fontWeight:"bold",fontSize:"30px"}}>Benefits Of Shopping</h1>
<div className={styles.p}>
<p>User-Friendly</p>
<p>Safe & Secure Shopping</p>
<p>Check Out Closely</p>
<p> Payment Options</p>
<p>Order History</p>
  <button className={styles.btn}>Shop now</button>
</div>
  </div>
<div className={styles.im}>
   <img src='maual.jpg' alt="kitchen"/>
</div>
  </div>
  <div className={styles.logos}>
    <div className={styles.truck}>
    <img  src='truck3.svg' alt='truck3'/>
    <div className={styles.tex}>
    <p style={{color:"black",fontsize:"10px"}}>FREE SHIPPING</p>
    <p style={{color:"gray"}}>From all orders over Rs 500</p>
    </div>
    </div>
    <div className={styles.truck}>
    <img   src='money.svg' alt='truck3'/>
    <div className={styles.tex}>
    <p style={{color:"black",fontsize:"10px"}}>FREE RETURNS</p>
    <p style={{color:"gray"}}>Return money within 30 days</p>
    </div>
    </div>
    <div className={styles.truck}>
    <img  src='box.svg' alt='truck3'/>
    <div className={styles.tex}>
    <p style={{color:"black",fontsize:"10px"}}>SECURE SHOPPING</p>
    <p style={{color:"gray"}}>You're in safe hands</p>
    </div>
    </div>
    <div className={styles.truck}>
    <img  src='like.svg' alt='truck3'/>
    <div className={styles.tex}>
    <p style={{color:"black",fontsize:"10px"}}>OVER 10,000 STYLES</p>
    <p style={{color:"gray"}}>We have everything you need</p>
    </div>
    </div>
  </div>
</div>
  )
}

export default Home
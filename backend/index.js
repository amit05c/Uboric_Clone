const {connection} = require("./config/db")
const {userRouter} = require("./routes/user")
const express= require("express")
const {authentication} = require("./middleware/athentication")
const { dataRouter } = require("./routes/data")
const { cartRouter } = require("./routes/cart")
const cors= require("cors")
const app= express()
const PORT= process.env.PORT || 8080
app.use(cors())
app.get("/",async(req,res)=>{
    res.send("welcome to myntra")
})

  
app.use(express.json())
app.use("/user",userRouter)
app.use("/data",dataRouter)
app.use(authentication)
app.use("/cart",cartRouter)

app.listen(PORT, async()=>{
  try{
     await connection
     console.log("server connected")
  }
  catch(err){
      console.log(err)
  }
})
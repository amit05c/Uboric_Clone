const {Router}= require("express")
const cartRouter= Router()
const {CartModel}= require("../model/cart.model")
const {DataModel}= require("../model/data.model")

cartRouter.post("/add/:_id",async(req,res)=>{
    let {userId,size,quantity}=(req.body)
    let {_id}=(req.params)
   let data= await DataModel.findOne({_id})
//    res.send({message: data})
// console.log(_id)
// console.log(data)
let total= data.Price*Number(quantity)
// console.log(data.images)
   let newCartData=new CartModel({ 
    category: data.category,
    item: data.item,
    title: data.title,
    size,
    image_url: data.images,
    userId,
    quantity,
    price:data.Price,
    total,
    productId: data._id
   })
//    console.log(_id)
//    console.log(newCartData)
    await newCartData.save()
res.send("sended")
   
})

cartRouter.get("/cartdata",async (req,res)=>{

       
    try{
        let {userId}=req.body
        // console.log(userId)
        let cartdata = await CartModel.find({userId})
        // console.log(cartdata)
        let total= cartdata.reduce((pre,next)=>(pre+next.total),0)
        // console.log(cartdata)
        // console.log(total)
        res.status(200).send({cartdata,total})
    }
    catch(err){
      res.status(400).send({error: "something error"})
    }

})


cartRouter.delete("/delete/:_id",async (req,res)=>{
    try{
        let {_id}=req.params
        await CartModel.findOneAndDelete({_id})
        res.status(200).send("Deleted")
    }
    catch(err){
       res.status(400).send("Something Error")
    }
})

cartRouter.patch("/update/:_id", async (req,res)=>{
    let {_id}= req.params
    let {quantity,price}= req.body
     let total= quantity*price
     await CartModel.findOneAndUpdate({_id},{quantity,total})

    // let total= update.reduce((pre,next)=>pre+next.quantity)
   res.send("done")

})
 
cartRouter.delete("/checkout",async(req,res)=>{
    let {userId}=req.body
  await CartModel.deleteMany({userId})


   res.status(200).send("done")
})





module.exports={
    cartRouter
}

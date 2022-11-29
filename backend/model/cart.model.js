const mongoose= require("mongoose")

const cartSchema= new mongoose.Schema({
    category: {type: String, require:true},
    title: {type: String, require : true},
    item: String,
    image_url: String,
    size:String,
    price: Number,
    total: Number,
    userId:String,
    quantity: Number,
    productId: String
})




const CartModel = mongoose.model('cart_data',cartSchema)
module.exports={
    CartModel
}


const mongoose= require("mongoose")

const dataSchema= new mongoose.Schema({
    category: {type: String, require:true},
    title: {type: String, require : true},
    item: String,
    images: {type: String},
    Price: Number,
    brand:String,
    size:{type: [String]},
})

const DataModel = mongoose.model('data',dataSchema)
module.exports={
    DataModel
}

module.exports={
   DataModel
}
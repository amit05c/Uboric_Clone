const { Router } = require("express");
const dataRouter = Router();
const { DataModel } = require("../model/data.model");
dataRouter.get("/", async (req, res) => {
  // res.send({message: })
  
     let query = req.query;
    
    let Price = query.Price || []
  
    let category = query.category  || []
    let brand= query.brand || []
  

    if (Price.length > 0 && brand.length > 0 && category.length>0) {
      // console.log("all");
      let data = await DataModel.find({
        $and: [{ Price: { $gte: Price[0] } }, { Price: { $lte: Price[1] }},{ brand: { $in: [...brand ] } }, { category: { $in: [...category ] } }],
      });
      // let data = await DataModel.find({
      //     brand: { $all: brand },
      //     Price: { $gte: Price[0] },
      //     Price: { $lte: Price[1] },
      //     category
      //   });
      // let newData = data.filter((el) => brand.includes(el.brand));
      // console.log(data);
      res.send({data});
    } else if (Price.length > 0 && brand.length > 0) {
      console.log("pb")
      
      let data = await DataModel.find({
          $and: [{ Price: { $gte: Price[0] } }, { Price: { $lte: Price[1] }},  { brand: { $in: [...brand ] } }  ]});
          // let newData=[]
          // for(let i=0; i<brand.length; i++){
          //   for(let j=0; j<data.length; j++){
          //     if(brand[i]==data[j].brand){
          //        newData.push(data[j])
          //     }
          //   }
          // }

          
      res.send({data});
    } else if (Price.length > 0 && category.length>0) {
      //PC
      console.log("pc");
      let data = await DataModel.find({
          $and: [{ Price: { $gte: Price[0] } }, { Price: { $lte: Price[1] }},{ category: { $in: [...category ] } }],
        });
      res.send({data});
    } else if (brand.length > 0 && category.length) {
      //IC
      console.log("IC");
      let data = await DataModel.find({ $and: [{ brand: { $in: [...brand ] } }, { category: { $in: [...category ] } }] });
      res.send({data});
    } else if (brand.length > 0 && Price.length > 0) {
      //IP
      let data = await DataModel.find({
        brand: { $in: [...brand ] },
        Price: { $gte: Price[0] },
        Price: { $lte: Price[1] },
      });
      console.log(data);
      res.send({data});
    }else if(Price.length>0){
      let data = await DataModel.find({
          $and: [{ Price: { $gte: Price[0] } }, { Price: { $lte: Price[1] } }],
        });
        res.send({data})
    }else if(brand.length>0){
      //I
      
      let data = await DataModel.find({ brand: { $in: [...brand ] } });
      res.send(data);
    }else if(category.length>0){
      // C
      let data = await DataModel.find({category: { $in: [...category ] }});
      res.send({data});
    }else{
      console.log("amit")
      let data = await DataModel.find({});
      res.send({ data });
    }
  
  
});

dataRouter.get("/singleProd/:id", async (req, res) => {
  let { id } = req.params;

  console.log(id);
  let data = await DataModel.findOne({ id });
  console.log({data});

  console.log("amit");
  res.send({data});
});

dataRouter.get("/sort", async (req, res) => {
  let data = await DataModel.find().sort({ Price: 1 });
  console.log(data);
  res.send(data);
});

dataRouter.get("/filter", async (req, res) => {
  let query = req.query;
  console.log(query)
  let Price = query.Price?.split(" ") || [];
  let brand = query.brand?.split(",") || [];
  let category = query.category;

//   let filter = {}

// if(category)
// {
//   filter.category = category
// }
// if(Price.length>0)
// {
//   filter.Price = Price
// }
// if(brand.length>0)
// {
//   filter.brand = brand
// }

// let data = await DataModel.find({
//     $and: [{ Price: { $gte: filter.Price[0] } }, { Price: { $lte: filter.Price[1] },brand: {$all: brand} }],
//   });
//   res.send(data);
  //   let search = {
  //     brand: query.brand?.split(",") || [],
  //   };
  // console.log(brand)
  if (Price.length > 0 && brand.length > 0 && category) {
    console.log("all");
    let data = await DataModel.find({
      $and: [{ Price: { $gte: Price[0] } }, { Price: { $lte: Price[1] },brand: {$all: brand},category }],
    });
    // let data = await DataModel.find({
    //     brand: { $all: brand },
    //     Price: { $gte: Price[0] },
    //     Price: { $lte: Price[1] },
    //     category
    //   });
    // let newData = data.filter((el) => brand.includes(el.brand));
    // console.log(data);
    res.send(data);
  } else if (Price.length > 0 && brand.length > 0) {
    //PI
    let data = await DataModel.find({
        $and: [{ Price: { $gte: Price[0] } }, { Price: { $lte: Price[1] },brand: {$all: brand} }]
      });
    res.send(data);
  } else if (Price.length > 0 && category) {
    //PC
    console.log("pc");
    let data = await DataModel.find({
        $and: [{ Price: { $gte: Price[0] } }, { Price: { $lte: Price[1] },category }],
      });
    res.send(data);
  } else if (brand.length > 0 && category) {
    //IC
    console.log("IC");
    let data = await DataModel.find({ brand: { $all: brand }, category });
    res.send(data);
  } else if (brand.length > 0 && Price.length > 0) {
    //IP
    let data = await DataModel.find({
      brand: { $all: brand },
      Price: { $gte: Price[0] },
      Price: { $lte: Price[1] },
    });
    console.log(data);
    res.send(data);
  }else if(Price.length>0){
    let data = await DataModel.find({
        $and: [{ Price: { $gte: Price[0] } }, { Price: { $lte: Price[1] } }],
      });
      res.send(data)
  }else if(brand.length>0){
    //I
    
    let data = await DataModel.find({ brand: { $all: brand } });
    res.send(data);
  }else{
    // C
    let data = await DataModel.find({category});
    res.send({data});
  }
});

module.exports = {
  dataRouter,
};

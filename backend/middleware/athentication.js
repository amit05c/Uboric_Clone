const jwt = require('jsonwebtoken');
require('dotenv').config()
const authentication= (req,res,next)=>{
    const token= req.headers?.authorization?.split(" ")[1]

    
    jwt.verify(token, process.env.JWT_SECRET, async function(err, decoded) {
        // console.log(decoded)
        if(err){
            // console.log(err)
            res.send({"Error":"someting error"})
        }else{
            
           req.body.userId=decoded.userId
           req.body.name=decoded.name
          next()
        }
    
        
      });
}

module.exports={
    authentication
}
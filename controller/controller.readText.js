const {TextReadService} = require('../service')
const response = require('../model/response')
const textPost = (req,res,next)=>{
      const text = req.body.text
       TextReadService.ReadTextSerivce(text).then(data=>{
         if(data.length==0){
               res.json(response({success:false,messge:"failed"}))
         }
         else{
             res.json(response({success:true,messge:"succeded"}))
         }
       }) 
}
module.exports= {textPost}
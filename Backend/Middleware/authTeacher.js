import jwt from "jsonwebtoken"

//student authentication middleware
const authTeacher=async (req,res,next)=>{
  try{

   const {itoken}=req.headers

   if(!itoken){
     return res.json({success:false,message:"Not Autherized Login Again"})
   }
   const token_decode=jwt.verify(itoken,"homelander")
   
   
   req.body.teacherId=token_decode.id
  next();
  }catch(error){
      console.log(error);
      res.json({success:false,message:error.message})
  }
}
export default authTeacher;
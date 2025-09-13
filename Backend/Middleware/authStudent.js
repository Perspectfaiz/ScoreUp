import dotenv from "dotenv"
// dotenv.config();
import jwt from "jsonwebtoken"
dotenv.config();
//student authentication middleware
const authStudent=async (req,res,next)=>{
  try{

   const {token}=req.headers

   if(!token){
     return res.json({success:false,message:"Not Autherized Login Again"})
   }
   const token_decode=jwt.verify(token, process.env.JWT_SECRET)
   
   
   req.body.studentId=token_decode.id
  //console.log("auth success");
  next();
  }catch(error){
      console.log(error);
      res.json({success:false,message:error.message})
  }
}
export default authStudent;
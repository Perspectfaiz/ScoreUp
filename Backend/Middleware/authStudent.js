import jwt from "jsonwebtoken"

//student authentication middleware
const authStudent=async (req,res,next)=>{
  try{

   const {token}=req.headers

   if(!token){
     return res.json({success:false,message:"Not Autherized Login Again"})
   }
   const token_decode=jwt.verify(token,"homelander")
   
   
   req.body.studentId=token_decode.id
  next();
  }catch(error){
      console.log(error);
      res.json({success:false,message:error.message})
  }
}
export default authStudent;
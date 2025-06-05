
import feedbackModel from "../Models/feedbackModel.js";
import studentModel from "../Models/studentModel.js";
const addFeedback= async (req,res)=>{
  try{
   const {message,studentId,teacherId}=req.body;
  
   if(!message){
     res.json({success:false,message:"missing information"});
   }
   var username = "";
 if(studentId){
 username = await studentModel.findById(studentId).select("username");
 }else{
 username = await studentModel.findById(teacherId).select("username");
 }
   const feedbackData={
     username,
     message
   }
   console.log(feedbackData);
    const newFeedback=new feedbackModel(feedbackData);
      await newFeedback.save();
    res.json({success:true,message:"Feedback Added"});
  }catch(error){
    console.log(error);
    res.json({success:false,message:error.message});
  }
}
export {addFeedback};


import feedbackModel from "../Models/feedbackModel.js";

const addFeedback= async (req,res)=>{
  try{
   const {user_id,message}=req.body;
   if(!user_id || !message){
     res.json({success:false,message:"missing information"});
   }
   const feedbackData={
     user_id,
     message
   }
    const newFeedback=new feedbackModel(feedbackData);
      await newFeedback.save();
    res.json({success:true,message:"Feedback Added"});
  }catch(error){
    console.log(error);
    res.json({success:false,message:error.message});
  }
}
export {addFeedback};

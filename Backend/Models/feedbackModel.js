
import mongoose from "mongoose";

const feedbackSchema=new mongoose.Schema({
      username:{type:String,require:true},
      message:{type:String,require:true}
})
const feedbackModel = mongoose.model('feedbackModel', feedbackSchema);
export default feedbackModel;
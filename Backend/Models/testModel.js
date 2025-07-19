import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
   details: {
      title: { type: String, required: true },
      testId: { type: String, required: true },
      teacherId: { type: String, required: true },
      teacherName: { type: String, required: true },
      time: { type: Number, required: true },
      attempted: { type: Number, default: 0 },
      avgScore: { type: Number, default: 0 },
      stream: { type: String, required: true },
      tag: { type: String, required: true }
   },
   section: [
      {
         index: { type: Number, required: true },
         subName: { type: String, required: true },
         list: [
            {
               index: { type: Number, required: true },
               state: { type: Number, required: true },
               qstat: { type: String },
               image: { type: String },
               options: [{ type: String }],
               ans: { type: Number },
               qnstat: { type: String, required: true }
            }
         ]
      }
   ]
});

const testModel = mongoose.model('TestModel', testSchema);  // Corrected the model name capitalization
export default testModel;
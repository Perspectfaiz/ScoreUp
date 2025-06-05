import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
    details:{
    title: { type: String, required: true },
    id: { type: String, required: true },
    teacher_id: { type: String, required: true },
    teacher_name: { type: String, required: true },
    time: { type: Number, required: true },
    attempted:{type:Number,default:0},
    max_score:{type:Number,required:true},
    avg_score:{type:Number,default:0},
    tag: { type: String, required: true },
    },
    section: [{
        subName: { type: String, required: true }, // Corrected 'require' to 'required'
        list: [{
            state: { type: Number },
            qstat: { type: String },
            image: { type: String },
            options: [{ type: String }],
            ans: { type: String, default: "Not Defined" }
        }]
    }]
});

const testModel = mongoose.model('TestModel', testSchema);  // Corrected the model name capitalization
export default testModel;

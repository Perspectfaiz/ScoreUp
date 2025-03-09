import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
    test_id: { type: String, required: true }, // Corrected 'require' to 'required'
    teacher_id: { type: String },
    time: { type: Number },
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

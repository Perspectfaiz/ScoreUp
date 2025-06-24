import mongoose from "mongoose";
//student model

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true,unique:true },
    password: { type: String, required: true },
    email: {
        type: String,
        required: true, // Ensures email is required
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
        unique: true
    },
    image: {
        type: String,
        default: "https://media.gettyimages.com/id/1796422866/photo/semi-final-icc-mens-cricket-world-cup-india-2023.jpg?s=2048x2048&w=gi&k=20&c=VqquPlCruyvMbFOOj-mSJ4EoVTICXlkixxe7LCeB6YA="
    },
    address: { type: String, default: "Not Updated" },
    gender: { type: String, default: "Not Selected" },
    dob: { type: String, default: "Not Selected" },
    phone: { type: String, default: "0000000000" },
    stream:{ type:String, default:"Not Selected"},
    location:{ type:String, default:"Not Selected"},
    university:{ type:String, default:"Not Selected"},
    description:{ type:String, default:"...."},
    classes:{ type:String, default:"12"},
    testHistory: [{
        testId: { type: String },
        name: { type: String },
        date: { type: String },
        score: { type: Number },
        status: { type: String }
    }],
    favoriteTests: [{ type: String }], // Array of test IDs
    performanceData: [{
        month: { type: String },
        score: { type: Number }
    }]
});


const studentModel = mongoose.model('studentModel', studentSchema);

export default studentModel;

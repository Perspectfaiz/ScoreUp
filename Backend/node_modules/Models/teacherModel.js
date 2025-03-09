import mongoose from 'mongoose';

const teacherSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: {
        type: String,
        required: true,
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
        unique: true,
        index: true
    },
    field: { type: String, required: true, default: "like JEE/NEET" },
    image: { 
        type: String, 
        default: "https://media.gettyimages.com/id/1796422866/photo/semi-final-icc-mens-cricket-world-cup-india-2023.jpg?s=2048x2048&w=gi&k=20&c=VqquPlCruyvMbFOOj-mSJ4EoVTICXlkixxe7LCeB6YA="
    },
    address: { type: String, default: "Not Updated" },
    gender: { type: String, default: "Not Selected" },
    dob: { type: String, default: "Not Selected" },
    phone: { type: String, default: "0000000000" }
});

const teacherModel = mongoose.model('Teacher', teacherSchema);
export default teacherModel;

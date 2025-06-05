const mongoose = require("mongoose");

mongoose.connect("",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const teacherSchema= new mongoose.Schema({
    "username":{String,require:true},
    "password":{String,require:true},
}) 

const studentSchema= new mongoose.Schema({
    "username":{String,require:true},
    "password":{String,require:true},
    "email": {
        type: String,
        required: true, // Ensures email is required
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    },
    "Contact-No":Number 
})
const Student = mongoose.model('Student',studentSchema)
const Teacher = mongoose.model('Teacher',teacherSchema)

module.exports ={
    Student,
    Teacher
}
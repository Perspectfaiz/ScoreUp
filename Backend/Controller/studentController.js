import validator from 'validator';
import studentModel from "../Models/studentModel.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
//API to login

const signupStudent=async (req,res)=>{
    try{
        const {name,username,password,email}=req.body;
        
        // Check for missing information
        if(!name || !username || !password || !email){
            return res.json({success:false,message:"Missing information"});
        }

        // Validate email
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Invalid Email"});
        }

        // Check password length
        if(password.length<=8){
            return res.json({success:false,message:"Password length must be greater than 8"});
        }

        // Check if username or email already exists
        const existingUser = await studentModel.findOne({
            $or: [
                { username: username },
                { email: email }
            ]
        });

        if (existingUser) {
            if (existingUser.username === username) {
                return res.json({success: false, message: "Username already exists"});
            }
            if (existingUser.email === email) {
                return res.json({success: false, message: "Email already registered"});
            }
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new student
        const studentData = {
            name,
            email,
            password: hashedPassword,
            username
        };

        const newStudent = new studentModel(studentData);
        const user = await newStudent.save();
        const token = jwt.sign({id: user._id}, "homelander");
        
        res.json({success: true, token, message: "New user added successfully"});
    } catch(error) {
        console.log(error);
        res.json({success: false, message: "An error occurred during signup"});
    }
}

const loginStudent = async (req, res) => {
    try {
        const { usernameORemail, password } = req.body;
        let user = await studentModel.findOne({ email: usernameORemail });
        if (!user) {
            user = await studentModel.findOne({ username: usernameORemail });
        }
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        const match = await bcrypt.compare(password, user.password);
        if (match) {
            const token = jwt.sign({ id: user._id }, 'homelander', { expiresIn: '1h' }); // Include expiration for security
            return res.json({ success: true, token });
        } else {
            return res.json({ success: false, message: "Invalid credentials" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};
const getStudentProfileData = async (req, res) => {
    try {
       const {studentId}=req.body;
        const student = await studentModel.findById(studentId);
        if (student) {
            return res.json({ success: true, data: student });
        } else {
            return res.json({ success: false, message: "Student not found" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

//API to update student profile...

const updateStudentProfileData = async (req, res) => {
    try{
        const {studentId, name,dob,username,stream,university,address,phone,email,description,classes } = req.body;
        const student = await studentModel.findByIdAndUpdate(studentId, { name,dob,username,stream,university,address,phone,email,description,classes });
        
        if (student) {
            return res.json({ success: true, message: "Student profile updated" });
        } else {
            return res.json({ success: false, message: "Student not found" });
        }
    }
    catch(error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export {signupStudent,loginStudent,getStudentProfileData,updateStudentProfileData}


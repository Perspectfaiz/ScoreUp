import validator from 'validator';
import studentModel from "../Models/studentModel.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import {v2 as cloudinary} from "cloudinary";

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

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
            const token = jwt.sign({ id: user._id }, 'homelander', { expiresIn: '24h' }); // Include expiration for security
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
    try {
        console.log('updateStudentProfileData called');
        console.log('req.body:', req.body);
        console.log('req.file:', req.file);
        const { studentId, name, dob, username, stream, university, address, phone, email, description, classes, gender, location } = req.body;
        const imageFile = req.file;

        // Build update object only with provided fields
        const updateObj = {};
        if (name) updateObj.name = name;
        if (dob) updateObj.dob = dob;
        if (username) updateObj.username = username;
        if (stream) updateObj.stream = stream;
        if (university) updateObj.university = university;
        if (address) updateObj.address = address;
        if (phone) updateObj.phone = phone;
        if (email) updateObj.email = email;
        if (description) updateObj.description = description;
        if (classes) updateObj.classes = classes;
        if (gender) updateObj.gender = gender;
        if (location) updateObj.location = location;

        if (imageFile) {
            console.log('Uploading image to Cloudinary:', imageFile.path);
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
            console.log('Cloudinary upload result:', imageUpload);
            updateObj.image = imageUpload.secure_url;
    }
    
        const student = await studentModel.findByIdAndUpdate(studentId, updateObj, { new: true });
       
        if (student) {
            return res.json({ success: true, message: "Student profile updated", data: student });
        } else {
            return res.json({ success: false, message: "Student not found" });
        }
    } catch (error) {
        console.log('Error in updateStudentProfileData:', error);
        res.json({ success: false, message: error.message });
    }
}

const getTestHistory = async (req, res) => {
    try {
        const { studentId } = req.body;
        const student = await studentModel.findById(studentId);
        if (student) {
            return res.json({ success: true, testHistory: student.testHistory });
        } else {
            return res.json({ success: false, message: "Student not found" });
        }
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

const addTestHistory = async (req, res) => {
    try {
        const { studentId, test } = req.body; // test: { testId, name, date, score, status }
        const student = await studentModel.findById(studentId);
        if (student) {
            student.testHistory.push(test);
            await student.save();
            return res.json({ success: true, message: "Test history updated" });
        } else {
            return res.json({ success: false, message: "Student not found" });
        }
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

const getFavoriteTests = async (req, res) => {
    try {
        const { studentId } = req.body;
        const student = await studentModel.findById(studentId);
        if (student) {
            return res.json({ success: true, favoriteTests: student.favoriteTests });
        } else {
            return res.json({ success: false, message: "Student not found" });
        }
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

const setFavoriteTests = async (req, res) => {
    try {
        const { studentId, favoriteTests } = req.body; // favoriteTests: array of test IDs
        const student = await studentModel.findByIdAndUpdate(
            studentId,
            { $addToSet: { favoriteTests: { $each: favoriteTests } } },
            { new: true }
        );
        if (student) {
            return res.json({ success: true, message: "Favorite tests updated", favoriteTests: student.favoriteTests });
        } else {
            return res.json({ success: false, message: "Student not found" });
        }
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

const getPerformanceData = async (req, res) => {
    try {
        const { studentId } = req.body;
        const student = await studentModel.findById(studentId);
        if (!student) {
            return res.json({ success: false, message: "Student not found" });
        }

        // Sort testHistory by date
        const sortedHistory = [...student.testHistory].sort((a, b) => new Date(a.date) - new Date(b.date));

        // Build performance data: each point is the score after each test
        const performanceData = sortedHistory.map((test, idx) => ({
            month: test.date || `Test ${idx + 1}`,
            score: test.score
        }));

        return res.json({ success: true, performanceData });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

export {signupStudent,loginStudent,getStudentProfileData,updateStudentProfileData,getTestHistory,addTestHistory,getFavoriteTests,setFavoriteTests,getPerformanceData}


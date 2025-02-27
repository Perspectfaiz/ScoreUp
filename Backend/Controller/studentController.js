import validator from "validator";
import studentModel from "../Models/studentModel.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
//API to login

const signupStudent=async (req,res)=>{
    try{
    const {name,username,password,email}=req.body;
    if(!name || !username || !password || !email){
        res.json({success:false,message:"missing information"});
    }
    if(!validator.isEmail(email)){
res.json({success:false,message:"Invalid Email"});
    }
    if(password.length<=8){
        return res.json({success:false,message:"password length must be greater then 8"});
      }
       //hashing user password 
       const salt=await bcrypt.genSalt(10);
       const hashedPassword=await bcrypt.hash(password,salt);
      const studentData={
       name,
       email,
       password : hashedPassword,
       username
      }
      const newStudent=new studentModel(studentData);
     const user=await newStudent.save();
    const token =jwt.sign({id:user._id},"homelander");
     res.json({success:true,token})
    }catch(error){
        console.log(error);
     res.json({success:false,message:error.message})
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
export {signupStudent,loginStudent}


import validator from "validator"

import jwt from "jsonwebtoken"
import bcrypt from "bcrypt";
import teacherModel from "../Models/teacherModel.js";

import testModel from "../Models/testModel.js";

import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config(); // Ensure .env is loaded early

cloudinary.config({
   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET,
});


const signupTeacher= async (req,res)=>{
    try {
        const {name,username,password,email}= req.body;
    if(!name||!username||!password || !email){
    return res.status(400).json({
            success:false,
            message:"Missing Information"
        })
    }

    if(!validator.isEmail(email)){
    return res.status(404).json({
        success:false,
        message:"Invalid Email"
    })
    }
    if(password.length<8){
        return res.status(404).json({
            success:false,
            message:"Password must be greater than or equal to 8 characters"
        })
    }
    // Validation ke baad ka process
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);
    const teacherData={
        name,
        username,
        password:hashedPassword,
        email
    }
    const newTeacher = new teacherModel(teacherData);
    const user = await newTeacher.save();
    const itoken = await jwt.sign({id:user._id},"homelander")
    res.status(201).json({
        success:true,itoken })

    } catch (error) {
        res.status(404).json({
            success:false,
            message:error.message
        })
    }
}

const loginTeacher= async(req,res)=>{
    try {
        const {usernameORemail,password}= req.body;


    let user= await teacherModel.findOne({email:usernameORemail});

    if(!user){
        user=await teacherModel.findOne({username:usernameORemail});
    }
    if(!user){

       return res.status(404).json({success:false,message:"User not found"})
    }
    const match = await bcrypt.compare(password,user.password);
    if(match){
        const itoken = jwt.sign({id:user._id},'homelander',{expiresIn:'24h'})

       return res.json({success:true,itoken})
    }
    else{
        return res.status(404).json({
            success:false,
            message:"Invalid credentials"
        })
    }
    } catch (error) {
        res.status(404).json({
            success:false,
            message:error.message
        })
    }
}
// Api to get teacher profile data


const getTeacherProfileData = async (req, res) => {

 try{
   const {itoken}=req.headers;
   if(!itoken){
        return res.json({success:false, message:"Not Authorized Login Again"})
    }

    const token_decode=jwt.verify(itoken, process.env.JWT_SECRET);
   
    const teacher = await teacherModel.findById(token_decode.id);
   if(teacher){
    return res.json({success:true,data:teacher});
   }else{
    return res.json({success:false,message:"Teacher not found"});
   }
 }catch(error){
        console.log(error);
        res.json({success:false,message:error.message});
 }

}
// const extractText = async (req, res) => {
// try{
//     const fileName = 'C:/Users/verma/Documents/GitHub/ScoreUp/Backend/assets/textcheck.jpg';
//     const [result] = await client.textDetection(fileName);
//     const detections = result.textAnnotations;
//     console.log('Text:');
//     detections.forEach(text => console.log(text));
// }catch(error){
//     console.log(error);
//     res.json({success:false,message:error.message});
// }
// }

// const extractText = async (req, res) => {
//     try{
//         const response = await together.chat.completions.create({
//             messages: [{"role": "user", "content": "What are some fun things to do in New York?"}],
//             model: "meta-llama/Llama-3.3-70B-Instruct-Turbo",
//         });
        
//         console.log(response.choices[0].message.content)
//     }catch(error){
//         console.log(error);
//         res.json({success:false,message:error.message});
//     }
//     }


const createTest = async(req,res)=>{
    try {
        const test= req.body;
         console.log(test);
         const newTest= new testModel(test);
         
         newTest.details.testId = newTest._id;
         await newTest.save();
         res.json({
            success:true,
            message:"New test created"
         })
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}


const extractText = async (req, res) => {
    try {
        // Temporarily returning a simple response
        res.json({
            success: true,
            message: "Text extraction feature is currently disabled"
        });
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

const getTeacherTests = async(req, res) => {
    try{
        const {itoken}=req.headers;
        if(!itoken){
            return res.json({success:false, message:"Not Authorized Login Again"})
        }

        const token_decode=jwt.verify(itoken, process.env.JWT_SECRET);
        const teacherId = token_decode.id;

        const tests = await testModel.find({ "details.teacherId" : teacherId });
        res.json({ success:true, tests });
    } catch(err) {
        console.log(err);
        res.json({success:false,message:err.message});
    };
}

const updateTeacherProfileData = async (req, res) => {
   try {
      console.log('updateTeacherProfileData called');
      console.log('req.body:', req.body);
      console.log('req.file:', req.file);

      const {
         teacherId,
         name,
         gender,
         address,
         dob,
         username,
         email,
         phone,
         field,
         description
      } = req.body;

      const imageFile = req.file;

      const updateObj = {};

      if (name) updateObj.name = name;
      if (gender) updateObj.gender = gender;
      if (address) updateObj.address = address;
      if (dob) updateObj.dob = dob;
      if (username) updateObj.username = username;
      if (email) updateObj.email = email;
      if (phone) updateObj.phone = phone;
      if (field) updateObj.field = field;
      if (description) updateObj.description = description;

      if (imageFile) {
         console.log('Uploading image from memory buffer to Cloudinary');

         // Upload from memory buffer
         const streamUpload = (buffer) => {
            return new Promise((resolve, reject) => {
               const stream = cloudinary.uploader.upload_stream(
                  { resource_type: "image" },
                  (error, result) => {
                     if (result) resolve(result);
                     else reject(error);
                  }
               );
               stream.end(buffer);
            });
         };

         const imageUpload = await streamUpload(imageFile.buffer);
         console.log('Cloudinary upload result:', imageUpload);
         updateObj.image = imageUpload.secure_url;
      }

      const teacher = await teacherModel.findByIdAndUpdate(teacherId, updateObj, { new: true });

      if (teacher) {
         return res.json({
            success: true,
            message: "Teacher profile updated",
            data: teacher
         });
      } else {
         return res.json({
            success: false,
            message: "Teacher not found"
         });
      }

   } catch (error) {
      console.error('Error in updateTeacherProfileData:', error);
      return res.json({
         success: false,
         message: error.message
      });
   }
};

export {signupTeacher,loginTeacher,extractText,getTeacherProfileData,createTest,getTeacherTests, updateTeacherProfileData};


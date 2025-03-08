import validator from "validator"

import jwt from "jsonwebtoken"
import bcrypt from "bcrypt";
import teacherModel from "../Models/teacherModel.js";
import vision from '@google-cloud/vision';
import testModel from "../Models/testModel.js";
//const vision = require('@google-cloud/vision');

// const client = new vision.ImageAnnotatorClient();
// const together = new Together();
=======
const client = new vision.ImageAnnotatorClient();

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
        const itoken = jwt.sign({id:user._id},'homelander',{expiresIn:'1h'})

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
   const {teacherId}=req.body;
   const teacher = await teacherModel.findById(teacherId);
   if(teacher){
    return res.json({sucess:true,data:teacher});
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
         const newTest= testModel(test);
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

export {signupTeacher,loginTeacher,createTest};

const extractText = async (req, res) => {
      try {
        console.log(req);
        res.json({success:true,message:"jai Hind"})
      } catch (error) {
        console.log(error);
     res.json({success:false,message:error.message});
      }
    }
export {signupTeacher,loginTeacher,extractText,getTeacherProfileData};


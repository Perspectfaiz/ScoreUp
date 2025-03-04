import validator from "validator"
import Together from "together-ai";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt";
import teacherModel from "../Models/teacherModel.js";
import vision from '@google-cloud/vision';
//const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();
const together = new Together();
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
    const token = await jwt.sign({id:user._id},"homelander")
    res.status(201).json({
        success:true,token })

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
        const token = jwt.sign({id:user._id},'homelander',{expiresIn:'1h'})

       return res.json({success:true,token})
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
const extractText = async (req, res) => {
    try{
        const response = await together.chat.completions.create({
            messages: [{"role": "user", "content": "What are some fun things to do in New York?"}],
            model: "meta-llama/Llama-3.3-70B-Instruct-Turbo",
        });
        
        console.log(response.choices[0].message.content)
    }catch(error){
        console.log(error);
        res.json({success:false,message:error.message});
    }
    }
export {signupTeacher,loginTeacher,extractText};

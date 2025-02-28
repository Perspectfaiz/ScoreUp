import validator from "validator"
import jwt from "jwtwebtoken"
import bcrypt from "bcrypt";
import teacherModel from "../Models/teacherModel";

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
    const user= await teacherModel.findOne({eamil:usernameORemail});
    if(!user){
        user=await teacherModel.findOne({username:usernameORemail});
    }
    if(!user){
        res.status(404).json({success:false,message:"User not found"})
    }
    const match = await bcrypt.compare(password,user.password);
    if(match){
        const token = jwt.sign({id:user._id},'homelander',{expireIn:'1h'})
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

export {signupTeacher,loginTeacher};

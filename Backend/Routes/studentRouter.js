import express from 'express'
import upload from '../Middleware/multer.js';
const studentRouter =express.Router();
import { signupStudent,loginStudent,getStudentProfileData, updateStudentProfileData } from '../Controller/studentController.js';
import authStudent from '../Middleware/authStudent.js';
// studentRouter.use('/login',);
studentRouter.use('/sign-up',signupStudent);
studentRouter.use('/login',loginStudent);

// studentRouter.use('/profile',updatestudentProfile)

studentRouter.use('/get-profile-data',authStudent,getStudentProfileData);
studentRouter.use('/update-profile-data',authStudent,upload.single('image'),updateStudentProfileData);

export default studentRouter;
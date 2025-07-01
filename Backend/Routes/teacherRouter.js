import express from 'express'
import upload from '../Middleware/multer.js';

// import { loginTeacher, signupTeacher, createTest } from '../Controller/teacherController.js';


import { signupTeacher,loginTeacher,extractText,getTeacherProfileData,createTest,updateTeacherProfileData} from '../Controller/teacherController.js';

import authTeacher from '../Middleware/authTeacher.js';
import { get } from 'mongoose';


const teacherRouter =express.Router();
teacherRouter.use('/sign-up',signupTeacher);
teacherRouter.use('/login',loginTeacher);

// teacherRouter.use('/text',extractText);
// teacherRouter.use('/profile',updateTeacherProfile)
teacherRouter.use('/create-test',createTest);
teacherRouter.get('/get-profile-data',getTeacherProfileData);
teacherRouter.use('/text',extractText);
teacherRouter.use('/update-profile-data',authTeacher,upload.single('image'),updateTeacherProfileData);

export default teacherRouter;
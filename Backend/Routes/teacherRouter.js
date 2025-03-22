import express from 'express'


// import { loginTeacher, signupTeacher, createTest } from '../Controller/teacherController.js';


import { signupTeacher,loginTeacher,extractText,getTeacherProfileData,createTest} from '../Controller/teacherController.js';

import authTeacher from '../Middleware/authTeacher.js';
import { get } from 'mongoose';


const teacherRouter =express.Router();
teacherRouter.use('/sign-up',signupTeacher);
teacherRouter.use('/login',loginTeacher);

// teacherRouter.use('/text',extractText);
// teacherRouter.use('/profile',updateTeacherProfile)
teacherRouter.use('/create-test',createTest);
teacherRouter.use('get-profile-data',authTeacher,getTeacherProfileData);
teacherRouter.use('/text',extractText);

export default teacherRouter;
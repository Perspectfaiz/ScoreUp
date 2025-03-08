import express from 'express'

import { loginTeacher, signupTeacher,extractText,getTeacherProfileData } from '../Controller/teacherController.js';
import authTeacher from '../Middleware/authTeacher.js';
import { get } from 'mongoose';

const teacherRouter =express.Router();
teacherRouter.use('/sign-up',signupTeacher);
teacherRouter.use('/login',loginTeacher);
teacherRouter.use('get-profile-data',authTeacher,getTeacherProfileData);
teacherRouter.use('/text',extractText);
export default teacherRouter;
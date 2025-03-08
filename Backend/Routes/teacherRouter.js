import express from 'express'

import { loginTeacher, signupTeacher,extractText } from '../Controller/teacherController.js';

const teacherRouter =express.Router();
teacherRouter.use('/sign-up',signupTeacher);
teacherRouter.use('/login',loginTeacher);
teacherRouter.use('/text',extractText);
studentRouter.use('/profile',updateTeacherProfile)
export default teacherRouter;
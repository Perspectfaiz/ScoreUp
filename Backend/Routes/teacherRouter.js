import express from 'express'

import { loginTeacher, signupTeacher, createTest } from '../Controller/teacherController.js';

const teacherRouter =express.Router();
teacherRouter.use('/sign-up',signupTeacher);
teacherRouter.use('/login',loginTeacher);
// teacherRouter.use('/text',extractText);
// teacherRouter.use('/profile',updateTeacherProfile)
teacherRouter.use('/create-test',createTest);
export default teacherRouter;
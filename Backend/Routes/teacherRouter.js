import express from 'express'

import { loginTeacher, signupTeacher } from '../Controller/teacherController.js';

const teacherRouter =express.Router();
teacherRouter.use('/sign-up',signupTeacher);
teacherRouter.use('/login',loginTeacher);
export default teacherRouter;
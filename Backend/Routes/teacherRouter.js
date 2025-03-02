import express from 'express'
<<<<<<< HEAD
import { loginTeacher, signupTeacher } from '../Controller/teacherController';
=======
import { loginTeacher, signupTeacher } from '../Controller/teacherController.js';
>>>>>>> 1651085 (Commite by ajasg)
const teacherRouter =express.Router();
teacherRouter.use('/sign-up',signupTeacher);
teacherRouter.use('/login',loginTeacher);
export default teacherRouter;
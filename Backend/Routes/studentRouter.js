import express from 'express'
const studentRouter =express.Router();
import { signupStudent,loginStudent } from '../Controller/studentController.js';
// studentRouter.use('/login',);
studentRouter.use('/sign-up',signupStudent);
studentRouter.use('/login',loginStudent);
export default studentRouter;
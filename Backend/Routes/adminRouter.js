import express from 'express'
import { addFeedback } from '../Controller/adminController.js';
const adminRouter =express.Router();
adminRouter.use('/feedback',addFeedback);
// studentRouter.use('/profile',updateTeacherProfile)

export default adminRouter;
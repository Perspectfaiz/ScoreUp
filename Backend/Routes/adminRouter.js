import express from 'express'
import { addFeedback } from '../Controller/adminController.js';
import authFeedback from '../Middleware/authFeedback.js';
const adminRouter =express.Router();
adminRouter.use('/feedback',authFeedback,addFeedback);
// studentRouter.use('/profile',updateTeacherProfile)

export default adminRouter;
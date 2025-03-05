import express from 'express'
import { addFeedback } from '../Controller/adminController.js';
const adminRouter =express.Router();
adminRouter.use('/feedback',addFeedback);
export default adminRouter;
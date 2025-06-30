import express from 'express';
import testModel from '../Models/testModel.js';
import { createTest } from '../Controller/teacherController.js';
import authTeacher from '../Middleware/authTeacher.js';

const testRouter = express.Router();

testRouter.post('/bulk-details', async (req, res) => {
  try {
    const { testIds } = req.body;
    const tests = await testModel.find({
      $or: [
        { test_id: { $in: testIds } },
        { 'details.id': { $in: testIds } }
      ]
    });
    res.json({ success: true, tests });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
});

testRouter.post('/add', authTeacher, createTest);

export default testRouter; 
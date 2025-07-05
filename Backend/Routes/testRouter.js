import express from 'express';
import testModel from '../Models/testModel.js';
import { createTest, getTeacherTests } from '../Controller/teacherController.js';
import authTeacher from '../Middleware/authTeacher.js';

const testRouter = express.Router();

// Get all tests for exam interface
testRouter.get('/all', async (req, res) => {
  try {
    const tests = await testModel.find({});
    res.json({ success: true, tests });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
});

// Get single test by ID
testRouter.get('/:testId', async (req, res) => {
  try {
    const { testId } = req.params;
    const test = await testModel.findById(testId);
    if (!test) {
      return res.json({ success: false, message: 'Test not found' });
    }
    res.json({ success: true, test });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
});

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
testRouter.get('/my-tests', getTeacherTests)

export default testRouter; 
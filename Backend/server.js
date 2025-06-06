import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './Config/MongoDB.js';
import studentRouter from './Routes/studentRouter.js';
import teacherRouter from './Routes/teacherRouter.js';
import adminRouter from './Routes/adminRouter.js';
import resourceRouter from './Routes/resourceRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/student', studentRouter);
app.use('/api/teacher', teacherRouter);
app.use('/api/admin', adminRouter);
app.use('/api/resources', resourceRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 
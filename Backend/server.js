import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import connectDB from './Config/MongoDB.js';
import studentRouter from './Routes/studentRouter.js';
import teacherRouter from './Routes/teacherRouter.js';
import adminRouter from './Routes/adminRouter.js';
import resourceRouter from './Routes/resourceRoutes.js';
import testRouter from './Routes/testRouter.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Initialize dotenv and app
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// API Routes
app.use('/api/student', studentRouter);
app.use('/api/teacher', teacherRouter);
app.use('/api/admin', adminRouter);
app.use('/api/resources', resourceRouter);
app.use('/api/tests', testRouter);

// ⬇️ Required to get __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ⬇️ Serve static files from the React build
app.use(express.static(path.join(__dirname, 'build')));

// ⬇️ Fallback to index.html for any non-API route (e.g., /about)
app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './Config/MongoDB.js';
import resourceRoutes from './Routes/resourceRoutes.js';

dotenv.config();

const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use('/api/resources', resourceRoutes);

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 
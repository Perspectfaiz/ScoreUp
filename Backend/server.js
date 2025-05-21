import cors from 'cors';
import connectDB from './Config/MongoDB.js';
import express from 'express';
import studentRouter from './Routes/studentRouter.js';
import teacherRouter from './Routes/teacherRouter.js';
import adminRouter from './Routes/adminRouter.js';
import resourceRouter from './Routes/resourceRoutes.js';

const port = 8080;
const app = express();

connectDB();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use('/api/student', studentRouter);
app.use('/api/teacher', teacherRouter);
app.use('/api/admin', adminRouter);
app.use('/api/resources', resourceRouter);

app.listen(port, () => {
    console.log(`app is listening at port ${port}`);
});
import cors from 'cors';
import connectDB from './Config/MongoDB.js';
import express from 'express';
import studentRouter from './Routes/studentRouter.js';
 const port =8080;
const app = express();

connectDB();

//middleware
app.use(express.json());
app.use(cors());
//student ------
//localhost:8080/api/student/...
app.use('/api/student',studentRouter);

app.listen(8080,()=>{
console.log(`app is listening at port ${port}`);
})
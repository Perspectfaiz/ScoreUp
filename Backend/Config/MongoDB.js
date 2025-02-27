import mongoose from "mongoose";
// import dotenv from 'dotenv';
// dotenv.config();
const connectDB=async ()=>{
    mongoose.connection.on('connected',()=>console.log('database is connected'))
 await mongoose.connect(`mongodb+srv://vermanish272155:v1e2r3m4a5@cluster0.dzwni.mongodb.net/scoreup`)
}
export default connectDB
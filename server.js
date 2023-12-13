
import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDb from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';
dotenv.config();
connectDb();
//rest obj
const app=express();
app.use(cors());
//middlewareness 
app.use(morgan('dev'));
app.use(express.json());
app.use("/api/v1/auth",authRoutes);
//rest api
app.get('/',(req,res)=>{
    res.send("<h1>Welcome to Ecommerce App</h1>")
});

const PORT=process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Server Running On ${process.env.DEV_MODE} mode on Port ${PORT}`);
});
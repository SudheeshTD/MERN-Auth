import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
const port = process.env.PORT || 5000 ;
import userRoutes from './routes/userRoutes.js'
import cookieParser from 'cookie-parser';


connectDB();

const app = express();

app.use(express.json()); // Middleware to parse incoming Json Requests
app.use(express.urlencoded({ extended : true})) // Middleware to parse URL- ENcoded data (Form Submission)

app.use(cookieParser());

app.use('/api/users', userRoutes);

app.get('/', (req,res) => res.send('Server is ready'))

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`)) 
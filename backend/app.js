import express from 'express'
import { config } from 'dotenv';
import cors from 'cors'
import connectDB from './connectDB.js';
import authRouter from './routes/authRouter.js';
import errorMiddleware from './middlewares/errorMidleware.js';
import workoutRouter from './routes/workout.js';

// dotenv setup
config();

// server start
const app = express();
const port = process.env.APP_PORT || 4000;
const db_password = process.env.DB_PASSWORD;


// DB setup
connectDB(`mongodb+srv://mrlokidev:${db_password}@cluster0.wsdfbkt.mongodb.net/ninja_01`, () => {
    app.listen(port, () => console.log(`Server is running in port ${port}`))
})


// Global Middleware 
app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }))


// routes
app.use('/api/auth', authRouter);
app.use('/api/workouts', workoutRouter)


// Error Middleware
app.use(errorMiddleware);



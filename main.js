import express from "express";
import connectDb from "./db.js";
import userRouter from './userRoutes.js'


const app = express()
connectDb()
app.use(express.json())

app.use('/user', userRouter)


app.listen(3000, ()=>console.log('server is running'))
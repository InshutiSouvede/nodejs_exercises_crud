import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import morgan from 'morgan'
import studentRoutes from './routes/studentRoutes.js'


const app = express()
dotenv.config()
const PASSWORD = process.env.PASSWORD
const USER_NAME = process.env.USER_NAME
const connect = mongoose.connect(`mongodb+srv://${USER_NAME}:${PASSWORD}@alldbs.plbwm.mongodb.net/job_finder_app?retryWrites=true&w=majority&appName=allDbs`)
connect.then((data)=>console.log("Successfully connected to the database"))
.catch((err)=> console.log("Could not connect to the database",err.errorResponse))


app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/students',studentRoutes)
app.get('/',(req,res)=>{
    res.send("Welcome to students portal")
})
const PORT = process.env.PORT || 3000
app.listen(PORT,(err)=>{
    if(!err){
        console.log("Successfully connected to server on port",PORT)
    }
})
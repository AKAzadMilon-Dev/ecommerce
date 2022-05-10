import express from 'express';
import cors from 'cors';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
const app = express()

dotenv.config()

app.use(cors())

mongoose.connect(process.env.MONGODB_URL).then(()=>{
  console.log("MongoDB Connected")
}).catch((error)=>{
  console.log(error)
})

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/products', function (req, res) {
  res.send(data)
})

app.get('/products/:slug', function (req, res) {
  res.send(data)
})

const port = process.env.PORT || 8000
  
app.listen(8000, (req,res)=>{
    console.log("8000 port run")
})
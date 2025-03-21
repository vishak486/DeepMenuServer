require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router=require('./routes/router')
require('./database/dbConnection')

const DeepServer=express()

DeepServer.use(cors())
DeepServer.use(express.json())
DeepServer.use(router)

const PORT=3000 || process.env.PORT

// to run port

DeepServer.listen(PORT,()=>{
    console.log(`Server Started at Port : ${PORT}`);
    
})

DeepServer.get('/',(req,res)=>{
    res.status(200).send('<h1 style="color:red;">Server is running!!</h1>')
})

// DeepServer.post('/',(req,res)=>{
//     res.status(200).send('POST REQUEST')
// })
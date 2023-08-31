
const path = require('path')

require("dotenv").config()

const express = require('express');

const cors = require("cors")



const port = process.env.PORT




const app = express();


//static folder
app.use(express.static(path.join(__dirname,'public')))


//body-parser middleware

app.use(express.json())
app.use(express.urlencoded({extended:false}))

//cors middleware
app.use(cors({
    origin:"*",
    credentials:true,
}))
//home
app.get('/test',(req,res)=>{
    // res.header("Access-Control-Allow-Origin", "*");
    res.json({message:"welcome to my portfolio"})
})


app.listen(port,()=>{
    console.log(`server listening on port ${port}`)
})



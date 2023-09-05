
const path = require('path')

require("dotenv").config()

const express = require('express');

var bodyParser = require('body-parser')

const cors = require("cors")


const sendEmail = require('./email');




const port = process.env.PORT




const app = express();


//static folder
app.use(express.static(path.join(__dirname,'public')))


//body-parser middleware

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//cors middleware
app.use(cors({
    origin:"*",
    credentials:true,
}))

//home
app.get('/',(req,res)=>{
    res.json({message:"welcome to my portfolio"})
})



app.post('/email',(req,res)=>{
    // res.header("Access-Control-Allow-Origin", "*");
    console.log(req.body)
    sendEmail.messages
	.create(sandbox77077025e4154927a411f47eac0eee56.mailgun.org, {
		from: "Mailgun Sandbox <postmaster@sandbox77077025e4154927a411f47eac0eee56.mailgun.org>",
		to: ["jonas.slark@icloud.com"],
		subject: "Hello",
		text: "Testing some Mailgun awesomness!",
	})
	.then(msg => console.log(msg)) // logs response data
	.catch(err => console.log(err));


    
})


app.listen(port,()=>{
    console.log(`server listening on port ${port}`)
})



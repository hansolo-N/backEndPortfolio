
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



app.post('/email',async (req,res)=>{
    // res.header("Access-Control-Allow-Origin", "*");
	console.log(req.body.email)
    try {
		await sendEmail.messages.create("sandbox77077025e4154927a411f47eac0eee56.mailgun.org", {
			from: req.body.email,
			to: ["nasr.hanslo@younglings.africa"],
			subject: req.body.subject,
			text: req.body.message,
			html: "<h1>Email inquiries from Portfolio</h1>"
		})
		.then(msg => console.log(msg)) // logs response data
		.catch(err => console.log(err)); // logs any error
	} catch (error) {
		console.log(error)
	}

	


    
})


app.listen(port,()=>{
    console.log(`server listening on port ${port}`)
})




const path = require('path')

require("dotenv").config()

const express = require('express');

var bodyParser = require('body-parser')

const cors = require("cors")


const sendEmail = require('./email');
const { error } = require('console');

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
		const msg = {
			to:"nasr.hanslo@younglings.africa",
			from:"nasr.hanslo@younglings.africa",
			subject:"test",
			text:"test"
		}
		sendEmail.send(msg).then(()=>{
			console.log("email sent")
			})
		}
		catch (error) {
		console.log(error)
	}

	


    
})


app.listen(port,()=>{
    console.log(`server listening on port ${port}`)
})



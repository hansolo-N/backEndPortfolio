require("dotenv").config()

const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// const msg = {
//     to:"nasr.hanslo@icloud.com",
//     from:"nasr.hanslo@icloud.com",
//     subject:"test",
//     text:"test"
// }
// sgMail.send(msg).then(()=>{
//     console.log("email sent")
//     }).catch((error)=>{
//         console.log(error)
//     })

module.exports=sgMail
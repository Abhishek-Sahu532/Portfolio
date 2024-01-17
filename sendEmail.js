const nodemailer = require('nodemailer');

const sendEmail = async (options)=>{
   const transporter = nodemailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    service: process.env.SMPT_SERVICE,
    auth: {
        user:process.env.SMPT_EMAIL,
        pass: process.env.SMPT_PASSWORD
    }
   })   

   const mailOptions = {
    from : options.email,
    to: "asahu532@gmail.com",
    subject:options.subject,
    text: options.messageForEmailBody, 
   }

   await transporter.sendMail(mailOptions)
} 


module.exports = sendEmail;
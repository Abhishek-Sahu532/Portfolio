const express = require("express");
const router = express.Router();
const cors = require("cors");
const dotenv = require("dotenv");
const sendEmail = require("./sendEmail");
const app = express();
const path = require('path')


app.use(cors());
app.use(express.json());
app.use("/", router);
dotenv.config({ path: "config/.env" });

router.post("/contact", async (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  const messageForEmailBody = `Name : ${name} 
  Email : ${email} 
  Phone : ${phone} 
  Message : ${message} 
  `;

  try {
    await sendEmail({
      email: email,
      subject: `Form Submission - Portfolio`,
      messageForEmailBody,
    });

   return res.json({code: 200, status: 'Message Sent'})
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

app.use(express.static(path.join(__dirname, "/build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

app.listen(process.env.PORT, () => {
  console.log("Server is running" , process.env.PORT);
});

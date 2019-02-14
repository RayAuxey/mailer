const express = require("express"),
  nodemailer = require("nodemailer"),
  bodyParser = require("body-parser"),
  cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post("/sendmail", (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rayauxey@gmail.com",
      pass: "olefrema"
    }
  });
  const mailOptions = {
    from: '"RayAuxey" <rayauxey@gmail.com>',
    to: req.body.to,
    subject: req.body.subject,
    text: req.body.body
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) return console.log(error);
    else res.status(200).json({ info: info });
  });
});
app.listen(3000, () => console.log("Server running"));

// Task 5: send yourself an email with nodemailer
// Replace the placeholders below with your own info (don't push them to GitHub!)
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "youremail@gmail.com",
    pass: "your-app-password", // Gmail requires an App Password
  },
});

const mailOptions = {
  from: "youremail@gmail.com",
  to: "youremail@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

const nodemailer = require('nodemailer');

// Replace the following placeholders with your actual Hotmail/Outlook email credentials
const emailConfig = {
  user: 'rewaayasser@hotmail.com',
  pass: '',
};

// Replace 'to' with your own email address
const mailOptions = {
  from: emailConfig.user,
  to: 'rewaayasser@gmail.com',
  subject: 'Test Email',
  text: 'Hello, this is a test email from Node.js!',
};

// Create a transporter using the provided email configuration
const transporter = nodemailer.createTransport({
  service: 'hotmail', // Use 'hotmail' for Outlook as well
  auth: {
    user: emailConfig.user,
    pass: emailConfig.pass,
  },
});

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.error('Error sending email:', error);
  }
  console.log('Email sent:', info.response);
});

const nodemailer = require('nodemailer');

const transOptions = {
  host: 'email-smtp.us-east-1.amazonaws.com',
  port: 465,
  secure: true,
  auth: {
    user: 'AKIAI27742FFLHEM2G7Q',
    pass: 'AuwDe4NzDzVKfWXkvpfRHk9HDCZunKzccQD3UzYeLD4w'
  }
};
const transporter = nodemailer.createTransport(transOptions);

// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
    throw error;
  } else {
    console.log('Email is configured correctly.');
  }
});

const mailOptions = {
  mailFrom: 'noreply@learnindialearn.in'
};

exports.sendEmail = function (to, subject, body, isHTML) {
  const options = {
    to,
    from: mailOptions.mailFrom,
    subject
  };
  if (isHTML) {
    options.html = body;
  } else {
    options.text = body;
  }
  return transporter.sendMail(options);
};
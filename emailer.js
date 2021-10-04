// need to "npm install nodemailer"
const nodemailer = require('nodemailer');
// require('dotenv').config();

  // async..await is not allowed in global scope, must use a wrapper
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing


  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    //host: "k2technologies-net.mail.protection.outlook.com",
    host: "smtp-mail.outlook.com",
    port: 587,
    tls: true,
    // secure: false, // true for 465, false for other ports
    auth: {
      user: "automation@k2technologies.net",
      pass: "&xeT*cssQOVF4B*S2%aiT" 
    }
  });

    let info ={
      from: "automation@k2technologies.net", // sender address
      to: "admin@M365x101305.onmicrosoft.com", // list of receivers
      subject: "Successful purchase of Ingram license", // Subject line
      text: "This message is to notify you that the Ingram license has been added for the new user", // plain text body
      html: "<b> This message is to notify you that the Ingram license has been added for the new user</b>" // html body
    };

    transporter.sendMail(info, function(err, data) {
      if(err) {
        console.log('Error Occurs', err);
      } else {
        console.log('Email sent successfully');
      }
    });

  // console.log("Message sent: %s", info.messageId);
  // } catch (error) {
  //   console.log ('Failed to send email', error);
  // }
    

// module.exports = transporter;
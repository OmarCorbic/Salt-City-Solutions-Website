import asyncHandler from "express-async-handler";
import nodemailer from "nodemailer";

export const sendMail = asyncHandler(async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;

  if (!firstName || !lastName || !email || !message) {
    res.status(400);
    throw new Error("All fields must be filled");
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.CONTACT_EMAIL,
    to: process.env.CONTACT_EMAIL,
    subject: "SaltCitySystems - New Contact form message",
    html: `
    
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }
    
        table {
          border-collapse: collapse;
          margin-bottom: 16px;
          width: 100%;
        }
    
        th,
        td {
          padding: 8px;
          text-align: left;
          vertical-align: top;
          border: 1px solid #000000;
        }
    
        th {
          background-color: black;
          color: white;
        }
    
        td {
          background-color: #ffffff;
          color: #000000;
        }
    
        .message-cell {
          word-break: break-word;
        }
      </style>
    </head>
    <body>
      <table>
        <tr>
          <th colspan="2">KONTAKT</th>
        </tr>
        <tr>
          <td><strong>First Name:</strong></td>
          <td>${firstName}</td>
        </tr>
        <tr>
        <td><strong>Last Name:</strong></td>
        <td>${lastName}</td>
      </tr>
        <tr>
          <td><strong>Email:</strong></td>
          <td>${email}</td>
        </tr>
       
        
        <tr>
          <td><strong>Message:</strong></td>
          <td class="message-cell">${message}</td>
        </tr>
      </table>
    </body>
    </html>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res
        .status(500)
        .json(
          "There was an issue sending your message. Please try again or contact me directly at farukspahicdev@gmail.com."
        );
      return;
    } else {
      console.log("Email sent:", info.response);
      res
        .status(200)
        .json(
          "Your message has been successfully sent. Thank you for reaching out!"
        );
    }
  });
});

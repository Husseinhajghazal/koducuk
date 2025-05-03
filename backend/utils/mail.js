const nodemailer = require("nodemailer");

async function sendMail(type, token, email, subject) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    service: process.env.SMPT_SERVICE,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  const url = `${process.env.CLIENT_URL}/${type}/${token}`;

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: email,
    subject: subject,
    html: getMailContent(type, url),
  };

  await transporter.sendMail(mailOptions);
}

module.exports = { sendMail };

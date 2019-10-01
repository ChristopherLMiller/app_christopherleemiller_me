const nodemailer = require(`nodemailer`);

const transporter = nodemailer.createTransport({
  host: `smtp.zoho.com`,
  port: 465,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const send = ({ email, name, subject, html }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`;
  const message = {
    from: process.env.EMAIL_ADDRESS,
    to: `info@christopherleemiller.me`,
    subject,
    html,
    replyTo: from,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};

module.exports = send;

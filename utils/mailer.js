const nodemailer = require(`nodemailer`);

const transporter = nodemailer.createTransport({
  host: `smtp.zoho.com`,
  port: 465,
  auth: {
    user: `info@christopherleemiller.me`,
    pass: `mz%re@VK5wQA4Y5*`,
  },
});

const send = ({ email, name, text }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`;
  const message = {
    from: `info@christopherleemiller.me`,
    to: `info@christopherleemiller.me`,
    subject: `New message from ${from}`,
    text,
    replyTo: from,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};

module.exports = send;

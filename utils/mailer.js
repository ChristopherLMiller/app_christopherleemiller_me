const nodemailer = require(`nodemailer`);

const transporter = nodemailer.createTransport({
  host: `smtp.zoho.com`,
  port: 465,
  auth: {
    user: `admin@christopherleemiller.me`,
    pass: `z62sZJZpqV@&s86a`,
  },
});

const send = ({ email, name, subject, html }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`;
  const message = {
    from: `admin@christopherleemiller.me`,
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

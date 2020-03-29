const nodemailer = require("nodemailer");

const { GSUITE_CLIENT_ID, GSUITE_PRIVATE_KEY } = process.env;

exports.handler = async ({ body }, context, callback) => {
  const { name, email, message } = JSON.parse(body);
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      user: "admin@lukebrown.io",
      serviceClient: GSUITE_CLIENT_ID.replace(/\\n/gm, '\n'),
      privateKey: GSUITE_PRIVATE_KEY.replace(/\\n/gm, '\n'),
    },
  });

  if (!name || !email || !message) {
    callback(null, {
      statusCode: 500,
      body: "Missing data"
    });
    return;
  }

  try {
    await transporter.verify();
    await transporter.sendMail({
      from: "admin@lukebrown.io",
      to: "hello@lukebrown.io",
      subject: 'New email',
      text: `${email} ${name} ${message}`,
    }, (error, info) => {
      if (error) {
        callback(null, {
          statusCode: 500,
          body: JSON.stringify(error.message),
        });
        return;
      }

      callback(null, {
        statusCode: 200,
        body: JSON.stringify(info),
      });
    });
  } catch (err) {
    callback(null, {
      statusCode: err.response.status,
      body: "Network error"
    });
  }
}
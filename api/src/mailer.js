const nodemailer = require("nodemailer");
const sanitizer = require('sanitizer');

const { GSUITE_CLIENT_ID, GSUITE_PRIVATE_KEY, SLACK_HOOK_ENDPOINT } = process.env;

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

  if (!GSUITE_CLIENT_ID || !GSUITE_PRIVATE_KEY || !SLACK_HOOK_ENDPOINT || !name || !email || !message) {
    callback(null, {
      statusCode: 500,
      body: "Missing data"
    });
    return;
  }

  try {
    // send via slack
    await post(SLACK_HOOK_ENDPOINT,
    {
      text: `------------------ \n\nName: ${sanitizer.sanitize(name)}\n\nEmail: ${sanitizer.sanitize(email)}\n\nMessage: ${sanitizer.sanitize(message)}`,
    });

    // send via email
    await transporter.verify();
    await transporter.sendMail({
      from: "admin@lukebrown.io",
      to: "hello@lukebrown.io",
      subject: 'New contact form entry from lukebrown.io',
      text: `${sanitizer.sanitize(name)}(${sanitizer.sanitize(email)}) ${sanitizer.sanitize(message)}`,
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
      statusCode: 500,
      body: "Network error"
    });
  }
}
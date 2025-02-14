const nodemailer = require('nodemailer');

const sendEmail = async options => {
    // 1 - CREATE A TRANSPORTER
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
        // activate in gmail "less secure app" option
    });
    // 2 - DEFINE THE EMAIL OPTIONS
    const mailOptions = {
        from: 'João Henrique <teste@joao.com>',
        to: options.email,
        subject: options.email,
        text: options.message,
        /* html: */ 

    };
    // 3 - ACTUALY SEND THE EMAIL
    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
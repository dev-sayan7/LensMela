const nodemailer = require('nodemailer');

const sendEmail = async (email, OTP) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: `LensMela @<${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'LensMela Verification OTP',
        text: `LensMela OTP.\nOTP: ${OTP}.\nOTP will expire in 15 minutes.`
    };

    const mail = await transporter.sendMail(mailOptions);
    return mail;
}


module.exports = sendEmail;
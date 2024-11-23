// controllers/emailController.js

const nodemailer = require('nodemailer');

exports.sendEmail = async (req, res) => {
    const {subject, body, email} = req.body;

    //set up nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'iCloud',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_RECEIVER,
        subject: `Message from ${email}: ${subject}`,
        text: body,
        replyTo: email,
    };

    try{
        await transporter.sendMail(mailOptions);
        res.status(200).json({message: 'Email sent succesully!'});
    } catch(error){
        console.log('Error sending email:', error);
        res.status(500).json({error: 'Failed to send email'});
    }
};


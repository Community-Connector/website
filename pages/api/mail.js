const nodemailer = require("nodemailer");

export default async function handler (req, res) {

    const { name, email, message } = req.body;

    const valid = name.length > 0 && 
                  email.length > 0 && 
                  message.length > 0 &&
                  name.length <= 50 &&
                  email.length <= 80 &&
                  message.length <= 500 &&
                  email.includes('@') &&
                  email.includes('.');

    if (!valid) 
        return res.status(400).json({
            type: "error",
            title: "Error Sending Message",
            message: "You have not filled out the form properly. Please provide proper responses to the given fields."
        });
    

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL,
        replyTo: email,
        subject: `Message from ${name} via Community Connector`,
        text: `A message from ${name} (${email}) says:\n${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ 
            type: "success",
            title: "Message Sent Successfully",
            message: "Your message has been sent successfully, thank you. We will get back to you as soon as possible."
        });
    } catch (error) {
        res.status(500).json({ 
            type: "error",
            title: "Error Sending Message",
            message: "Something happened while sending your message. Please try again later."
        });
    }

}
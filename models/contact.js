
import mongoose from 'mongoose';

// Define the contact schema
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

// Create the Contact model
const Contact = mongoose.model('Contact', contactSchema);

// Nodemailer transporter setup


// Function to send email
const sendEmail = (email, subject, message) => {
    const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: email,
        subject: subject,
        text: message, // Use text or html to define the email body format
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent successfully:', info.response);
        }
    });
};

export { Contact, sendEmail };

// routes/contactRoutes.js
import express from 'express';
const router = express.Router();
import { Contact, sendEmail } from '../models/contact.js';

router.post('/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newContact = new Contact({ name, email, subject, message });
        const savedContact = await newContact.save();

        // Send email
        sendEmail(email, subject, message);

        res.status(201).json({ message: 'Contact form submitted successfully', savedContact });
    } catch (error) {
        console.error('Error saving contact:', error);
        res.status(500).json({ message: 'Failed to submit contact form' });
    }
});

export default router;
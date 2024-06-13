import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import eventRoutes from './routes/EventRoutes.js';
import contactRoutes from './routes/ContactRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://srisathyapriya2022ece:root@cluster0.ndt8fz6.mongodb.net/?retryWrites=true';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/contacts', contactRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

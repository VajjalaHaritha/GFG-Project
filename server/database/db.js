import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

export const Connection = async () => {
    const URL = process.env.MONGO_URI; // Use .env variable

    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database:', error.message);
    }
};

export default Connection;

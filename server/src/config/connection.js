import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
const db = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || '');
        console.log('Database connected successfully');
        return mongoose.connection;
    }
    catch (error) {
        console.error('Database connection error:', error);
        throw new Error('Database connection failed');
    }
};
export default db;

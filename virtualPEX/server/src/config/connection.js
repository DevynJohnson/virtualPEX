import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoURI = process.env.MONGO_DB_URI;

if (!mongoURI) {
    console.error('MongoDB URI is not defined in environment variables.')
    process.exit(1);
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Successfully connected to database.')
    } catch(error) {
        console.error('Error connecting to database:', error);
        process.exit(1);
    }
    };

export default connectToDatabase;
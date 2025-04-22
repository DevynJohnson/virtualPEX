import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import connectToDatabase from './src/config/connection.js'; // Import the connection function
import userRoutes from './src/routes/user-routes.js';
import itemRoutes from './src/routes/item-routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Define __filename and __dirname variables as they no longer have built-in definitions
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect to MongoDB using the method defined at server/src/config/connection.js
connectToDatabase();

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: ["http://localhost:5173", "https://virtualpex.onrender.com"],
  credentials: true,
}));

// Serve static frontend files for production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));  // Serving the 'client' folder
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist", "index.html")); // or "dist" if that's your folder
  });
}

// Define API routes
app.use('/api/users', userRoutes);
app.use('/api/items', itemRoutes);

// Start server and log the current port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

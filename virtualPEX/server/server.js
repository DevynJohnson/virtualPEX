import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import connectToDatabase from './src/config/connection.js'; // Import the connection function
import userRoutes from './src/routes/user-routes.js'; // Import the user routes

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3001;

// Fix for ES module __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect to MongoDB
connectToDatabase(); // Establish the connection

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: ["http://localhost:5173"],
  credentials: true,
}));

// Serve static frontend files (since index.html is directly inside the 'client' folder)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../client/dist')));  // Serving the 'client' folder
  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist', 'index.html')); // Serve index.html from 'client'
  });
}

app.use('/api/users', userRoutes);


// Fallback route for all other requests to send the React app's index.html
// app.get('*', (_req, res) => {
//   res.sendFile(path.join(__dirname, '../../client/dist', 'index.html'));
// });

// Start the server once the database is connected
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

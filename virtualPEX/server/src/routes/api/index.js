import express from 'express';
import userRoutes from './user-routes.js'; // Importing user routes

const router = express.Router();

router.use('/users', userRoutes); // All user-related routes will be prefixed with /api/users

export default router;
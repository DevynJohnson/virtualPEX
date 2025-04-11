import express from 'express';
import apiRoutes from '../api/index.js'; // Import API routes

const router = express.Router();

// Prefix all API routes with /api
router.use('/api', apiRoutes);

export default router;
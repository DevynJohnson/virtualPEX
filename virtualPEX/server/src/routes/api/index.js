import express from 'express';
import userRoutes from './user-routes.js';
import itemRoutes from './item-routes.js';

const router = express.Router();

router.use('/users', userRoutes); // All user-related routes will be prefixed with /api/users
router.use('/items', itemRoutes)

export default router;
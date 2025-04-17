import express from 'express';
import userRoutes from './user-routes.js';
import itemRoutes from './item-routes.js';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/items', itemRoutes);

export default router;
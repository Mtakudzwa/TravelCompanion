// backend/routes/tripRoutes.js
import express from 'express';
import { createTrip, getTrips, updateTrip, deleteTrip } from '../controllers/tripController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, createTrip);
router.get('/', authMiddleware, getTrips);
router.put('/:id', authMiddleware, updateTrip);
router.delete('/:id', authMiddleware, deleteTrip);

export default router;

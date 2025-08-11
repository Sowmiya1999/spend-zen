import express from 'express';
import { authMiddleware, dashboardController } from '../config/diContainer.js';

const dashboardRouter = express.Router();

dashboardRouter.use(authMiddleware.protect);

dashboardRouter.get("/", dashboardController.getDashboardData);

export default dashboardRouter;
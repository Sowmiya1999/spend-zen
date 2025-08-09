import express from 'express';
import AuthController from '../controllers/auth.controller.js';
import AuthMiddleWare from '../middleware/auth.middleWare.js';



export const router = express.Router();
const authController = new AuthController();
const authMiddleware = new AuthMiddleWare();

router.post("/signUp", authController.signUp);
router.post("/login", authController.login);
router.get("/getUserInfo", authMiddleware.protect, authController.getUserInfo);

export default router;

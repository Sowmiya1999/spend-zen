import express from 'express';

import {
    signUp,
    login,
    getUserInfo
} from '../controllers/authController'

export const router = express.Router();

router.post("/signUp", signU);
router.post("/login", login);
router.post("/getUserInfo", getUserInfo);

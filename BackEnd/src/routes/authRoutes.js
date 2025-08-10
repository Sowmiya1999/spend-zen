import express from 'express';
import { upload } from '../middleware/upload.middleware.js';
import { NO_FILE_UPLOADED } from '../common/constants.js';
import { authController, authMiddleware } from '../config/diContainer.js';



export const authRouter = express.Router();

authRouter.post("/signUp", authController.signUp);
authRouter.post("/login", authController.login);
authRouter.get("/getUserInfo", authMiddleware.protect, authController.getUserInfo);

authRouter.post('/upload-image', upload.single("image"), (req, res) => {
    if(!req.file){
        return res.status(400).json({message: NO_FILE_UPLOADED});
    }

    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
    res.status(200).json({imageUrl});

})

export default authRouter;

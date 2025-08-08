import jwt from 'jsonwebtoken';
import { TOKEN_VERIFICATION_FAILED_MESSAGE, UNAUTHORIZED_TOKEN_NOT_FOUND } from '../common/constants.js';
import UserRepository from "../repositories/user.repository.js"

class AuthMiddleWare{

    constructor(){
        this.userRepository = new UserRepository();
    }
      protect = async(req,res,next) =>{
         console.log(`AuthMiddleWare.protect splitting token`);
        let token = req.headers.authorization.split(" ")[1];
         console.log(`AuthMiddleWare.protect verifying token existence`);
        if (!token) return res.status(401).json({message: UNAUTHORIZED_TOKEN_NOT_FOUND});

        try{
            console.log(`AuthMiddleWare.protect decoding token to get the id`);
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
             console.log(`AuthMiddleWare.protect getting userData by id with data: ${JSON.stringify(decoded.id)}`);
            req.user = await this.userRepository.findUserById(decoded.id);
            next();

        }
        catch(err){
            console.log(`AuthMiddleWare.protect produced error: ${err}`);
            return res.status(500).json({message: TOKEN_VERIFICATION_FAILED_MESSAGE})
        }
    }
}

export default AuthMiddleWare;
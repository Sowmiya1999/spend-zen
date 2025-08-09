import {
    INCORRECT_CREDENTIALS_PROVIDED_ERROR_MESSAGE,
    LOGIN_FAILED_ERROR_MESSAGE,
    LOGIN_SUCCESS_MESSAGE,
    REGISTRATION_FAILED_ERROR_MESSAGE,
    USER_ALREADY_EXIST_ERROR_MESSAGE,
    USER_DATA_FETCHED_SUCCESSFULLY,
    USER_DATA_NOT_FOUND,
    USER_FETCH_FAILED_ERROR_MESSAGE,
} from "../common/constants.js";
import jwt from 'jsonwebtoken';

import UserRepository from '../repositories/user.repository.js'

class AuthService {
    constructor(){
        this.userRepository = new UserRepository();
    }

     generateJWTToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};
    signUpService = async (fullName, email, password, profileImageUrl, res) => {
        try {
            const isUserExist = await this.userRepository.checkIsUserExistByEmail(email);
            if (isUserExist) {
                return res
                    .status(400)
                    .json({ message: USER_ALREADY_EXIST_ERROR_MESSAGE });
            }

            const user = await this.userRepository.createUser({
                fullName,
                email,
                password,
                profileImageUrl,
            });

            res
                .status(201)
                .json({ id: user._id, user, token: this.generateJWTToken(user._id) });
        } catch (error) {
            console.log(`AuthService.sigUpService produced an error: ${error}`);
            return res
                .status(500)
                .json({
                    message: REGISTRATION_FAILED_ERROR_MESSAGE,
                    error: error.message,
                });
        }
    };

    async loginService(email, password, res) {
        try {
            const user = await this.userRepository.loginUser(email, password);
            if (!user) {
                console.log(`AuthService.loginService login failed`);
                return res
                    .status(400)
                    .json({ message: INCORRECT_CREDENTIALS_PROVIDED_ERROR_MESSAGE });
            }
            return res.status(200).json({ message: LOGIN_SUCCESS_MESSAGE, id: user._id,user:user,token: this.generateJWTToken(user._id) });
        } catch (err) {
            console.log(`AuthService.login produced error: ${err}`);
            return res
                .status(500)
                .json({ message: LOGIN_FAILED_ERROR_MESSAGE, error: err.message });
        }
    }

    async getUserInfoService(userId, res){
        try{
            console.log(`authService.getUserInfoService is called with userId: ${userId}`);

            let userData = await this.userRepository.findUserById(userId);

            if(!userData){
                console.log(`Authservice.getUserinforService user data not found`)
                return res.status(404).json({message:USER_DATA_NOT_FOUND});
            }
            return res.status(200).json({message: USER_DATA_FETCHED_SUCCESSFULLY, user: userData, id: userData._id});
        }
        catch(err){
            console.log(`authService.getUserInforService produced error: ${err}`);
            return res.status(500).json({message:USER_FETCH_FAILED_ERROR_MESSAGE,error:err});
        }
    }
}

export default AuthService;

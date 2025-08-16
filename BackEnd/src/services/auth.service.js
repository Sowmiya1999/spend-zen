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
    signUpService = async (fullName, email, password, profileImageUrl, isTermsAccepted) => {
        try {
            const isUserExist = await this.userRepository.checkIsUserExistByEmail(email);
            if (isUserExist) {
                  throw new Error(USER_ALREADY_EXIST_ERROR_MESSAGE);
            }

            return await this.userRepository.createUser({
                fullName,
                email,
                password,
                profileImageUrl,
                isTermsAccepted
            });

          
        } catch (error) {
            console.log(`AuthService.sigUpService produced an error: ${error}`);
            throw error;
        }
    };

    async loginService(email, password, res) {
        try {
            const user = await this.userRepository.loginUser(email, password);
            if (!user) {
                console.log(`AuthService.loginService login failed`);
                throw new Error(INCORRECT_CREDENTIALS_PROVIDED_ERROR_MESSAGE );
            }
           return user;
        } catch (err) {
            console.log(`AuthService.login produced error: ${err}`);
           throw err;
        }
    }

    async getUserInfoService(userId, res){
        try{
            console.log(`authService.getUserInfoService is called with userId: ${userId}`);

            let userData = await this.userRepository.findUserById(userId);

            if(!userData){
                console.log(`Authservice.getUserinforService user data not found`)
                throw new Error(USER_DATA_NOT_FOUND);
            }
          return userData;
        }
        catch(err){
            console.log(`authService.getUserInforService produced error: ${err}`);
            throw err;
    }
}
}

export default AuthService;

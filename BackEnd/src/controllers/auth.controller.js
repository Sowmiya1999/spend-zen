import {
  INPUT_NOT_FOUND_ERROR_MESSAGE,
  LOGIN_FAILED_ERROR_MESSAGE,
  LOGIN_SUCCESS_MESSAGE,
  REGISTRATION_FAILED_ERROR_MESSAGE,
  USER_FETCH_FAILED_ERROR_MESSAGE
} from "../common/constants.js";
import AuthService from "../services/auth.service.js";

class AuthController {

    constructor(){
        this.authService = new AuthService();
    }
  signUp = async (req, res) => {
    const { fullName, email, password, profileImageUrl } = req.body;

    if (!fullName || !email || !password || !profileImageUrl) {
      console.log(`Not all necessary fields values aren't given`);
      return res.status(400).json({ message: INPUT_NOT_FOUND_ERROR_MESSAGE });
    }

    try {
      let user= await this.authService.signUpService(
        fullName,
        email,
        password,
        profileImageUrl
      );
       return res
                .status(201)
                .json({ id: user._id, user, token: this.authService.generateJWTToken(user._id) });
    } catch (error) {
      console.log(`authController.sigUp produced an error: ${error}`);
      return res
        .status(500)
        .json({
          message: error.message || REGISTRATION_FAILED_ERROR_MESSAGE,
          error: error,
        });
    }
  };

  login = async (req, res) => {
    try{
    const { email, password } = req.body;

    if (!email || !password) {
      console.log(`Not all necessary fields values aren't given`);
      return res.status(400).json({ message: INPUT_NOT_FOUND_ERROR_MESSAGE });
    }

     const user = await this.authService.loginService(email, password);
      return res.status(200).json({ message: LOGIN_SUCCESS_MESSAGE, id: user._id,user:user,token: this.authService.generateJWTToken(user._id) });
  }
    catch (error) {
      console.log(`authController.sigUp produced an error: ${error}`);
      return res
        .status(500)
        .json({
          message: error.message || LOGIN_FAILED_ERROR_MESSAGE,
          error: error,
        });
    }
  };


  getUserInfo = async (req, res) => {
    try{
      console.log(`AuthController.getUserInfo is called req: ${req}`);

      const user = await this.authService.getUserInfoService(req.userId);
        return res.status(200).json({message: USER_DATA_FETCHED_SUCCESSFULLY, user: user, id: user._id});
    }
    catch(err){
      console.log(`AuthController.getUserInfo produced error: ${err}`);
       return res.status(500).json({message:USER_FETCH_FAILED_ERROR_MESSAGE, error: err});
    }
  };
}

export default AuthController;

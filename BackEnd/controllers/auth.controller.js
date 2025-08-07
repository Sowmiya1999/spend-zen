import {
  INPUT_NOT_FOUND_ERROR_MESSAGE,
  REGISTRATION_FAILED_ERROR_MESSAGE
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
      return await this.authService.signUpService(
        fullName,
        email,
        password,
        profileImageUrl,
        res
      );
    } catch (error) {
      console.log(`authController.sigUp produced an error: ${error}`);
      return res
        .status(500)
        .json({
          message: REGISTRATION_FAILED_ERROR_MESSAGE,
          error: error.message,
        });
    }
  };

  login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      console.log(`Not all necessary fields values aren't given`);
      return res.status(400).json({ message: INPUT_NOT_FOUND_ERROR_MESSAGE });
    }

    return await this.authService.loginService(email, password, res);
  };


  getUserInfo = async (req, res) => {};
}

export default AuthController;

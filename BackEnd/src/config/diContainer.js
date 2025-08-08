import AuthController from "../controllers/auth.controller.js";
import IncomeController from "../controllers/income.controller.js";
import AuthMiddleWare from "../middleware/auth.middleWare.js";

 export const authMiddleware = new AuthMiddleWare();
 export const incomeController = new IncomeController();
 export const authController = new AuthController();
import AuthController from "../controllers/auth.controller.js";
import DashboardController from "../controllers/dashboard.controller.js";
import ExpenseController from "../controllers/expense.controller.js";
import IncomeController from "../controllers/income.controller.js";
import AuthMiddleWare from "../middleware/auth.middleware.js";

 export const authMiddleware = new AuthMiddleWare();
 export const incomeController = new IncomeController();
 export const authController = new AuthController();
 export const expenseController = new ExpenseController();
 export const dashboardController = new DashboardController();
import express from "express";
import {authMiddleware, incomeController} from "../config/diContainer.js"


 const incomeRouter = express.Router();

 incomeRouter.use(authMiddleware.protect);

 incomeRouter.post("/addIncome", authMiddleware.protect, incomeController.addIncome);
 incomeRouter.get("/getAllIncome",authMiddleware.protect, incomeController.getAllIncome);
 incomeRouter.get("/downloadExcel", authMiddleware.protect, incomeController.downloadIncomeExcel);
 incomeRouter.delete("/:id", authMiddleware.protect, incomeController.deleteIncome);

 export default incomeRouter;

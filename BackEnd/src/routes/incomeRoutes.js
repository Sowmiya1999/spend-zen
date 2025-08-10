import express from "express";
import {authMiddleware, incomeController} from "../config/diContainer.js"


 const incomeRouter = express.Router();

 incomeRouter.use(authMiddleware.protect); // this add the middleware checks to all routes following this lines

 incomeRouter.post("/addIncome", authMiddleware.protect, incomeController.addIncome);
 incomeRouter.get("/getAllIncome",authMiddleware.protect, incomeController.getAllIncome);
 incomeRouter.get("/downloadIncomeExcel", authMiddleware.protect, incomeController.downloadIncomeExcel);
 incomeRouter.delete("/:id", authMiddleware.protect, incomeController.deleteIncome);// can accesss the id as req.params.id ideal for single values

 export default incomeRouter;

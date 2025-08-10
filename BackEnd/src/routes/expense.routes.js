import express from 'express';
import { expenseController, authMiddleware } from '../config/diContainer.js';

const expenseRouter =  express.Router();
expenseRouter.use(authMiddleware.protect);

expenseRouter.post("/addExpense", expenseController.addExpense);
expenseRouter.get("/getAllExpenses", expenseController.getAllExpenses);
expenseRouter.delete("/:id", expenseController.deleteExpense);
expenseRouter.get("/downloadExpenseExcel", expenseController.downloadExpenseExcel);

export default expenseRouter;
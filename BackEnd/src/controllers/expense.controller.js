import {
  ADD_EXPENSE_FAILED_ERROR_MESSAGE,
  DELETE_EXPENSE_FAILED_ERROR_MESSAGE,
  DELETE_EXPENSE_SUCCESS_MESSAGE,
  DOWNLOAD_EXPENSE_EXCEL_FAILED_ERROR_MESSAGE,
  DOWNLOAD_EXPENSE_SUCCESS_MESSAGE,
  EXPENSE_ADD_SUCCESS_MESSAGE,
  EXPENSES_FETCHED_SUCCESS_MESSAGE,
  GET_ALL_EXPENSES_FAILED_ERROR_MESSAGE,
  INPUT_NOT_FOUND_ERROR_MESSAGE,
} from "../common/constants.js";
import ExpenseService from "../services/expense.service.js";

class ExpenseController {
  constructor() {
    this.expenseService = new ExpenseService();
  }

  addExpense = async (req, res) => {
    try {
      console.log(`ExpenseController.addExpense is called`);
      const { category, icon, date, amount, note, cashCategory } = req.body;
      if (!category || !date || !amount || !cashCategory) {
        console.log(`expenseController.addExpense necessary data not found`);
        return res.status(400).json({ message: INPUT_NOT_FOUND_ERROR_MESSAGE });
      }
      let expenseData = await this.expenseService.addExpenseService(
        req.userId,
        category,
        icon,
        date,
        amount,
        note,
        cashCategory
      );
      return res
        .status(200)
        .json({ message: EXPENSE_ADD_SUCCESS_MESSAGE, data: expenseData });
    } catch (err) {
      console.log(`ExpenseController.addExpense produced error: ${err}`);
      return res
        .status(500)
        .json({ message: ADD_EXPENSE_FAILED_ERROR_MESSAGE, error: err });
    }
  };

  getAllExpenses = async (req, res) => {
    try {
      console.log(`ExpenseController.getAllExpenses is called`);
      let expenseData = await this.expenseService.getAllExpenseService(
        req.userId
      );
      return res
        .status(200)
        .json({ message: EXPENSES_FETCHED_SUCCESS_MESSAGE, data: expenseData });
    } catch (err) {
      console.log(`ExpenseController.getAllExpenses produced error: ${err}`);
      return res
        .status(500)
        .json({ message: GET_ALL_EXPENSES_FAILED_ERROR_MESSAGE, error: err });
    }
  };

  deleteExpense = async (req, res) => {
    try {
      console.log(`ExpenseController.deleteExpense is called`);
      await this.expenseService.deleteExpenseService(req.userId, req.params.id);
      return res.status(200).json({ message: DELETE_EXPENSE_SUCCESS_MESSAGE });
    } catch (err) {
      console.log(`ExpenseController.deleteExpense produced error: ${err}`);
      return res
        .status(500)
        .json({ message: DELETE_EXPENSE_FAILED_ERROR_MESSAGE, error: err });
    }
  };

  downloadExpenseExcel = async (req, res) => {
    try {
      console.log(`ExpenseController.downloadExpenseExcel is called`);
      await this.expenseService.downloadExpenseService(req.userId);
      res.download("expense_details.xlsx");
    } catch (err) {
      console.log(
        `ExpenseController.downloadExpenseExcel produced error: ${err}`
      );
      return res.status(500).json({
        message: DOWNLOAD_EXPENSE_EXCEL_FAILED_ERROR_MESSAGE,
        error: err,
      });
    }
  };
}

export default ExpenseController;

import { EXPENSE_EXCEL_WORKBOOK_NAME, EXPENSE_EXCEL_WORKSHEET_NAME } from "../common/constants.js";
import { convertToExcel } from "../common/helper.js";
import Expense from "../models/expense.model.js";
import ExpenseRepository from "../repositories/expense.repository.js";

class ExpenseService{
    constructor(){
        this.expenseRepository = new ExpenseRepository();
    }

    async addExpenseService(userId,category, icon, date, amount, description,moneyType){
        try{
            console.log(`ExpenseService.addExpenseService is called`);
            const newExpense = new Expense({
                userId,
                category,
                icon,
                date: new Date(date),
                amount,
                description,
                moneyType
            })
            return await this.expenseRepository.createOrUpdateExpense(newExpense)
        }

        catch(err){
            console.log(`ExpenseService.addExpenseService produced error: ${err}`);
            throw err;
        }

    }

    async getAllExpenseService(userId){
          try{
            console.log(`ExpenseService.getAllExpenseService is called`);
            return await this.expenseRepository.findAllActiveExpenses(userId)
        }

        catch(err){
            console.log(`ExpenseService.getAllExpenseService produced error: ${err}`);
            throw err;
        }

    }

    async deleteExpenseService(userId, expenseId){
          try{
            console.log(`ExpenseService.deleteExpenseService is called`);
            return await this.expenseRepository.deleteExpenseById(userId,expenseId);

        }

        catch(err){
            console.log(`ExpenseService.deleteExpenseService produced error: ${err}`)
            throw err;
        }
    }

    async downloadExpenseService(userId){
          try{
            console.log(`ExpenseService.downloadExpenseService is called`);
            let expenseData = await this.expenseRepository.findAllActiveExpenses(userId);

            const expenseDataJson = expenseData.map((data)=>({

                Category: data.category,
                Note: data.description,
                MoneyType: data.moneyType,
                Date: new Date(data.date),
                Amount: data.amount,

            }))
             return await convertToExcel(expenseDataJson, EXPENSE_EXCEL_WORKSHEET_NAME, EXPENSE_EXCEL_WORKBOOK_NAME);

        }

        catch(err){
            console.log(`ExpenseService.downloadExpenseService produced error: ${err}`);
            throw err;
        }
    }
}

export default ExpenseService;
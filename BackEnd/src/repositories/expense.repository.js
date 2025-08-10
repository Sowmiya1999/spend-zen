import { statusEnum } from "../common/enums.js";
import Expense from "../models/expense.model.js";

class ExpenseRepository{
    constructor(){

    }

    async createOrUpdateExpense(expenseInputdata){
        try{
            console.log(`ExpenseRepository.createOrUpdateExpense is called`);
            return await expenseInputdata.save()
        }
        catch(err){
            console.log(`ExpenseRepository.createOrUpdateExpense produced error: ${err}`);
            return null;
        }
    }

    async findAllActiveExpenses(userId){
         try{
            console.log(`ExpenseRepository.findAllActiveExpenses is called`);
            return await Expense.find({userId, status: statusEnum.ACTIVE }).sort({date:-1});
        }
        catch(err){
            console.log(`ExpenseRepository.findAllActiveExpenses produced error: ${err}`);
            return [];
        }
    }

    async deleteExpenseById(userId, id){
          try{
            console.log(`ExpenseRepository.deleteExpenseById is called`);
            return await Expense.deleteOne({userId, status: statusEnum.ACTIVE, _id: id });
        }
        catch(err){
            console.log(`ExpenseRepository.deleteExpenseById produced error: ${err}`);
            return [];
        }
    }
}

export default ExpenseRepository;
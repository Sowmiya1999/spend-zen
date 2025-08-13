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

    async getAggregatedExpenseData(userId){
        try{
              console.log(`ExpenseRepository.getAggregatedExpenseData is called`);
              return await Expense.aggregate([
                {
                    $match: { userId}
                },
                {
                    $group: {_id: null, total: {$sum: "$amount"}}
                }
              ])
        }
         catch(err){
            console.log(`ExpenseRepository.getAggregatedExpenseData produced error: ${err}`);
            return [];
        }
    }
    async getExpenseDataForProvidedDays(userId, noOfDays){
              try{
              console.log(`ExpenseRepository.getExpenseDataForProvidedDays is called`);
              return await Expense.find({
                userId,
                date: {$gte: (Date.now() - noOfDays * 24 * 60 * 60 * 1000)}
              }). sort({date: -1});
        }
         catch(err){
            console.log(`ExpenseRepository.getExpenseDataForProvidedDays produced error: ${err}`);
            return [];
        }
    }

    async getExpenseData(userId, limit){
        try{
              console.log(`ExpenseRepository.getExpenseData is called`);
              return await Expense.find({userId, status: statusEnum.ACTIVE}).limit(limit).lean();
        }
          catch(err){
            console.log(`ExpenseRepository.getExpenseData produced error: ${err}`);
            return [];
        }
    }
}

export default ExpenseRepository;
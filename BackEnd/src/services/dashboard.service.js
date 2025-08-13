import IncomeRepository from "../repositories/income.repository.js";
import ExpenseRepository from "../repositories/expense.repository.js";
import mongoose from "mongoose";
import { calculateSum } from "../common/helper.js";

class DashboardService{
    constructor(){
        this.incomeRepository = new IncomeRepository();
        this.expenseRepository = new ExpenseRepository()
    }

    async getDashboardDataService(userId){
        try{
            console.log(`DashboardService.getDashboardDataService is called`);
            const userObjectId = new mongoose.Types.ObjectId(userId);
            const aggregatedIncomeData = await this.incomeRepository.getAggregatedIncomeData(userObjectId);
            const aggregatedExpenseData = await this.expenseRepository.getAggregatedExpenseData(userObjectId);
            
            // getting last 60 days icnome data
            const last60DaysIncomeData = await this.incomeRepository.getIncomeDataForProvidedDays(userId, 60);
            const totalIncomeOfLast60Days =  await calculateSum(last60DaysIncomeData);

            // getting last 30 days expense data
            const last30DaysExpenseData = await this.expenseRepository.getExpenseDataForProvidedDays(userId, 30);
            const totalExpenseOfLast30Days = await calculateSum(last30DaysExpenseData)

            const lastTransactions = [];

            console.log(`processing recent Transactions`);
            //getting last 5 income and expense transactions
            lastTransactions.push(
                ...(await this.incomeRepository.getIncomeData(userId, 5)).map((item) => ({ ... item.toObject(), type: "Income"})), 
                ...(await this.expenseRepository.getExpenseData(userId,5)).map((item) => ({...item, type: "Expense"})) 
            ) // as push returns number as response cannot perform push here so we do it seperate

            console.log(`sorting transactions`)
            lastTransactions.sort((a,b) => a.date - b.date);

            console.log(`populating response object`);
            return {
                totalBalance: (aggregatedIncomeData[0]?.total || 0) - (aggregatedExpenseData[0]?.total || 0),
                totalIncome: aggregatedIncomeData[0]?.total || 0,
                totalExpense: aggregatedExpenseData[0]?.total || 0,
                last30DaysExpense : {
                    total: totalExpenseOfLast30Days,
                    transactions: last30DaysExpenseData
                },
                last60DaysIncome : {
                    total: totalIncomeOfLast60Days,
                    transactions: last60DaysIncomeData
                },
                recentTransactions: lastTransactions

            }


        }
        catch(err){
                   console.log(`DashboardService.getDashboardDataService produced error: ${err}`);
                   return res.status(500).json({message:DASHBOARD_DATA_FETCH_FAILED_ERROR_MESSAGE, error:err})
               }
    }
}

export default DashboardService;
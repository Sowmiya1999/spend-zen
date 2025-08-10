import { convertToExcel } from "../common/helper.js";
import { INCOME_DELETION_FAILED_ERROR_MESSAGE } from "../common/constants.js";
import IncomeRepository from "../repositories/income.repository.js";

class IncomeService{
    constructor(){
        this.incomeRepository = new IncomeRepository();
    }

    async addIncomeService(userId, source, icon, date, amount, cashCategory, note ){
        try{
            console.log(`incomeService.addIncomeService is called`);
            return await this.incomeRepository.createOrUpdateIncome(userId,icon,source,amount,date, cashCategory, note);
        }
        catch(err){
            console.log(`IncomeService.addIncomeService produced error: ${err}`);
            throw err;
        }
    }

    async getAllIncomeService(userId){
        try{
            console.log(`incomeService.getAllIncomeService is called`);
            const incomeData = await this.incomeRepository.findAllActiveIncome(userId);

            console.log(`incomeservice.getAllIncomeService fetched data`)
            return incomeData;
        }
        catch(err){
            console.log(`incomeservice.getAllIncomeService produced error: ${err}`);
            throw err;
        }
    }

    async deleteIncomeService(userId, incomeId){
        try{
             console.log(`incomeService.deleteIncomeService is called`);
             const deleteResponse = await this.incomeRepository.deleteIncome(userId, incomeId);
             if(!deleteResponse) throw new Error(INCOME_DELETION_FAILED_ERROR_MESSAGE);
             return;
        }
        catch(err){
             console.log(`incomeservice.deleteIncomeService produced error: ${err}`);
            throw err;
        }
    }

    async downloadIncomeExcelService(userId){
        try{
            console.log(`incomeService.downloadIncomeExcelService called`);
            let incomeData = await this.incomeRepository.findAllActiveIncome(userId);

            let incomeDataMap = incomeData.map((data) => ({
                Source: data.source,
                Note: data.note,
                CashCategory: data.cashCategory,
                Amount: data.amount,
                Date: data.date
            }));
            await convertToExcel(incomeDataMap, "Income", "income_details.xlsx");

            return;

        }
        catch(err){
             console.log(`incomeService.downloadIncomeExcelService produced error: ${err}`);
             throw err;
        }
    }
}

export default IncomeService;
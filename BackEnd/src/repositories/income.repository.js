import { ADD_INCOME_FAILED_ERROR_MESSAGE } from "../common/constants.js";
import { statusEnum } from "../common/enums.js";
import Income from "../models/income.model.js";
import mongoose from "mongoose";

class IncomeRepository{
    constructor(){

    }

    async createOrUpdateIncome(userId,icon,source, amount, date, cashCategory, note){
        try{
            const newIncome = new Income({
                userId,
                icon,
                source,
                amount,
                cashCategory,
                note,
                date: new Date(date)
            })

            return await newIncome.save();
        }
        catch(err){
            console.log(`incomeRepository.createIncome Produced error: ${error}`);
            throw new Error(ADD_INCOME_FAILED_ERROR_MESSAGE)
        }
    }

    async findAllActiveIncome(userId){
        try{
            console.log(`incomeRepository.findAllActiveIncome is called for userId: ${userId}`);
            return await Income.find({status: statusEnum.ACTIVE, userId: new mongoose.Types.ObjectId(userId) }).sort({date:-1});
        }
        catch(err){
            console.log(`incomeRepository.findAllActiveIncome produced error: ${err}`);
            return [];
        }
    }

    async deleteIncome(userId, incomeId){
        try{
             console.log(`incomeRepository.deleteIncome is called for userId: ${userId } & incomeId: ${incomeId}`);
             const deleteResponse = await  Income.deleteOne({_id: incomeId});

             if(deleteResponse.deletedCount == 0){
                console.log(`incomeRepository.findAllActiveIncome failed to delete the document with id : ${incomeId}`);
                return false;
             }
             return true;
        }
          catch(err){
            console.log(`incomeRepository.findAllActiveIncome produced error: ${err}`);
            return false;
        }
    }
}

export default IncomeRepository;
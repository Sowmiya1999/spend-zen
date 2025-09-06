import { ADD_INCOME_FAILED_ERROR_MESSAGE } from "../common/constants.js";
import { statusEnum } from "../common/enums.js";
import Income from "../models/income.model.js";
import mongoose from "mongoose";

class IncomeRepository{
    constructor(){

    }

    async createOrUpdateIncome(userId,icon,source, amount, date, moneyType, description){
        try{
            const newIncome = new Income({
                userId,
                icon,
                source,
                amount,
                moneyType,
                description,
                date: new Date(date)
            })

            return await newIncome.save();
        }
        catch(err){
            console.log(`incomeRepository.createIncome Produced error: ${err}`);
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

    async getAggregatedIncomeData(userId){
        try{
            console.log(`incomeRepository.getAggregatedIncomeData is called`);
            return await Income.aggregate(
                [
                    {
                        $match: {userId: userId}
                    },
                    {
                        $group: { _id: null, total: {$sum: "$amount"}}
                    }
                ]
            )
        }
        catch(err){
            console.log(`incomeRepository.getAggregatedIncomeData produced error: ${err}`)
        }
    }

     async getIncomeDataForProvidedDays(userId, noOfDays){
        try{
            console.log(`incomeRepository.getIncomeDataForProvidedDays is called`);
            return await Income.find({userId, date: { $gte: (Date.now() - noOfDays *24 *60 * 60 * 1000)} }, // days * hours * minutes * seconds * milliseconds
        ).sort({date: -1});
        }
        catch(err){
            console.log(`incomeRepository.getIncomeDataForProvidedDays produced error: ${err}`);
            return [];
        }
    }

    async getIncomeData(userId, limit){
        try{
            console.log(`incomeRepository.getIncomeData is called`);
            return await Income.find({userId, status: statusEnum.ACTIVE}).limit(limit).sort({date:-1});
        }
          catch(err){
            console.log(`incomeRepository.getIncomeData produced error: ${err}`);
            return [];
        }
    }
}

export default IncomeRepository;
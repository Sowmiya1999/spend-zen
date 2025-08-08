import { ADD_INCOME_FAILED_ERROR_MESSAGE, DOWNLOAD_INCOME_EXCEL_FAILED_ERROR_MESSAGE, GET_INCOME_FAILED_ERROR_MESSAGE, INCOME_DELETION_FAILED_ERROR_MESSAGE } from "../common/constants.js"

class IncomeController{
    constructor(){

    }

    addIncome = async (req,res) =>{
        try{
              console.log(`IncomeController.addIncome`)
              console.log(`IncomeController.addIncome is called`);

        }
        catch(err){
            console.log(`IncomeController.addIncome produced error: ${err}`)
            return res.status(500).json({message: ADD_INCOME_FAILED_ERROR_MESSAGE, error:err});
        }
    }

     getAllIncome = async (req,res) =>{
        try{
              console.log(`IncomeController.getAllIncome`)
              console.log(`IncomeController.getAllIncome is called`);

        }
        catch(err){
            console.log(`IncomeController.getAllIncome produced error: ${err}`)
            return res.status(500).json({message: GET_INCOME_FAILED_ERROR_MESSAGE, error:err});
        }
    }

      deleteIncome = async (req,res) =>{
        try{
              console.log(`IncomeController.deleteIncome`)
              console.log(`IncomeController.deleteIncome is called`);

        }
        catch(err){
            console.log(`IncomeController.deleteIncome produced error: ${err}`)
            return res.status(500).json({message: INCOME_DELETION_FAILED_ERROR_MESSAGE, error:err});
        }
    }

          downloadIncomeExcel = async (req,res) =>{
        try{
              console.log(`IncomeController.downloadIncomeExcel`)
              console.log(`IncomeController.downloadIncomeExcel is called`);

        }
        catch(err){
            console.log(`IncomeController.downloadIncomeExcel produced error: ${err}`)
            return res.status(500).json({message: DOWNLOAD_INCOME_EXCEL_FAILED_ERROR_MESSAGE, error:err});
        }
    }
}

export default IncomeController;
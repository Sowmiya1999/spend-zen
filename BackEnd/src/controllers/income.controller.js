import { ADD_INCOME_FAILED_ERROR_MESSAGE, DOWNLOAD_INCOME_EXCEL_FAILED_ERROR_MESSAGE, DOWNLOAD_INCOME_EXCEL_SUCCESS_MESSAGE, GET_INCOME_FAILED_ERROR_MESSAGE, INCOME_ADDED_SUCCESS_MESSAGE, INCOME_DELETED_SUCCESS_MESSAGE, INCOME_DELETION_FAILED_ERROR_MESSAGE, INCOME_FETCHED_SUCCESS_MESSAGE, INPUT_NOT_FOUND_ERROR_MESSAGE } from "../common/constants.js"
import IncomeService from "../services/income.service.js";

class IncomeController{
    constructor(){
        this.incomeService = new IncomeService()
    }

    addIncome = async (req,res) =>{
        try{
              console.log(`IncomeController.addIncome`)
              console.log(`IncomeController.addIncome is called`);
              const {source , icon, amount, date, note, cashCategory} = req.body;

              if(!source ||!amount || !date ){
                return res.status(400).json({message:INPUT_NOT_FOUND_ERROR_MESSAGE})
              }
              let incomeData = await this.incomeService.addIncomeService(req.userId,source,icon,date,amount, cashCategory, note);

              return res.status(200).json({message:INCOME_ADDED_SUCCESS_MESSAGE, data:incomeData})

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
              const incomeData= await this.incomeService.getAllIncomeService(req.userId);
              return res.status(200).json({message:INCOME_FETCHED_SUCCESS_MESSAGE, data: incomeData});

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
              await this.incomeService.deleteIncomeService(req.userId, req.params.id);
              return res.status(200).json({message: INCOME_DELETED_SUCCESS_MESSAGE})

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
              await this.incomeService.downloadIncomeExcelService(req.userId);
              res.download('income_details.xlsx');
              
        }
        catch(err){
            console.log(`IncomeController.downloadIncomeExcel produced error: ${err}`)
            return res.status(500).json({message: DOWNLOAD_INCOME_EXCEL_FAILED_ERROR_MESSAGE, error:err});
        }
    }
}

export default IncomeController;
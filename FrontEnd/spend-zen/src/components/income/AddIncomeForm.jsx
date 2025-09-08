import { useState } from "react";
import Input from "../inputs/Input";
import Dropdown from "../inputs/Dropdown";
import { moneyTypeEnum } from "../../../../../BackEnd/src/common/enums";
import EmojiPickerLayout from "../layouts/EmojiPickerLayout";

const AddIncomeForm = ({onAddIncome}) =>{
    const [income, setIncome] = useState({
        source:"",
        icon:"",
        date: "",
        amount:"",
        description:"",
        moneyType:"",

    });
    const [errors, setError] = useState({});
    const validateForm = () =>{
        if(!income.source){
            setError({"source":"Income source is not provided"});
            // return;
        }
        else if(!income.amount){
              setError({"amount" : "Amount is not provided"});
            return;
        }
        else if(!income.moneyType){
              setError({"moneytype" : "MoneyType is not provided"});
            return;
        }
        else if(!income.date){
              setError({"date" : "Date is not provided"});
            return;
        }
        else{
            setError({});
        }

      
        onAddIncome(income);

    }
    const handleChange = (key,value) => setIncome({...income, [key]:value})
    return (
        <div className="">
            <EmojiPickerLayout 
            icon={income.icon}
            onChange={(selectedIcon)=> handleChange("icon", selectedIcon)}/>

            <Input
            value={income.source}
            onChange={({target})=> handleChange("source", target.value)}
            label="Income Source"
            placeholder="salary, etc., max 30 char.,"
            type="text"
            mandatoryField={true}
            error={errors.source}
            length={30}
            />
              <Input
            value={income.description}
            onChange={({target})=> handleChange("description", target.value)}
            label="Description"
            placeholder="Describe about the income source"
            type="text"
             mandatoryField={false}
            />
            <Input
            value={income.amount}
            onChange={({target})=> handleChange("amount", target.value)}
            label="Amount"
            placeholder="Enter the amount"
            type="number"
             mandatoryField={true}
             error={errors.amount}
            />
             <Dropdown
            value={income.moneyType}
            onChange={(value)=> handleChange("moneyType", value)}
            label="MoneyType"
            placeholder="select the MoneyType"
            type="text"
             mandatoryField={true}
             dataList={[{name: moneyTypeEnum.CASH},{name: moneyTypeEnum.BANK}]}
            />
            <Input
            value={income.date}
            onChange={({target})=> handleChange("date", target.value)}
            label="Date"
            placeholder=""
            type="date"
             mandatoryField={true}
            />
            <div className="flex justify-end mt-6">
                <button type="button" className="add-btn add-btn-fill" onClick={() => validateForm(income)}>
                    Add Income
                </button>
            </div>
           
        </div>
    )
}

export default AddIncomeForm;
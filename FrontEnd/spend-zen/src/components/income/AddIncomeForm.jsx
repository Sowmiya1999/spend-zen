import { useState } from "react";
import Input from "../inputs/Input";
import Dropdown from "../inputs/Dropdown";
import { moneyTypeEnum } from "../../../../../BackEnd/src/common/enums";

const AddIncomeForm = ({onAddIncome}) =>{
    const [income, setIncome] = useState({
        source:"",
        icon:"",
        date: "",
        amount:"",
        description:"",
        moneyType:"",

    });
    const handleChange = (key,value) => setIncome({...income, [key]:value})
    return (
        <div className="">
            <Input
            value={income.source}
            onChange={({target})=> handleChange("source", target.value)}
            label="Income Source"
            placeholder="salary, etc.,"
            type="text"
            mandatoryField={true}
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
            />
             <Dropdown
            value={income.amount}
            onChange={({target})=> handleChange("moneyType", target.value)}
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
                <button type="button" className="add-btn add-btn-fill" onClick={() => onAddIncome(income)}>
                    Add Income
                </button>
            </div>
           
        </div>
    )
}

export default AddIncomeForm;
import { useState } from "react";
import EmojiPickerLayout from "../layouts/EmojiPickerLayout";
import Input from "../inputs/Input";
import Dropdown from "../inputs/Dropdown";
import { moneyTypeEnum } from "../../../../../BackEnd/src/common/enums";

const AddExpenseForm = ({onAddExpense}) =>{

    const [expense, setExpense] = useState({
        icon: "",
        amount: "",
        category: "",
        moneyType: "",
        date: "",
        description: ""
    })

    const [errors, setError] = useState({});

    const handleChange = (key, value) =>{
        setExpense({...expense, [key] : value});
    }

    const validateForm = () =>{
        if(!expense?.category){
            setError({"category":"Expense category is not provided"});
            return;
        }
        else{
            setError("");
        }
    }

    return (
        <div className=""> 
                <div className="">
                    <EmojiPickerLayout 
                    icon={expense?.icon}
                    onChange={(selectedIcon) => handleChange("icon",selectedIcon)}
                     />
                </div>

                <div className="">
                    <Input
                    value={expense.category}
                    placeholder="Enter the category of Expense"
                    mandatoryField={true}
                    label="Expense Category"
                    type="Expense"
                    onChange={(value) => handleChange({"category": value})}
                    error={errors["category"]}
                    />
                    <Input
                    value={expense.description}
                    placeholder="Enter the description about the expense"
                    mandatoryField={false}
                    label="Description"
                    type="Expense"
                    onChange={(value) => handleChange({"description": value})}
                    />
                    <Input
                    value={expense.amount}
                    placeholder="Enter the amount"
                    mandatoryField={true}
                    label="Amount"
                    type="number"
                    onChange={(value) => handleChange({"amount": value})}
                     error={errors["amount"]}
                    />
                    <Dropdown
                    dataList={[{name: moneyTypeEnum.CASH},{name: moneyTypeEnum.BANK}]}
                      value={expense.moneyType}
                    placeholder="Enter the money type"
                    mandatoryField={true}
                    label="Money Type"
                    type="text"
                    onChange={(value) => handleChange({"moneyType": value})}
                     error={errors["moneyType"]}
                    />

                      <Input
                    placeholder="Select the Date"
                    mandatoryField={true}
                    label="Date"
                    type="date"
                    onChange={(value) => handleChange({"category": value})}
                     error={errors["date"]}
                    />
                    <div className="flex justify-end">
                          <button className="add-btn add-btn-fill " onClick={() => onAddExpense(expense)}>
                        Add Expense
                    </button>
                    </div>
                  

                </div>
        </div>
    )
}

export default AddExpenseForm;
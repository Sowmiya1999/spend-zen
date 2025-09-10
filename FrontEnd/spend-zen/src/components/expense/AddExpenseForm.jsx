import { useState } from "react";
import EmojiPickerLayout from "../layouts/EmojiPickerLayout";
import Input from "../inputs/Input";
import Dropdown from "../inputs/Dropdown";
import { moneyTypeEnum } from "../../../../../BackEnd/src/common/enums";

const AddExpenseForm = ({ onAddExpense }) => {
  const [expense, setExpense] = useState({
    icon: "",
    amount: "",
    category: "",
    moneyType: "",
    date: "",
    description: "",
  });

  const [errors, setError] = useState({});

  const handleChange = (key, value) => {
    setExpense({ ...expense, [key]: value });
  };

  const validateForm = () => {
    if (!expense?.category) {
      setError({ category: "Expense category is not provided" });
      return;
    } if (!expense?.amount) {
      setError({ category: "Expense amount is not provided" });
      return;
    } if (!expense?.moneyType) {
      setError({ category: "Expense money type is not provided" });
      return;
    } if (!expense?.date) {
      setError({ category: "Expense date is not provided" });
      return;
    }
     else {
      setError({});
    }
    onAddExpense(expense);
  };

  return (
    <div className="">
      <div className="">
        <EmojiPickerLayout
          icon={expense?.icon}
          onChange={(selectedIcon) => handleChange("icon", selectedIcon)}
        />
      </div>

      <div className="">
        <Input
          value={expense.category}
          placeholder="Enter the category of Expense"
          mandatoryField={true}
          label="Expense Category"
          type="text"
          onChange={({ target }) => handleChange( "category", target.value )}
          error={errors["category"]}
        />
        <Input
          value={expense.description}
          placeholder="Enter the description about the expense"
          mandatoryField={false}
          label="Description"
          type="text"
          onChange={({ target }) => handleChange( "description", target.value )}
        />
        <Input
          value={expense.amount}
          placeholder="Enter the amount"
          mandatoryField={true}
          label="Amount"
          type="number"
          onChange={({target}) => handleChange( "amount", target.value )}
          error={errors["amount"]}
        />
        <Dropdown
          dataList={[
            { name: moneyTypeEnum.CASH },
            { name: moneyTypeEnum.BANK },
          ]}
          value={expense.moneyType}
          placeholder="Enter the money type"
          mandatoryField={true}
          label="Money Type"
          type="text"
          onChange={(value) => handleChange( "moneyType", value )}
          error={errors["moneyType"]}
        />

        <Input
          placeholder="Select the Date"
          mandatoryField={true}
          label="Date"
          type="date"
          onChange={({ target }) => handleChange( "date", target.value )}
          error={errors["date"]}
        />
        <div className="flex justify-end">
          <button
            className="add-btn add-btn-fill "
            onClick={() => validateForm()}
          >
            Add Expense
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddExpenseForm;

import { LuDownload } from "react-icons/lu";
import TransactionInfoCard from "../cards/TransactionInfoCard";
import moment from "moment";

const ExpenseList = ({ transactions, onDelete }) => {
  console.log(JSON.stringify(transactions));
  return (
    <div className="card">
      <div className="flex justify-between">
        <h5 className="card-title">Expenses</h5>
        <button className="card-btn">
          <LuDownload className="text-lg" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
        {transactions?.map((transaction, index) => (
          <TransactionInfoCard
            key={transaction?._id}
            title={transaction?.category}
            icon={transaction?.icon}
            date={moment.utc(transaction?.date).format("Do MMM")}
            amount={transaction?.amount}
            type="Expense"
            hideDeleteBtn={false}
            onDelete={() => onDelete(transaction?._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;

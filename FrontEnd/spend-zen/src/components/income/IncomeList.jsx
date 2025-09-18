import { Download } from "lucide-react";
import CustomToolTip from "../charts/CustomToolTip";
import TransactionInfoCard from "../cards/TransactionInfoCard";
import moment from "moment";
import DisplayCardLayout from "../layouts/DisplayCardLayout";

const IncomeList = ({ transactions, onDelete, onDownload }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="card-title">Income Sources</h5>

        <button
          className="card-btn"
          onClick={() => onDownload("income_details")}
        >
          <Download className={``} size={20} />
          <span className="font-medium">Download</span>
        </button>
      </div>

      {transactions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          {transactions?.map((entry, index) => (
            <TransactionInfoCard
              key={entry?._id}
              title={entry?.source}
              icon={entry?.icon}
              date={moment.utc(entry?.date).format("Do MMM YYYY")}
              amount={entry?.amount}
              type="Income"
              hideDeleteBtn={false}
              onDelete={() => onDelete(entry?._id)}
            />
          ))}
        </div>
      ) : (
        <DisplayCardLayout message="No Income Records Available" />
      )}
    </div>
  );
};

export default IncomeList;

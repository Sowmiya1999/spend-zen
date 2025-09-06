import { Download } from "lucide-react";
import CustomToolTip from "../charts/CustomToolTip";
import TransactionInfoCard from "../cards/TransactionInfoCard";
import moment from "moment";

const IncomeList = ({transactions, onDelete, onDownload}) =>{
    return (
        <div className="card">
            <div className="flex items-center justify-between">
                <h5 className="card-title">Income Sources</h5>

                <button className="card-btn" onClick={onDownload}><Download className={``} size={20} /></button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                {transactions?.map((entry,index)=>(
                    <TransactionInfoCard
                    key={entry?._id}
                    title={entry?.source}
                    icone={entry?.icon}
                    date={moment.utc(entry?.date).format("Do MMM YYYY")}
                    amount={entry?.amount}
                    type="Income"
                    hideDeleteBtn={false}
                    />
                ))}
            </div>
        </div>
    )
}

export default IncomeList;
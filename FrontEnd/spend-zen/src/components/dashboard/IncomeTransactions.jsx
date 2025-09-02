import TransactionInfoCard from "../cards/TransactionInfoCard";
import OnSeeAllButton from "../inputs/OnSeeAllButton";
import moment from "moment";

const IncomeTransactions = ({transactions, onSeeMore}) =>{
    console.log(JSON.stringify(transactions))
    return (
        <div className="card">
            <div className="flex items-center justify-between">
                <h5 className="text-lg">Income</h5>
                <OnSeeAllButton onSeeMore={onSeeMore}/>
            </div>

            <div className="mt-6">
                {transactions?.slice(0,5)?.map((transaction) => (
                     <TransactionInfoCard
                     key={transaction?._id}
                     icon={transaction?.icon}
                     date={moment.utc(transaction?.date).format("Do MMM YYYY")}
                     amount={transaction?.amount}
                     title={transaction?.source}
                     type="Income"
                     hideDeleteBtn
                     />

                ))
                }
           
            </div>
            
        </div>
    )
}

export default IncomeTransactions;
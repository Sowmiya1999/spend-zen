import { LuArrowRight } from "react-icons/lu";
import moment from 'moment';
import TransactionInfoCard from "../cards/TransactionInfoCard";
import { useState } from "react";
import OnSeeAllButton from "../inputs/OnSeeAllButton";

const RecentTransactions = ({transactions,onSeeMore}) =>{

    const [hideDeleteBtn, setHideDeleteBtn] = useState(false);
    return (
        <div className="card ">
                  <div className="flex items-center justify-between">
                    <h5 className="text-lg font-medium">Recent Transactions</h5>
                    <OnSeeAllButton onSeeMore={onSeeMore}></OnSeeAllButton>
                  </div>

                  <div className="mt-6">
                    {transactions?.slice(0,5)?.map((item)=>(
                        <TransactionInfoCard
                        key={item._id}
                        title={item.type == 'Expense' ? item.category : item.source}
                        icon={item.icon}
                        date = {moment.utc(item.date).format("Do MMM YYYY")}
                        amount={item.amount}
                        type={item.type}
                        hideDeleteBtn={hideDeleteBtn}
                        />
                    ))}
                  </div>
        </div>
    )
}

export default RecentTransactions;
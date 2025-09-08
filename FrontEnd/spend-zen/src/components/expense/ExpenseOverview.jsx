import { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";
import { prepareExpenseOverviewChartData } from "../../utils/helper";
import CustomBarChart from "../charts/CustomBarChart";
import CustomLineChart from "../charts/CustomLineChart";


const ExpenseOverview = ({transactions, onExpenseIncome}) =>{
    const [chartData, setChartData] = useState([]);

    useEffect(()=>{
        const result = prepareExpenseOverviewChartData(transactions);

        setChartData(result);
        return(()=>{})
    },[transactions])
    return (
           <div className="card">
            <div className="flex justify-between">
                <div className="">
                    <h5 className="card-title">
                        Expense Overview
                    </h5>
                    <p className="text-sm text-gray-500 mt-0.5">
                      Know where your money goes and take control of your budget.
                    </p>
                </div>

                <div className="">
                  <button className="add-btn">
                    <LuPlus className="text-lg"/>
                    Add Expense
                </button>
                </div>
              
            </div>

            <div className="mt-10">
                <CustomLineChart
                data={chartData}
                />
            </div>
        </div>
    )
      
}

export default ExpenseOverview;
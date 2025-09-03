import {LuPlus} from "react-icons/lu";
import CustomBarChart from "../charts/CustomBarChart";
import { useEffect, useState } from "react";
import { prepareIncomeBarChartData } from "../../utils/helper";

const IncomeOverView = ({transactions ,onAddIncome}) =>{
    const [chartData, setChartData] = useState([]);

    useEffect(()=>{
        const result = prepareIncomeBarChartData(transactions);
        setChartData(result);

        return () => {};
    },[transactions]);
    return(
        <div className="card">
            <div className="flex  items-center justify-between">
                <div className="">
                    <h5 className="text-lg font-medium">
                        Income Overview
                    </h5>
                    <p className="text-sm text-gray-500 mt-0.5">
                       Follow your earnings journey and see how your income grows.
                    </p>
                </div>

                <button className="add-btn" onClick={onAddIncome}>
                    <LuPlus className=" text-lg"/>
                    Add Income
                </button>
            </div>

            <div className="mt-10">
                <CustomBarChart
                data={chartData}
                />
            </div>
        </div>
    )
}

export default IncomeOverView;
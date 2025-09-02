import {LuPlus} from "react-icons/lu";
import CustomBarChart from "../charts/CustomBarChart";
import { useEffect, useState } from "react";
import { prepareIncomeBarChartData } from "../../utils/helper";

const IncomeOverView = ({transactions,onAddIncome}) =>{
    const [chartData, setChartData] = useState([]);

    useEffect(()=>{
        const result = prepareIncomeBarChartData(transactions);
        setChartData(result);

        return () => {};
    },[transactions]);
    return(
        <div className="">
            IncomeOverview
        </div>
    )
}

export default IncomeOverView;
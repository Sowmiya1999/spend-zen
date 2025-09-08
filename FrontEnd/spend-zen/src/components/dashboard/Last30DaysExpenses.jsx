import { useEffect, useState } from "react";
import { LuArrowRight } from "react-icons/lu";
import { prepareExpenseBarChartData } from "../../utils/helper";
import CustomBarChart from "../charts/CustomBarChart";

const Last30DaysExpenses = ({data}) =>{

    const [chartData, setChartData] = useState([]);
    useEffect(()=>{
        const result = prepareExpenseBarChartData(data);
        setChartData(result);

        return ()=>{};
    }, [data]);
    return (
        <div className="card col-span-1">
            <div className="flex items-center justify-between">
                <div className="card-title">
                    <h5>Last 30 days Expenses
                        </h5>
                       
                </div>
              


            </div>
            <CustomBarChart data={chartData}/>
        </div>
    )
}

export default Last30DaysExpenses;
import { useEffect, useState } from "react";
import CustomPieChart from "./CustomPieChart";

const RecentIncomeWithChart = ({data, totalIncome}) =>{

    const [chartData, setChartData] = useState([]);
    const prepareChartData = () => {
        const chartDataArr = data?.map((item) =>(
            {
                name: item?.source,
                amount: item?.amount
            }
        ));
        setChartData(chartDataArr);
    }

    useEffect(() => {
        prepareChartData();

        return () => {};
    }, [data]);

    return (
        <div className="card">
            <div className="flex items-center justify-between">
                <h5 className="card-title">Last 60 days Income</h5>
            </div>
            <CustomPieChart
            data={chartData}
            label="Total Income"
            totalAmount={totalIncome}
            showTextAnchor
            >

            </CustomPieChart>
        </div>
    )
}

export default RecentIncomeWithChart;

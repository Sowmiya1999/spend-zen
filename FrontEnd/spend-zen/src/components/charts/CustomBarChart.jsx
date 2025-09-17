import {
BarChart,
Bar,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
Legend,
ResponsiveContainer,
Cell,
Rectangle

} from "recharts"
import CustomToolTip from "./CustomToolTip";
import moment from "moment";
import { AlignCenter } from "lucide-react";

const CustomBarChart = ({data}) =>{
    console.log(JSON.stringify(data))
    const getBarColor = (index) => {
        return index % 2 === 0 ? "#3B82F6" : "#60A5FA";
    }

    const CustomToolTip = ({active,payload}) =>{
        if(active && payload && payload.length){
            return (
                <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
                    <p className="text-xs font-semibold text-blue-800 mb-1">
                        {payload[0].payload.category}

                    </p>
                    <p className="text-sm  text-gray-600">
                       Amount: <span className="text-sm font-medium text-gray-900">{payload[0].payload.amount}</span> 

                    </p>
                     {/* <p className="text-sm text-gray-600">
                on {payload[0].payload.month}
            </p> */}

                </div>
            )
        }
        return null;
    }
    return (
        <div className="bg-white mt-6">

            <ResponsiveContainer width="80%" height={300}>
                <BarChart data={data} >
                    <CartesianGrid stroke="none"/>
                    <XAxis dataKey="month" tick={{fontSize:12, fill: "#555"}} stroke="none"/>
                    <YAxis tick={{fontSize: 12, fill: "#555"}} stroke="none"/>
                    <Tooltip  content={CustomToolTip}/>
                    <Bar barSize={30} dataKey="amount" fill="#FF8042" radius={[5,5,0,0]}  activeDot={{r:8, fill:"yellow"}} activeStyle={{fill: "green"}} activeBar={(props) => (
                        <Rectangle
                        {...props}
                        stroke="#333"
                        strokeWidth={0.5}
                        />
                    )}>
                        {data.map((entry,index) => (
                            <Cell width={30} key={index} fill={getBarColor(index)}></Cell>
                        ))}
                    </Bar>
                </BarChart>

            </ResponsiveContainer>
            </div>
    )
}

export default CustomBarChart;
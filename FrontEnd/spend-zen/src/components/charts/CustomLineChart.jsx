import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const CustomLineChart = ({data}) => {

    return (
        <div className="bg-white mt-6">
            <ResponsiveContainer width="80%" height={300}>
                <LineChart data={data}>
                        <CartesianGrid stroke="none"/>
                         <XAxis tick={{fontSize:12, fill: "#555"}} stroke="none"/>
                         <YAxis tick={{fontSize: 12, fill: "#555"}} stroke="none"/>
                         <Line dataKey="amount" fill="#FF8042" color="#FF8042">
                            
                         </Line>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default CustomLineChart;
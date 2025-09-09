import { CartesianGrid,Tooltip, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Area, AreaChart } from "recharts";

const CustomLineChart = ({data}) => {

    const CustomTooltip = ({active, payload}) => {
        if(active && payload && payload.length){
            return (
            <div className="bg-white shadow-md px-3 py-2 rounded-lg border border-slate-300">
                <p className="text-xs text-primary font-semibold">
                    {payload[0].payload.category}
                </p>
                <p className="text-sm font-medium">
                   <span className="text-sm text-slate-500 font-medium">Amount:</span> {payload[0].payload.amount}
                </p>
            </div>)
        }
        return null;
    }

    return (
        <div className="bg-white mt-6">
            <ResponsiveContainer width="80%" height={300}>
                <AreaChart data={data}>
                <defs>
                       <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="5%" stopColor="#8DC3F8" stopOpacity={0.9}/>
                       <stop offset="95%" stopColor="#8DC3F8" stopOpacity={0.2}/>
                        
                         </linearGradient>
                         </defs>

                         <CartesianGrid stroke="none"/>
                          <XAxis dataKey="month" tick={{fontSize:12, fill: "#555"}} stroke="none"/>
                         <YAxis tick={{fontSize: 12, fill: "#555"}} stroke="none"/>
                         <Tooltip content={CustomTooltip}/>
                        <Area type="monotone" dataKey="amount" stroke="#4D9CFC" fill="url(#incomeGradient)" strokeWidth={3} dot={{r:3, fill:"#8DC3F8"}}>
                        </Area>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default CustomLineChart;
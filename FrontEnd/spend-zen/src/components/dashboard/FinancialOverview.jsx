import { LuHandCoins, LuWalletMinimal } from "react-icons/lu";
import InfoCard from "../cards/InfoCard";
import { IoIosArrowDropdown, IoIosArrowDropdownCircle, IoMdArrowDropdown, IoMdArrowDropdownCircle, IoMdArrowDropup, IoMdCard } from "react-icons/io";
import { addThousandsSeperator } from "../../utils/helper";
import { IndianRupee } from "lucide-react";
import CustomPieChart from "../charts/CustomPieChart";
import { useState } from "react";

const COLORS = ["#0066ff", "#FA2C37", "#16a34a"];

 const FinancialOverView = ({totalBalance, totalIncome, totalExpense}) =>{
    const [isDropdownActive, setIsDropDownActive] = useState(true);
    const balanceData = [
        {name: "Total Balance", amount: totalBalance},
        {name: "Total Expense", amount: totalExpense},
        {name: "Total Income", amount: totalIncome}
    ]

    return(
        <div className="card">
            <div className="flex items-center justify-between">
                <h5 className="card-title">Financial Overview</h5>
               {
                isDropdownActive
                ? <IoMdArrowDropup size={20} onClick={()=> setIsDropDownActive(!isDropdownActive)}/>
                :<IoMdArrowDropdown size={20} onClick={()=> setIsDropDownActive(!isDropdownActive)}/>
               } 
            </div>
           {isDropdownActive 
           ? <CustomPieChart
            data={balanceData}
            label="Total Balance"
            totalAmount={totalBalance}
            colors={COLORS}
            showTextAnchor
            />
            :<div className="h-1"></div>
 }
        </div>
        // <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        //       <InfoCard
        //       icon={<IoMdCard/>}
        //       label="Total Balance"
        //       value={addThousandsSeperator(totalBalance || 0)}
        //       color="bg-primary"
        //       />

        //        <InfoCard
        //       icon={<LuWalletMinimal/>}
        //       label="Total Income"
        //       value={addThousandsSeperator(totalIncome || 0)}
        //       color="bg-green-500"
        //       />

        //        <InfoCard
        //       icon={<LuHandCoins/>}
        //       label="Total Expense"
        //       value={addThousandsSeperator(totalExpense || 0)}
        //       color="bg-red-500"
        //       />

        //   </div>
    )
}

export default FinancialOverView;
import { IndianRupee } from "lucide-react";
import {LuTrendingUp, LuTrendingDown, LuTrash2, LuArrowLeftRight} from "react-icons/lu"
import { addThousandsSeperator } from "../../utils/helper";


const TransactionInfoCard = (
    {
        title,icon,date,amount,type,hideDeleteBtn
    }
) => {
    const getAmountStyles = () =>{
        return type==="Income" ? "text-green-600" : "text-red-600";
    }
    return (
        <div className="group relative flex items-center gap-4 mt-2 p-3 rounded-lg bg-gray-100 hover:bg-blue-100">
            <div className={`w-12 h-12 text-xl rounded-full  flex justify-center items-center border-1 border-gray-400 bg-gray-200 ${getAmountStyles()}`}>
                {
                    icon 
                    ?(<img src={icon} alt={title} className="w-6 h-6 "/>)
                    :(<LuArrowLeftRight/>) 
                }
            </div>

            <div className="flex flex-1 items-center justify-between">
                <div className="">
                    <p className="text-md text-gray-700 font-bold">{title}</p>
                    <p className="text-sm text-gray-500 font-medium">{date}</p>
                </div>
                <div className="flex flex-col items-center justify-evenly">
                  
                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-md ${getAmountStyles()}`}>
                        <h6 className={`text-[15px] `}>
                            {type == "Income" ? "+" : "-"} <span><IndianRupee size={16} className="inline"/> {addThousandsSeperator(amount)}</span>
                        </h6>
                        {type === "Income"
                        ? <LuTrendingUp/>
                        : <LuTrendingDown/>}
                    </div>
                      {!hideDeleteBtn && (
                        <button className=" text-red-600 opacity-0 group-hover:opacity-100 transition-all" ><LuTrash2 size={18}/></button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TransactionInfoCard;
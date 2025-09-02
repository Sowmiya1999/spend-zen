import { IndianRupee } from "lucide-react";

const InfoCard = ({icon, label, value, color}) =>{
    return <div className="flex  gap-6 bg-white p-6 rounded-2xl shadow-md shadow-gray-100 border border-gray-300 justify-center">
        <div className={`w-14 h-14 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}>
            {icon}
        </div>
        <div className="">
            <h6 className="text-sm text-gray-500 mb-1">
                {label}
            </h6>
            <span className="text-[22px]">
                <IndianRupee   className="inline"/>{value} 
                </span>
        </div>
    </div>
}

// icons tends to be block by nature so it takes up entire width and forces others to new line


export default InfoCard;
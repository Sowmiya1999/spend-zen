import { IndianRupee } from "lucide-react";

const CustomToolTip = ({active, payload}) =>{
  if(active && payload && payload.length){
    return (
        <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
            <p className="text-xs font-semibold text-gray-800">{payload[0].name}</p>
            <p className="text-sm text-gray-600">
                Amount: <span className="text-sm font-medium text-gray-900"><IndianRupee size={14} className="inline"/>{payload[0].value}</span></p>
        </div>
    )
  }
  return null;
}

export default CustomToolTip;
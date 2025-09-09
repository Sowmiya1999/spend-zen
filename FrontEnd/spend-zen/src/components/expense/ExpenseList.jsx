import { LuDownload } from "react-icons/lu";

const ExpenseList = () =>{
    return (
        <div className="card">
            <div className="flex justify-between">
                <h5 className="card-title">Expenses</h5>
                <button className="card-btn"><LuDownload className="text-lg"/></button>
            </div>
           
        </div>
    )
}

export default ExpenseList;
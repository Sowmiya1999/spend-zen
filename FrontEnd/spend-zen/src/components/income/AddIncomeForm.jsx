import { useState } from "react";

const AddIncomeForm = ({onAddIncome}) =>{
    const [income, setIncome] = useState({
        source:"",
        icon:"",
        date: "",
        amount:""
    });
    const handleChange = (key,value) => setIncome({...income, [key]:value})
    return (
        <div className=""></div>
    )
}

export default AddIncomeForm;
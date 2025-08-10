import mongoose from "mongoose";
import { statusEnum } from "../common/enums.js";
const IncomeSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.ObjectId, required:true, ref: "User"}, // ref helps with querying it together with User when using populate
    icon: {type: String},
    source: {type: String, required:true},
    amount: {type: Number, required:true},
    status: {type: String,enum:statusEnum, default: statusEnum.ACTIVE},
    date: {type: Date, default: Date.now} // we pass date.now refernce here since we wanna call the function only when the doc is created. if now() is used all will have same timestamp

},
{
    timestamps:true
});

const Income = mongoose.model("Income", IncomeSchema, "incomes");

export default Income;

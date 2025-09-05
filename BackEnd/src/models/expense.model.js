import mongoose from "mongoose";
import { moneyTypeEnum, statusEnum } from "../common/enums.js";

const ExpenseSchema = new mongoose.Schema({
    userId: {type:mongoose.Schema.ObjectId, required:true, ref: "User"},
    status: {type: String, enum:statusEnum, default: statusEnum.ACTIVE},
    category: {type:String, required:true},
    icon: {type:String},
    amount: {type: Number, required:true},
    description: {type: String},
    moneyType: {type: String, required:true, enum: moneyTypeEnum}, // cash,bank
    date: {type:Date, default: Date.now},
},
{
    timestamps:true
})

const Expense = mongoose.model("Expense", ExpenseSchema, "expenses");

export default Expense;
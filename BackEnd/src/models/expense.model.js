import mongoose from "mongoose";
import { cashCategoryEnum, statusEnum } from "../common/enums.js";

const ExpenseSchema = new mongoose.Schema({
    userId: {type:mongoose.Schema.ObjectId, required:true, ref: "User"},
    status: {type: String, enum:statusEnum, default: statusEnum.ACTIVE},
    category: {type:String, required:true},
    icon: {type:String},
    amount: {type: Number, required:true},
    note: {type: String},
    cashCategory: {type: String, required:true, enum: cashCategoryEnum}, // cash,bank
    date: {type:Date, default: Date.now},
},
{
    timestamps:true
})

const Expense = mongoose.model("Expense", ExpenseSchema, "expenses");

export default Expense;
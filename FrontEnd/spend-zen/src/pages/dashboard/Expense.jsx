import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import UseUserAuth from '../../components/hooks/UseUserAuth'
import axiosInstance from '../../utils/axios';
import { API_PATHS } from '../../utils/apiPaths';
import toast from 'react-hot-toast';
import ExpenseOverview from '../../components/expense/ExpenseOverview';

const Expense = () => {
  UseUserAuth();

  const [expenseData, setExpenseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    show: false,
    data: null
  })
  const [openAddExpenseModel, setOpenAddExpenseModel] = useState(false);

  // componenet functions
  const fetchExpenseDetails = async () =>{
    try{
        console.log(`fetchExpenseDetails is called`);
        if(loading) return;

        setLoading(true);

        const response = await axiosInstance.get(API_PATHS.EXPENSE.GET_ALL_EXPENSE);

        if(response && response?.data && response?.data?.data){
          setExpenseData(response.data.data);
        }
    }
    catch(err){
      console.error(`fetchExpenseDetails produced error: ${err}`);

    }
    finally{
      setLoading(false);
    }
  }

  const handleAddExpense = async (expense) =>{
    try{
        console.log(`handleAddExpense is called`);

        if(loading) 
            return;
        setLoading(true);

        const response = await axiosInstance.post(API_PATHS.EXPENSE.ADD_EXPENSE, {expense});

        if(response && response?.data && response?.data?.data){
          fetchExpenseDetails();
        }
    }
    catch(err){
      console.error(`handleAddExpense produced error: ${err}`);
      toast.error("Adding Expense Failed");
    }
    finally{
      setLoading(false);
        setOpenAddExpenseModel(false);
          toast.success("Expense Added Successfully");
    }
  }

  useEffect(()=>{
    fetchExpenseDetails();
    return(()=>{});
  },[])

  return (
   <DashboardLayout activeMenu={"Expense"}>
    <div className="my-5 mx-auto">
      <div className="grid grid-cols-1 gap-6">
        <div className="">
            <ExpenseOverview
            transactions={expenseData}
            onExpenseIncome={() => setOpenAddExpenseModel(true)}
            />
        </div>
      </div>
    </div>
    </DashboardLayout>
  )
}

export default Expense
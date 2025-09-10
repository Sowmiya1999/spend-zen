import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import UseUserAuth from "../../components/hooks/UseUserAuth";
import axiosInstance from "../../utils/axios";
import { API_PATHS } from "../../utils/apiPaths";
import toast from "react-hot-toast";
import ExpenseOverview from "../../components/expense/ExpenseOverview";
import Model from "../../components/layouts/Model";
import AddExpenseForm from "../../components/expense/AddExpenseForm";
import ExpenseList from "../../components/expense/ExpenseList"
import DeleteAlert from "../../components/inputs/DeleteAlert";

const Expense = () => {
  UseUserAuth();

  const [expenseData, setExpenseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    show: false,
    data: null,
  });
  const [openAddExpenseModel, setOpenAddExpenseModel] = useState(false);

  // componenet functions
  const fetchExpenseDetails = async () => {
    try {
      console.log(`fetchExpenseDetails is called`);
      if (loading) return;

      setLoading(true);

      const response = await axiosInstance.get(
        API_PATHS.EXPENSE.GET_ALL_EXPENSE
      );

      if (response && response?.data && response?.data?.data) {
        setExpenseData(response.data.data);
      }
    } catch (err) {
      console.error(`fetchExpenseDetails produced error: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  const handleAddExpense = async (expense) => {
    try {
      console.log(`handleAddExpense is called`);

      if (loading) return;
      setLoading(true);

      const response = await axiosInstance.post(API_PATHS.EXPENSE.ADD_EXPENSE, 
        expense);

      if (response && response?.data && response?.data?.data) {
        fetchExpenseDetails();
        toast.success("Expense Added Successfully");
      }
    } catch (err) {
      console.error(`handleAddExpense produced error: ${err}`);
      toast.error("Adding Expense Failed");
    } finally {
      setLoading(false);
      setOpenAddExpenseModel(false);

    }
  };

  const deleteExpense = async (id) =>{
    try{
      if(loading) return;

      setLoading(true);

      const response = await axiosInstance.delete(API_PATHS.EXPENSE.DELETE_EXPENSE(id));

      if(response){
        toast.success("Expense deleted successfully");
        fetchExpenseDetails();
      }
      
    }
    catch(err){
      console.error(`Error deleting the expense record`);
       toast.success("Expense deletion failed");
    }
    finally{
      setLoading(false);
      setOpenDeleteAlert({show:false, data:null});
    }
  }

  useEffect(() => {
    fetchExpenseDetails();
    return () => {};
  }, []);

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
        <Model
          isOpen={openAddExpenseModel}
          onClose={() => setOpenAddExpenseModel(false)}
          title="Add Expense"
        >
          <div className="">
            <AddExpenseForm
            onAddExpense={(expense) => handleAddExpense(expense)}
            />
          </div>
        </Model>
        
           <ExpenseList
       transactions={expenseData}
       onDelete={(id) => setOpenDeleteAlert({show:true, data:id})}
       />

       <Model
       isOpen={openDeleteAlert.show}
       onClose={() => setOpenDeleteAlert({ show: false, data: null })}
       title={"Delete Expense"}
       >
         <DeleteAlert
            content="Are you sure you want to delete the income transaction data?"
            onDelete={() => deleteExpense(openDeleteAlert.data)}
            onClose={() => setOpenDeleteAlert({ show: false, data: null })}
          />
       </Model>
      
      
      </div>
    </DashboardLayout>
  );
};

export default Expense;

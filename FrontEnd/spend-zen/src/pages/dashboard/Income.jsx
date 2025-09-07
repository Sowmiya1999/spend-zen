import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import IncomeOverView from '../../components/income/IncomeOverview'
import axiosInstance from '../../utils/axios';
import { API_PATHS } from '../../utils/apiPaths';
import Model from '../../components/layouts/Model';
import AddIncomeForm from '../../components/income/AddIncomeForm';
import {toast} from 'react-hot-toast'
import IncomeList from '../../components/income/IncomeList';
import DeleteAlert from '../../components/inputs/DeleteAlert';

const Income = () => {

  const [incomeData, setIncomeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openAddIncomeModal, setOpenAddIncomeModel] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    show:false,
    data: null
  });

  const fetchIncomeDetails = async () =>{
    if(loading) return;
    setLoading(true);

    try{
      const response = await axiosInstance.get(`${API_PATHS.INCOME.GET_ALL_INCOME}`);

      if(response && response.data){
        setIncomeData(response.data.data || []);
      }
    }
    catch(error){
      console.error("something went wrong. Please try again.", error);
    }
    finally{
      setLoading(false);
    }

  }

  const handleAddIncome = async (income) => {
    try{
      if(loading) return;

      setLoading(true);

      const response = await axiosInstance.post(API_PATHS.INCOME.ADD_INCOME, income);

      if(response && response.data && response.data.data){
         fetchIncomeDetails()
      }
      else{
        throw new Error("Add Income Failed. Try again later")
      }
       
       
     
    }
    catch(error){
      console.log(`handleIncome produced error: ${error}`)
      toast.error("Add Income Failed. Try again later")
    }
    finally{
      setLoading(false);
      setOpenAddIncomeModel(false);
      toast.success("Income Added Successfully")
    }

  }

  const deleteIncome = async (id) => {
    try{
        const response = await axiosInstance.delete(API_PATHS.INCOME.DELETE_INCOME(id));

        if(response && response?.data  && response?.data?.success){
          fetchIncomeDetails();
        }
    }
    catch(error){
      console.error("The Income Deletion failed");
       toast.error("The Income data deletion failed")
    }
    finally{
      setLoading(false);
      setOpenDeleteAlert({show:false, data:null});
      
          toast.success("The Income data deleted successfully");
    }
  }

  const handleDownloadIncomeDetails = async () => {

  }

  useEffect(()=>{
    fetchIncomeDetails();
    return () => {

    }
  },[])


  return (
   <DashboardLayout activeMenu={"Income"}>
    <div className='my-5 mx-auto'>
      <div className='grid grid-cols-1 gap-6'>
        <div className=''>
          <IncomeOverView
          transactions={incomeData}
          onAddIncome={()=> setOpenAddIncomeModel(true)}
          />
        </div>

      </div>

      <IncomeList
      transactions={incomeData}
      onDelete= {(id) => {
        setOpenDeleteAlert({show:true, data:id});
      }}
      onDownload={handleDownloadIncomeDetails}
      >

        </IncomeList>

      <Model
      isOpen={openAddIncomeModal}
      onClose={()=> setOpenAddIncomeModel(false)}
        title="Add Income"
      
      >
        <AddIncomeForm
        onAddIncome={handleAddIncome}
        />
      </Model>

      <Model
      isOpen={openDeleteAlert.show}
      onClose={() => setOpenDeleteAlert({show:false, data:null})}
      title="Delete Income"
      >
          <DeleteAlert
          content="Are you sure you want to delete the income transaction data?"
          onDelete={() => deleteIncome(openDeleteAlert.data)}
           onClose={() => setOpenDeleteAlert({show:false, data:null})}
          />

      </Model>
    </div>
    
   </DashboardLayout>
  )
}

export default Income
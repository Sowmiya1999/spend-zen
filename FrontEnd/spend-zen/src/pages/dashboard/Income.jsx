import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import IncomeOverView from '../../components/income/IncomeOverview'
import axiosInstance from '../../utils/axios';
import { API_PATHS } from '../../utils/apiPaths';
import Model from '../../components/layouts/Model';
import AddIncomeForm from '../../components/income/AddIncomeForm';

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

      console.log(JSON.stringify(response));
    }
    catch(error){
      console.log(`handleIncome produced error: ${error}`)
    }
    finally{
      setLoading(false);
    }

  }

  const deleteIncome = async (id) => {

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

      <Model
      isOpen={openAddIncomeModal}
      onClose={()=> setOpenAddIncomeModel(false)}
        title="Add Income"
      
      >
        <AddIncomeForm
        onAddIncome={handleAddIncome}
        />
      </Model>
    </div>
    
   </DashboardLayout>
  )
}

export default Income
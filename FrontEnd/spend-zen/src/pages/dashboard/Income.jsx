import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import IncomeOverView from '../../components/income/IncomeOverview'
import axiosInstance from '../../utils/axios';
import { API_PATHS } from '../../utils/apiPaths';

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
        setIncomeData(response.data || []);
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
    </div>
    
   </DashboardLayout>
  )
}

export default Income
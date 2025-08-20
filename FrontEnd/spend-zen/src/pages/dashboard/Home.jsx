import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/userContext'
import DashboardLayout from '../../components/layouts/DashboardLayout';
import UseUserAuth from '../../components/hooks/UseUserAuth';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axios';
import { API_PATHS } from '../../utils/apiPaths';

const Home = () => {
   UseUserAuth();
  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDashboardData = async () =>{
      if(loading) return;

      setLoading(true);

      try{
          const response = await axiosInstance.get(API_PATHS.DASHBOARD.GET_DATA);
          if( response?.data){
            setDashboardData(response?.data?.data);
                    }
      }
      catch(err){
        console.error(`Dashboard data fetch failed`);

      }
      finally{
        setLoading(false);
      }
  }

  useEffect(()=>{
    fetchDashboardData();
    return () => {};
  },[]);
  return (
    <DashboardLayout activeMenu="Dashboard">
       <div className='flex flex-col items-center  justify-center bg-blue-600 text-black'>

        {console.log("d",dashboardData.totalBalance)}
        totalBalance: {dashboardData.totalBalance}
        <div>
           totalExpense: {dashboardData.totalExpense}
        </div>
         <div>
           totalIncome: {dashboardData.totalIncome}
        </div>
        
     </div>
    </DashboardLayout>
   
  )
}

export default Home
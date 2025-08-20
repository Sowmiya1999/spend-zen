import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/userContext'
import DashboardLayout from '../../components/layouts/DashboardLayout';
import UseUserAuth from '../../components/hooks/UseUserAuth';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axios';
import { API_PATHS } from '../../utils/apiPaths';
import InfoCard from '../../components/cards/InfoCard';
import {
    LuHandCoins,
    LuWalletMinimal
} from "react-icons/lu";

import {IoMdCard} from "react-icons/io";
import { addThousandsSeperator } from '../../utils/helper';

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
      <div className='my-5 mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <InfoCard
              icon={<IoMdCard/>}
              label="Total Balance"
              value={addThousandsSeperator(dashboardData?.totalBalance || 0)}
              color="bg-primary"
              />

          </div>

      </div>
       {/* <div className='flex flex-col items-center justify-center bg-blue-600 text-black'>

        {console.log("d",dashboardData.totalBalance)}
        totalBalance: {dashboardData.totalBalance}
        <div>
           totalExpense: {dashboardData.totalExpense}
        </div>
         <div>
           totalIncome: {dashboardData.totalIncome}
        </div>
        
     </div> */}
    </DashboardLayout>
   
  )
}

export default Home
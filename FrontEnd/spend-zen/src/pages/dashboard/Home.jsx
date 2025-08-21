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
import { ROUTE_PATH } from '../../utils/data';
import RecentTransactions from '../../components/dashboard/RecentTransactions';
import FinancialOverView from '../../components/dashboard/FinancialOverview';

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
      <div className=''>
         
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
            <RecentTransactions
            transactions={dashboardData?.recentTransactions}
            onSeeMore={()=>navigate(ROUTE_PATH.EXPENSE)}
            />

                  <FinancialOverView
          totalBalance={ dashboardData?.totalBalance}
          totalIncome={dashboardData?.totalIncome}
          totalExpense={dashboardData?.totalExpense}
          />
          </div>

    

      </div>
    
    </DashboardLayout>
   
  )
}

export default Home
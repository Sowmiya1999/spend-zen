import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import UseUserAuth from "../../components/hooks/UseUserAuth";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axios";
import { API_PATHS } from "../../utils/apiPaths";
import InfoCard from "../../components/cards/InfoCard";
import { LuHandCoins, LuWalletMinimal } from "react-icons/lu";

import { IoMdCard } from "react-icons/io";
import { addThousandsSeperator } from "../../utils/helper";
import { ROUTE_PATH } from "../../utils/data";
import RecentTransactions from "../../components/dashboard/RecentTransactions";
import FinancialOverView from "../../components/dashboard/FinancialOverview";
import ExpenseTransactions from "../../components/dashboard/ExpenseTransactions";
import Last30DaysExpenses from "../../components/dashboard/Last30DaysExpenses";
import RecentIncomeWithChart from "../../components/charts/RecentIncomeWithChart";

const Home = () => {
  UseUserAuth();
  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDashboardData = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const response = await axiosInstance.get(API_PATHS.DASHBOARD.GET_DATA);
      if (response?.data) {
        setDashboardData(response?.data?.data);
      }
    } catch (err) {
      console.error(`Dashboard data fetch failed`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
    return () => {};
  }, []);
  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <FinancialOverView
            totalBalance={dashboardData?.totalBalance}
            totalIncome={dashboardData?.totalIncome}
            totalExpense={dashboardData?.totalExpense}
        />
          <RecentTransactions
            transactions={dashboardData?.recentTransactions}
            onSeeMore={() => navigate(ROUTE_PATH.EXPENSE)}
          />
          <ExpenseTransactions
          transactions={dashboardData?.last30DaysExpense?.transactions}
          onSeeMore={() => navigate(ROUTE_PATH.EXPENSE)}
          />
          <Last30DaysExpenses
          data={dashboardData?.last30DaysExpense?.transactions}
          />
          <RecentIncomeWithChart
          data={dashboardData?.Last60DaysIncome?.transactions?.slice(0,5) || []}
          totalIncome={dashboardData?.Last60DaysIncome?.totalIncome || 0}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Home;

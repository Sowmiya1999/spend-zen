import React from 'react'
import {FaUser} from 'react-icons/fa'
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import SignUp from './pages/Auth/SignUp';
import Income from './pages/dashboard/Income';
import Expense from './pages/dashboard/Expense';
import Home from './pages/dashboard/Home';
import TermsAndConditions from './components/inputs/TermsAndConditions';
import UserProvider from './context/userContext';
import Login from './pages/auth/Login';
import { ROUTE_PATH } from './utils/data';

const App = () => {
  return (
      
    <div >
    <Router>
      <UserProvider> 
      <Routes>
        <Route path='/' element={<Root/>}/>
        <Route path={ROUTE_PATH.LOGIN} element={<Login/>}/>
        <Route path={ROUTE_PATH.SIGNUP} element={<SignUp/>}/>
        <Route path={ROUTE_PATH.DASHBOARD} element={<Home/>}/>
        <Route path={ROUTE_PATH.INCOME} element={<Income/>}/>
        <Route path={ROUTE_PATH.EXPENSE} element={<Expense/>}/>
        <Route path={ROUTE_PATH.TERMSANDCONDITION} element={<TermsAndConditions/>}/>
      </Routes>
</UserProvider>
    </Router>
    </div>
  )
}

export default App

const Root = () =>{
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated
  ? (<Navigate to="/dashboard"/>)
  : (<Navigate to="/login"/>)
}
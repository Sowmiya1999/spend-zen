import React from 'react'
import {FaUser} from 'react-icons/fa'
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Income from './pages/dashboard/Income';
import Expense from './pages/dashboard/Expense';
import Home from './pages/dashboard/Home';
import TermsAndConditions from './components/inputs/TermsAndConditions';
import UserProvider from './context/userContext';

const App = () => {
  return (
      <UserProvider>
    <div >
    <Router>
      <Routes>
        <Route path='/' element={<Root/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/dashboard' element={<Home/>}/>
        <Route path='/income' element={<Income/>}/>
        <Route path='/expense' element={<Expense/>}/>
        <Route path='/termsAndConditions' element={<TermsAndConditions/>}/>
      </Routes>

    </Router>
    </div>
    </UserProvider>
  )
}

export default App

const Root = () =>{
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated
  ? (<Navigate to="/dashboard"/>)
  : (<Navigate to="/login"/>)
}
import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import DashboardLayout from '../../components/layouts/DashboardLayout';

const Home = () => {
   const {clearUserData } = useContext(UserContext);

  return (
    <DashboardLayout activeMenu="Dashboard">
       <div className='my-5 mx-auto'>
      Home
     </div>
  
     {/* <div className='justify-end flex'>
      <button onClick={clearUserData} className='border rounded-sm px-1 bg-primary text-white'>Logout</button>
      
      </div>
       </div> */}
    </DashboardLayout>
   
  )
}

export default Home
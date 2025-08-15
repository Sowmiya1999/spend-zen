import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext'

const Home = () => {
   const {clearUserData } = useContext(UserContext);

  return (
    <div className=''>
      Home
     
  
     <div className='justify-end flex'>
      <button onClick={clearUserData} className='border rounded-sm px-1 bg-primary text-white'>Logout</button>
      
      </div>
       </div>
  )
}

export default Home
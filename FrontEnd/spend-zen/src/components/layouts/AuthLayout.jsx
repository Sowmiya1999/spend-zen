import React from 'react'
import card3 from '../../assets/images/card3.png'
import logoWithText from '../../assets/images/logoWithText.png'
import { LucideTrendingUpDown } from 'lucide-react'

const AuthLayout = ({children}) => {
  return <div className='flex h-screen'>
    <div className=' w-screen h-screen md:w-[60vw] px-12 pt-8'>

        <img src={logoWithText} className='w-40 h-40'></img>
        {children}
    </div>

    <div className=' flex absolute sm:block w-[40%] lg:w-[30%] xl:w-[45%]  h-screen bg-blue-100 bg-auth-bg-img bg-cover bg-center bg-no-repeat overflow-hidden right-0'>
        <div className='w-[50%] max-w-68 aspect-square rounded-[40px] bg-blue-500  absolute'/>
        <div className='w-[50%] max-w-68 aspect-square rounded-[40px] border-[20px] border-blue-950 absolute top-[30%] right-0'/>
        <div className='w-[50%] max-w-68 aspect-square  rounded-[40px] bg-blue-500 absolute -bottom-20 '/>
        <div className='grid grid-cols-1 z-20 p-5'>
            <StatsInfoCard
            icon={<LucideTrendingUpDown size={55} className='bg-primary rounded-4xl p-3'/>}
            label="Track your Income & Expenses"
            value="430,000"
            color="bg-primary"
            />
        </div>
        
        <img src={card3}
       className='w-[90%] bottom-0 ml-[5%] lg:w-[95%] xl:w-[65%] absolute  shadow-lg shadow-blue-400/15'/>


    </div>
  </div>
}

export default AuthLayout

const StatsInfoCard = ({icon, value, color, label}) =>{
    return <div className='flex gap-6 bg-white p-4 rounded-2xl shadow-md shadow-blue-400 border border-gray-200/50 z-10 mt-5 '>
        <div className='w-15 h-15 flex items-center justify-center text-[26px] text-white drop-shadow-xl'>
        {icon}
        </div>
    <div>
        <h6 className=''>{label}</h6>
        <span className=''>{value}</span>
    </div>
    </div>
}
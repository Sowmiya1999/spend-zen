import { Asterisk, IndianRupee } from 'lucide-react';
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Input = ({value,label,type,placeholder,onChange, mandatoryField}) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () =>{
        setShowPassword(!showPassword);
    }
  return (
    <div className='w-full'>
        <label className='text-sm text-slate-800'>{label} {mandatoryField &&(<Asterisk size={11} className='inline-block text-red-600 align-text-top ml-0.5'/>) }</label>
        <div className='input-box'>
           {
              label === 'Amount' && (
                <IndianRupee size={13} className='flex mt-1'/>
              ) 
            }
            <input 
            type={type == 'password' ? showPassword ? 'text' : 'password' : type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e)}
            className='w-full bg-transparent outline-none'
            />
           
            {type === 'password' &&(
            <>
            {showPassword 
            ? (<FaEye size={22} className='cursor-pointer text-primary' onClick={toggleShowPassword}/> )
            : (<FaEyeSlash size={22} className='cursor-pointer text-primary' onClick={toggleShowPassword}/>)
}
            </>
            )}
        </div>
       
    </div>
  )
}

export default Input
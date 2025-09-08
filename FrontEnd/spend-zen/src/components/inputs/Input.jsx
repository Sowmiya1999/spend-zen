import { Asterisk, IndianRupee } from 'lucide-react';
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Input = ({value,label,type,placeholder,onChange, mandatoryField,length, error}) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () =>{
        setShowPassword(!showPassword);
    }

    const today = new Date().toISOString().split("T")[0];
    
  return (
    <div className='w-full'>
        <label className='text-sm text-slate-800'>{label} {mandatoryField &&(<Asterisk size={11} className='inline-block text-red-600 align-text-top ml-0.5'/>) }</label>
        <div className={`input-box  ${error ? "!border-red-500" : "!border-slate-300"}`}>
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
            className={`w-full bg-transparent outline-none `}
            max={today}
            maxLength={length}
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
         {error && <p className='text-xs text-red-500 mt-0.5'>{error}</p>}
       
    </div>
  )
}

export default Input
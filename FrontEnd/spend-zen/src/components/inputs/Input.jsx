import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Input = ({value,label,type,placeholder,onChange}) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () =>{
        setShowPassword(!showPassword);
    }
  return (
    <div className='w-full'>
        <label className='text-sm text-slate-800'>{label}</label>
        <div className='input-box'>
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
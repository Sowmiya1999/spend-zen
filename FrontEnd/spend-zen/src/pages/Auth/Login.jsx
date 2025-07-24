import React, { useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/inputs/Input';
import { validateEmail } from '../../utils/helper';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin =  (e) =>{
        e.preventDefault();

        if(!validateEmail(email)){
            setError("Please Enter a valid Email Address");
            return;
        }

        if(!password || password.length<8){
            setError("Please provide valid password");
            return;
        }
        setError("");

        
    }


  return (
    <AuthLayout>
        <div className='w-[45%] lg:w-[40%] sm:w-[50%]'>
        <h3 className='text-xl font-semibold text-black'>Welcome back</h3>
            <p className='text-xs text-slate-700 mt-[5px] mb-6'>
                please enter your details to log in

            </p>
            <form onSubmit={handleLogin}>
                <Input value={email} label="Email Address" type='email'  placeholder='Enter your email' onChange={({target}) => setEmail(target.value)} />
                <Input value={password} label="Password" type='password' placeholder='Enter your password' onChange={({target}) => setPassword(target.value)}/>
                {error && <p className='text-red-500 text-sm'>{error}</p>}
                <button type='submit' className='btn-primary'>
                    LOGIN
                </button>
                <p className=''>
                    Don't have an account yet? {" "}
                      <Link className='text-primary font-medium cursor-pointer underline' to="/signUp">SignUp</Link>
                </p>
              
            </form>
        </div>
    </AuthLayout>
  )
}

export default Login
// className='border-2 rounded-lg border-black-500 hover:shadow-lg shadow-blue-400/15'
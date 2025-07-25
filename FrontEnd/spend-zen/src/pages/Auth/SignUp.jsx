import React, { useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/inputs/Input";
import ProfilePhotoSelector from "../../components/inputs/ProfilePhotoSelector";
import { validateEmail } from "../../utils/helper";

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [error, setError] = useState("");
  

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
     
            if(!fullName){
              setError("Please enter your fullName");
              return;
            }
            
            if(!validateEmail(email)){
                setError("Please Enter a valid Email Address");
                return;
            }

    
            if(!password || password.length<8){
                setError("Please provide valid password");
                return;
            }

            if(!termsAccepted){
              setError("Please accept the terms and conditions");
              return
            }
          setError(null);
      //  alert("signup")   
  };
  return (
    <AuthLayout>
      <div className="w-[45%] lg:w-[60%] sm:w-[55%]">
        <h3 className="text-xl font-semibold text-black">Welcome</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          please enter your details to Sign Up
        </p>
        <div className="h-[450px] overflow-y-auto pr-2">
        {/* <form onSubmit={handleSignUp} className=" w-full"> */}
         <form onSubmit={handleSignUp} className="">
          <ProfilePhotoSelector image={profilePic} setProfilePic={setProfilePic} className=''/>
          <div className="grid grid-cols-1 gap-4">
          
            <Input
              value={fullName}
              label="Full Name"
              type="text"
              placeholder="Enter your fullName"
              onChange={({ target }) => setFullName(target.value)}
            />
            <Input
              value={email}
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              onChange={({ target }) => setEmail(target.value)}
            />

            {/* <div className="col-span-2"> */}
           <Input
              value={password}
              label="Password"
              type="password"
              placeholder="Enter your password"
              onChange={({ target }) => setPassword(target.value)}
            />
          <div>
              <input
           value={termsAccepted}
           onChange={() => setTermsAccepted(!termsAccepted)}
           type="checkbox"
           className=""
           />
          <span className="ml-2">I have read and accepted the </span>
          <br/>
            <Link to="/termsAndConditions" target="_blank" className="ml-5 text-primary underline">Terms & Conditions</Link>
          </div>
         
            {/* </div> */}
            </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
            <button type="submit" className="btn-primary">
              SIGNUP
            </button>
            </form>
           
            <p className="">
              Have an account already?{" "}
              <Link
                className="text-primary font-medium cursor-pointer underline"
                to="/login"
              >
                Login
              </Link>
            </p>
       
        {/* </form> */}
        </div>
      </div>
    
    </AuthLayout>
  );
};

export default SignUp;

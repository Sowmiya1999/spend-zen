import React from "react";
import AuthLayout from "../../components/layouts/AuthLayout";

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();
  return (
    <AuthLayout>
      <div className="w-[45%] lg:w-[40%] sm:w-[50%]">
        <h3 className="text-xl font-semibold text-black">Welcome</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          please enter your details to Sign Up
        </p>
      </div>
    </AuthLayout>
  );
};

export default SignUp;

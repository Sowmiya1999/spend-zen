import React, {createContext, useState} from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserProvider = ({ children }) =>{
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const updateUser = (userData) =>{
        setUser(userData);
    }

    const clearUserData = () =>{
        setUser(null);
        navigate("/login");
    }

    return (
        <UserContext.Provider value={{user, updateUser, clearUserData}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;


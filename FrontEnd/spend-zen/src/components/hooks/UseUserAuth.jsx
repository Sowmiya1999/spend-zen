import { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axios"
import { API_PATHS } from "../../utils/apiPaths";
import { ROUTE_PATH } from "../../utils/data";

const UseUserAuth = () =>{
    const {user, updateUser, clearUserData} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(()=>{
        if(user) return;

        let isMounted = true;

        const fetchUserInfo = async() =>{
            try{
                const response = await axiosInstance.get(API_PATHS.AUTH.GET_USER_INFO );

                if(isMounted && response.data){
                    
                    updateUser(response.data.user);
                }
            }
            catch(err){
                console.error(`User Data Fetch Failed`);
                if(isMounted){
                    clearUserData();
                    navigate(ROUTE_PATH.LOGIN);
                }

            }
        }
        fetchUserInfo();

        return () => {
            isMounted = false;
        };
    },[updateUser, clearUserData, navigate]); // when these functions called the code inside will be excuted

}

export default UseUserAuth;
import { HiOutlineX } from "react-icons/hi";
import { LOGOUT_DATA, ROUTE_PATH, SIDE_MENU_DATA } from "../../utils/data";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
const SideMenu = ({activeMenu, setOpenSideMenu, openSideMenu}) =>{
    const {user, clearUser} = useContext(UserContext);
    
    const navigate = useNavigate();

    const handleClick = (route) =>{
        if(route === ROUTE_PATH.LOGOUT){
            handleLogOut();
            return;
        }
        navigate(route);
    }

    const handleLogOut = () =>{
        localStorage.clear();
        clearUser();
        navigate(ROUTE_PATH.LOGIN);
    };
    return (
        <div className="border-0 shadow-md py-3 h-screen">
            <div className="text-primary justify-end flex">
                 <HiOutlineX  className="text-2xl left-10" onClick={()=> setOpenSideMenu(!openSideMenu)}/>
            </div>
            
                <ul className="menuOption list-none">
                    {SIDE_MENU_DATA.map((item)=>(
                        <li>{item.label}</li>
                    ))}
                   
                  
                </ul>
                <div className="bg-amber-200 flex  justify-center align-bottom">
                    <ul>
                    <li className="list-none text-xl">{LOGOUT_DATA.label}</li>
                    </ul>
                     
                </div>
                
               
            
            
            </div>
    )
}

export default SideMenu;
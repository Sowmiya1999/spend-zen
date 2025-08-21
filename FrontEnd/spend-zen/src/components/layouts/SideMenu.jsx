import { HiOutlineX } from "react-icons/hi";
import { LOGOUT_DATA, ROUTE_PATH, SIDE_MENU_DATA } from "../../utils/data";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import CharAvatar from "../cards/CharAvatar";

const SideMenu = ({ activeMenu, setOpenSideMenu, openSideMenu }) => {
  const { user, clearUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleClick = (route) => {
    if (route === ROUTE_PATH.LOGOUT) {
      handleLogOut();
      return;
    }
    navigate(route);
  };

  const handleLogOut = () => {
    localStorage.clear();
    clearUser();
    navigate(ROUTE_PATH.LOGIN);
  };

  return (
    <div className="shadow-lg min-h-screen px-3 mt-4">
          <div className="text-primary justify-end flex">
              <HiOutlineX  className="text-2xl left-10" onClick={()=> setOpenSideMenu(!openSideMenu)}/>
       </div>
      <div className="flex  justify-center ">
        {user?.profileImageUrl ? (
          <img
            src={user.profileImageUrl || ""}
            alt="Profile Image"
            className="rounded-full w-24 h-24 object-center"
          />
        ) : (
          <CharAvatar
          fullName={user?.fullName}
          width="w-20"
          height="h-20"
          style="text-xl"/>
        )}
       
      </div>
        <div className="flex flex-col justify-center items-center py-5">
         <h5 className="font-bold ">{user?.fullName || ""}</h5>
     
        </div>
        
        {SIDE_MENU_DATA.map((item,index)=>
        {
            const Icon = item.icon;
            return(
               
                   
            <button onClick={() => handleClick(item.path)} className={`w-full h-10 py-1 flex gap-10 text-[18px] cursor-pointer rounded-lg  ${activeMenu == item.label ? "text-white bg-primary" : "text-black bg-white hover:text-primary"} `} key={`menu_${index}` }>
                 <Icon size={25} className="mx-5"/>  
                {item.label} 
                </button>
                
            
        )})}

     

    </div>
  );
};

export default SideMenu;

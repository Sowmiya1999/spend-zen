import { HiOutlineX } from "react-icons/hi";
import { LOGOUT_DATA, ROUTE_PATH, SIDE_MENU_DATA } from "../../utils/data";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
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
    <div className="lg:hidden shadow-lg ">
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
          <></>
        )}
       
      </div>
        <div className="flex flex-col justify-center items-center py-5">
         <h5 className="font-bold ">{user?.fullName || ""}</h5>
         <h5 className="font-bold">{user?.email || ""}</h5>
     
        </div>
        
        {SIDE_MENU_DATA.map((item,index)=>
        {
            const Icon = item.icon;
            return(
                <div className=" ">
                   
            <button onClick={() => handleClick(item.path)} className={`w-full h-10 py-1 flex gap-10 text-[18px] cursor-pointer rounded-lg  ${activeMenu == item.label ? "text-white bg-primary" : "text-black bg-white"} `} key={`menu_${index}` }>
                 <Icon size={25} className=" "/>  
                {item.label} 
                </button>
                </div>
            
        )})}

     

    </div>
  );
  // return (
  //     <div className="border-0 shadow-md py-3 h-screen">
  //         <div className="text-primary justify-end flex">
  //              <HiOutlineX  className="text-2xl left-10" onClick={()=> setOpenSideMenu(!openSideMenu)}/>
  //         </div>

  //             <ul className="menuOption list-none">
  //                 {SIDE_MENU_DATA.map((item)=>(
  //                     <li>{item.icon}
  //                     </li>
  //                 ))}

  //             </ul>
  //             {/* <div className="flex  justify-center align-bottom">
  //                 <ul>
  //                 <li className="list-none text-xl">{LOGOUT_DATA.label}</li>
  //                 </ul>

  //             </div>
  //              */}

  //         </div>
  // )
};

export default SideMenu;

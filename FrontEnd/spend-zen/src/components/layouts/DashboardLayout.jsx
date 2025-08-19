import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";

const DashboardLayout = ({children, activeMenu}) =>{
    const {user} = useContext(UserContext);
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar activeMenu={activeMenu}/>
            <div className="bg-amber-300 flex flex-1">
               
              {user && (
              
                    <div className="max-[1080px]:hidden w-64">
                        <SideMenu activeMenu={activeMenu}/>
                    </div>

                   
                
            )}
              <div className="flex-1 p-4">hello</div>
           
            </div>
             <div className="grow mx-5 flex">{children}</div>
          
        </div>
    )
}

export default DashboardLayout;
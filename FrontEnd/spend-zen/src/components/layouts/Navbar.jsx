import { useContext, useState } from "react";
import { HiOutlineMenu} from "react-icons/hi";
import SideMenu from "./SideMenu";
import logoWithText from "../../assets/images/logoWithText.png"
import { UserContext } from "../../context/userContext";

const Navbar = ({activeMenu}) =>{
    const {user} = useContext(UserContext)
    const [openSideMenu, setOpenSideMenu] = useState(false);
    return (

        <div>
        <div className="flex  bg-white-400 shadow-md border-b-1 border-gray-300 gap-5 h-20">
            <button className="block lg:hidden text-black" onClick={() => {setOpenSideMenu(!openSideMenu)}}>
            {
                !openSideMenu &&
               (<HiOutlineMenu size={25} className=""/>)
            }
            </button>
           
            <div className="flex flex-col justify-center">
                  <img  src={logoWithText} className="w-40 h-30 "/>
            </div>
           
            
                </div>
                <div className="">
                     {
                openSideMenu && (
                    <div className=" lg:hidden  bg-white fixed left-0 w-64 shadow-lg z-50">
                        <SideMenu activeMenu={activeMenu} setOpenSideMenu={setOpenSideMenu} openSideMenu={openSideMenu}></SideMenu>
                        </div>
                )
            }
                </div>
           
    
        </div>
    
    )
}

export default Navbar;
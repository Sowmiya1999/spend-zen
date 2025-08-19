import { useState } from "react";
import { HiOutlineX, HiOutlineMenu} from "react-icons/hi";
import SideMenu from "./SideMenu";
import logoWithText from "../../assets/images/logoWithText.png"

const Navbar = ({activeMenu}) =>{
    const [openSideMenu, setOpenSideMenu] = useState(false);
    return (
        <div>
        <div className="flex bg-white-400 shadow-md border-b-1 border-gray-300 gap-5">
            <button className="block lg:hidden text-black" onClick={() => {setOpenSideMenu(!openSideMenu)}}>
            {
                !openSideMenu &&
               (<HiOutlineMenu className="text-2xl"/>)
            }
            </button>

            <img  src={logoWithText} className="justify-center w-40 h-30"/>
                </div>
                <div className="">
                     {
                openSideMenu && (
                    <div className=" lg:hidden absolute  bg-white w-xs">
                        <SideMenu activeMenu={activeMenu} setOpenSideMenu={setOpenSideMenu} openSideMenu={openSideMenu}></SideMenu>
                        </div>
                )
            }
                </div>
           
    
        </div>
    
    )
}

export default Navbar;
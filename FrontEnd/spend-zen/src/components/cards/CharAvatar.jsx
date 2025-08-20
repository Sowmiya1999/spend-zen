import { useContext, useMemo } from "react";
import { getInitials } from "../../utils/helper";
import { UserContext } from "../../context/userContext";

const CharAvatar = ({fullName, width, height, style}) =>{
    const {updateUser, clearUserData, user} = useContext(UserContext);
    const {intial, color} =useMemo(()=> getInitials(fullName),[updateUser, clearUserData, user]); 
    
    return(
        <div style={{backgroundColor: `${color}` }} className={`${width || 'w-12'}  ${height || 'h-12'} ${style || ''} flex items-center justify-center rounded-full text-grey-900 font-medium` } >
            {intial}
        </div>
    )
}

export default CharAvatar;
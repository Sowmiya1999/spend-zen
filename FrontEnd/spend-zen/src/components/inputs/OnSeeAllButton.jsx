import { LuArrowRight } from "react-icons/lu";

const OnSeeAllButton = ({onSeeMore}) =>{
    return (
        <button className="card-btn" onClick={onSeeMore}>
           See All <LuArrowRight className="text-base"/>
        </button>
    )
}

export default OnSeeAllButton;
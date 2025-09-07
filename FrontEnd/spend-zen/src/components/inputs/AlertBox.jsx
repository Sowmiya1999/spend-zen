const AlertBox = ({message, onClickAction}) =>{
    return (
        <div className="items-center flex justify-center w-fit h-fit py-4">
                <h5 className="text-md font-medium text-slate-700">{message}</h5>
                <button onClick={onClickAction}>Yes</button>
                <button onClick={onClickAction}>No</button>

        </div>
    )
}

export default AlertBox;
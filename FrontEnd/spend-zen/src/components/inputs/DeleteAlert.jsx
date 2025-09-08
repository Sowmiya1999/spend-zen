const DeleteAlert = ({content, onDelete, onClose}) =>{
    return (
        <div className="">
            <p className="flex text-sm font-medium justify-center">
                {content}
            </p>
            <div className="flex justify-center gap-6 mt-5">
                 <button onClick={onDelete} className="text-md font-medium px-3 flex items-center justify-center rounded-md border-blue-600 border-2 hover:bg-primary hover:text-white hover:shadow-2xl hover:shadow-blue-500  transition duration-200">
                    Yes
                </button>
                 <button onClick={onClose} className="text-md font-medium px-3 flex items-center justify-center rounded-md border-blue-600 border-2 hover:bg-primary hover:text-white hover:shadow-2xl hover:shadow-blue-500  transition duration-200">
                    No
                </button>
            </div>
           
        </div>
    )
}

export default DeleteAlert;
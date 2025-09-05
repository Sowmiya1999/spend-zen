import { X } from "lucide-react";

const Model = ({isOpen, onClose, title, children}) =>{
if(!isOpen) return null;

    return (
        <div className="fixed top-0 left-0 right-0 z-50 justify-center flex items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden bg-black/25 dark:bg-transparent ">
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-sm shadow-lg">
                   
                    <div className="flex justify-between items-center p-4 md:p-5 border-t border-gray-200 rounded-t-md dark:border-gray-600">
                        <h3 className="text-lg font-medium text-primary ">
                            {title}
                        </h3>
                        <button type="button" onClick={onClose} className="inline-flex text-gray-600 bg-transparent hover:bg-gray-200 rounded-lg text-md w-8 h-8 justify-center items-center dark:hover:bg-gray-200 cursor-pointer">
                             <svg
    className="w-3 h-3"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 14"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M1 1L13 13M13 1L1 13"
    />
  </svg>
                        </button>
                    </div>

                    <div className="flex flex-col p-4 md:p-5 space-y-4 ">
                        {children}
                    </div>
                </div>
            </div>
    </div>
    )
}

export default Model;
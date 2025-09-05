import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';
import {LuImage, LuX} from 'react-icons/lu';


const EmojiPickerLayout = ({icon, onChange}) =>{
const [isOpen, setIsOpen] = useState(false);
const [selectedEmoji, setselectedEmoji] = useState("");

const handleEmojiChange = (emoji) =>{
    onChange(emoji)
    setIsOpen(false);
}


    return (
        <div className='flex flex-col md:flex-row items-start gap-5 mb-6'>
            <div className='flex items-center gap-4 cursor-pointer' onClick={() =>setIsOpen(true)}>
                <div className='w-12 h-12 flex items-center justify-center text-2xl bg-blue-50 text-primary rounded-2xl'>
                    {
                        icon ? (
                            <img src={icon} alt="Icon" className='w-12 h-12'/>
                        )
                        :(<LuImage/>)
                    }
                </div>
                <p className=''>{icon ? "change Icon" : "Pick Icon"}</p>
            </div>

            {
                isOpen && (
                    <div className='relative'>
                        <button className='w-5 h-5 items-center justify-center bg-white absolute right-2 top-1 z-10' onClick={() => setIsOpen(false)}>
                            <LuX className='cursor-pointer ml-1.5'/>
                        </button>
                        <EmojiPicker open={isOpen} onEmojiClick={(emoji)=> handleEmojiChange(emoji?.imageUrl || "") }/>
                    </div>
                )
            }
        </div>
    )
}

export default EmojiPickerLayout;
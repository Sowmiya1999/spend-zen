import {  UserRoundPlusIcon } from 'lucide-react';
import React, { useRef, useState } from 'react'
import { LuTrash} from 'react-icons/lu'

const ProfilePhotoSelector = ({image, setProfilePic}) => {
    const inputRef = useRef(null) // used for creating reference of input
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleImageChange = (e) =>{
        const file = e.target.files[0];

        if(file){
        const preview = URL.createObjectURL(file); // this creates a temp
        setPreviewUrl(preview);
        setProfilePic(preview);
        }
        e.target.value='';
      
    }

    const handleRemoveImage = (e) =>{
        setProfilePic(null);
        setPreviewUrl(null);
    }

    const onChooseFile = () =>{
        inputRef.current.click() // used for triggering file picker programmatically
        
    }
  return (
    <div className='flex justify-center mb-6'>
        <input
        type='file'
        accept='image/*'
        ref={inputRef}
        onChange={handleImageChange}
        className='hidden'
        />

        {!image 
        ? (
         <div className='w-20 h-20 flex items-center justify-center bg-blue-100 border-2 border-blue-500 hover:shadow-blue-300 shadow-2xl rounded-full relative '>
         
              <button type='button' className='cursor-pointer' onClick={onChooseFile}>
                <UserRoundPlusIcon size={32} className='text-primary'/>
              </button>
              </div>
        )
        :(
            <div className='relative'>
                <img
                src={previewUrl}
                alt='profile photo'
                className='w-20 h-20 rounded-full object-cover'/>
             <button type='button' className='w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full absolute -bottom-1 -right-1' onClick={handleRemoveImage}>
                <LuTrash/>
              </button>
                
            </div>
        )
    }

    </div>
  )
}

export default ProfilePhotoSelector
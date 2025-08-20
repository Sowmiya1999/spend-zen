import { API_PATHS } from "./apiPaths.js";
import axiosInstance from "./axios.js";

const uploadImage = async(imageFile) =>{
    console.log(`uploadImage is called...`);
    const formData = new FormData(); // browser API for passing the files as json cannot carry file.

    formData.append('image', imageFile);

    try{
        console.log(`uploadImage calling upload API...`);
        const response = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE, 
            formData,
        {headers:{
            'Content-Type': 'multipart/form-data'
        }});
        return response.data;
    }
    catch(err){
        console.log(`uploadImage produced error: ${err}`);
        throw err;
    }
}

export default uploadImage;
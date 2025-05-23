import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'; 


    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET 
    });
    
    // Upload an image


    const uploadOnCloudinary= async (localFilePath)=>{
        try {
            if(!localFilePath) return null;

            //upload file on cloudinary
           const response=  await cloudinary.uploader.upload(localFilePath,{resource_type:"auto"})
            // file has been uploaded successfully

            console.log("file is uploaded successfully on cloudinary ");
            console.log(response.url);
            return response;    
            
        } catch (error) {
            fs.unlinkSync(localFilePath) // will remove the locally saved  temporary file bcs upload failed
            return null;

            
        }


    }

    export {uploadOnCloudinary}




    
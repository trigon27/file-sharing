import File from "../models/file.js";
import dotenv from 'dotenv'
dotenv.config();

export const uploadImage = async (request, response) => {
  const fileObj = {
    path: request.file.path,
    name: request.file.originalname,
  };
  const BASE_url=process.env.BASE_URL;

  try {
    console.log("Attempting to create file:", fileObj);
    const file = await File.create(fileObj);
    console.log("File created successfully:", file);
    response.status(200).json({path:`${BASE_url}/file/${file._id}`} );
  } catch (error) {
    console.error("Error in image_controller:", error.message);
    response.status(500).json({ error: "Internal Server Error" });
  }
}
export const downloadImage =async(request,response)=>{
    try{
    const file=await File.findById(request.params.fileId);
    file.downloadContent++;
    await file.save();
    response.download(file.path,file.name);
    }catch(error){
        console.error('error in downloading content',error.message)
        return response.status(500).json({error:error.message});
    }

}
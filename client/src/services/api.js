import axios from 'axios'
const API_URL='https://shareyourfilesapp.onrender.com'
export const uploadfile=async(data)=>{
    try{
            let response=await axios.post(`${API_URL}/upload`,data);
            return response.data;
    }catch(error){
        console.error(" error while fetching data : ", error.message);
    }
}
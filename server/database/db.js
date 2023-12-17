import mongoose from "mongoose";

const DBconnection=async()=>{
    const MONO_URL=process.env.DATABASE
    try{
       await mongoose.connect(MONO_URL);
       console.log("mongoDB connected successfully ")

    }catch(error){
        console.error("found error while fechting data from database ",error.message);
    }
}
export default DBconnection;
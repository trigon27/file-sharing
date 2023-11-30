import mongoose from "mongoose";

const DBconnection=async()=>{
    const MONO_URL=`mongodb://trigon27:7718985075@ac-xspnawe-shard-00-00.lcsvj7q.mongodb.net:27017,ac-xspnawe-shard-00-01.lcsvj7q.mongodb.net:27017,ac-xspnawe-shard-00-02.lcsvj7q.mongodb.net:27017/?ssl=true&replicaSet=atlas-k8raxw-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
       await mongoose.connect(MONO_URL);
       console.log("mongoDB connected successfully ")

    }catch(error){
        console.error("found error while fechting data from database ",error.message);
    }
}
export default DBconnection;
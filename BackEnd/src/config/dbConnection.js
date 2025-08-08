import mongoose from "mongoose";

export const connectToMongoDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_DB_CONNECTION_URL,{});
        console.log(`MongoDb Connected Successfully`);
    }
    catch(err){
        console.log(`Connection to mongoDB failed: ${err}`);
        process.exit(0);
    }
}


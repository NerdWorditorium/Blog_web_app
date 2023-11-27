import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const username = process.env.mongo_username;
const password = process.env.password;
const dbName = process.env.db_name;
const cluster = process.env.cluster
const url = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbName}?retryWrites=true&w=majority`

const connectDatabase = async()=>{
    try{
        const connect = await mongoose.connect(url);
        console.log("Database connected successfully");
    } catch(error){
        console.log("Error occured while connecting to database: ", error)
    }
};

export {connectDatabase};
import express  from "express";
import cors from "cors"
import {connectDatabase} from "./mongodb_connection/mongoDb.js";
import authRoutes from "./router/auth.js"

const app = express();
const port = 8000;

connectDatabase();

app.use(express.json());
app.use(cors());

app.get('/', (req,res)=>{
    res.send("Hello world for server");
})

app.use('/user', authRoutes);

app.listen(port,()=>{
    console.log("Server running from port: ", port)
})
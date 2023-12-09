import User from "../model/user.js";

const test = (req,res)=>{
    res.send("Hello world from controller");
}

const create_user = async (req, res)=>{
    console.log("controller reached")
    try{
        const userData = User(req.body);
        const userEmail = await User.findOne({
            email: userData.email
        })
        const username = await User.findOne({
            username: userData.username
        })

        if(userEmail == null && username == null){
            const saveData = userData.save();
            res.json({message:"User created", status: 201});
        } else{
            res.json({message: "User exists", status: 400})
        }
        
    } catch (error){
        console.log(error);
        res.json({message: error.message, status: 404});
    }
}

export default {test, create_user};
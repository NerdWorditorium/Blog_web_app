import User from "../model/user.js";

const validate_auth_data = (req, res, next)=>{
    const user_data = User(req.body);
    if(user_data.username == "" && user_data.email == "" && user_data.password == ""){
        res.json({message: "Username, email and password are required", status: 400})
    }else if(user_data.username == "") {
        res.json({message: "Username is required", status: 400})
    }
    else if(user_data.email == "") {
        res.json({message: "Email is required", status: 400})
    } else if(user_data.password == ""){
        res.json({message: "Password is required", status: 400})
    // } else if (user_data!==){

    // // next();
    } else {
        res.json({message: "Unexpected error occurred", status: 400})
    }
}

export default {validate_auth_data};
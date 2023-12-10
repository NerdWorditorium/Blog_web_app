import Joi from "joi";

const validate_auth_data = (req, res, next)=>{
    const user_validate_schema = Joi.object({
        username: Joi.string().regex(/^[a-zA-Z\d_]+$/).min(6).required()
                  .messages({'string.pattern.base': 'Username can contain letter, numbers and _.'}),
        email: Joi.string().required().email(),
        password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d_@$!%*?&]{8,}$/).min(8).required()
                  .messages({'string.pattern.base': 'Password must contain at least one uppercase letter, one number, and has a minimum length of 8 characters.'})
    })  

    const { error } = user_validate_schema.validate(req.body);
    if(error){
        res.json({message: error.message, status: 400});
    } else{
        next();
    }

    
}

export default {validate_auth_data};
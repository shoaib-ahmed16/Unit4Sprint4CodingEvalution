require("dotenv");
const jwt = require("jsonwebtoken");
const user =require("../models/user.model")


const verifyToken =(token)=>{
    return jwt.verify(token,process.env.SECRET_KEY);
}



const authentication =async (req,res,next)=>
{
    try{

        if(!user.headers.authorization)
        {
            return res.status(500).send("AUthorization Not allowed to the User")
        }
        if(!user.headers.authorization.Bearer.startWith("Bearer "))
        {
            return res.status(500).send("AUthorization Not allowed to the User")
        }

        let token  =user.headers.authorization.trim().split(" ")[1];
        
        let auth =verifyToken(token)
        if(auth)
        {
            user.user_id =req.user._id;
            next()
        }
    }
    catch(err)
    {
        return res.status(500).send("AUthorization Not allowed to the User")
    }
}


module.exports =authentication;
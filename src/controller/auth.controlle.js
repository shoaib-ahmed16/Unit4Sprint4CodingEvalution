const express =require("express")
const User =require("../models/user.model.js")
const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken =(token)=>{
    return jwt.sign({User},process.env.SECRET_KEY)
}

const register = async(req,res)=>
{
    try{
        let user =User.findOne({email:req.body.email})

        if(user)
        {
            return res.status(200).send("Eamil already Exist")
        }

        user =User.create(req.body).lean().exec()

        const token =generateToken(user);

        return res.status(201).send({user,token})
    }
    catch (err)
    {
        res.status(400).send({message:message.err})
    }
}



const login = async(req,res)=>
{
    try{
        let user =User.findOne({email:req.body.email})

        if(!user)
        {
            return res.status(200).send("Wrong Email or Password")
        }

        let match =User.checkPassword(req.body.password);
        if(!match)
        {
            return res.status(200).send("Wrong Email or Password")
        }

        const token =generateToken(user);

        return res.status(201).send({user,token})
    }
    catch (err)
    {
        res.status(400).send({message:message.err})
    }
}


module.exports ={login,register}
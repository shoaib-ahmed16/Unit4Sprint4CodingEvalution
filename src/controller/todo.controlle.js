const express = require("express");
const router =express.Router();
const todo =require("../models/todo.model.js");
const authorization =require("../middleware/authentication.js");


router.post("",authorization, async(req,res)=>{
    try{
        const todos =todo.create(req.body);

        return res.status(200).send({todos});
    }
    catch (err)
    {
        return res.status(200).send({message:err.message});

    }
})


router.patch("/:id",authorization, async(req,res)=>{
    try{
        const todos =todo.findByIdAndUpdate(req.params.id,req.body);

        return res.status(200).send({todos});
    }
    catch (err)
    {
        return res.status(200).send({message:err.message});

    }
})


router.delete("/:id",authorization, async(req,res)=>{
    try{
        const todos =todo.findByIdAndDelete(req.params.id);

        return res.status(200).send({Deleted:todos});
    }
    catch (err)
    {
        return res.status(200).send({message:err.message});

    }
})


router.get("/:id", async(req,res)=>{
    try{
        const todos =todo.findById(req.params.id).lean().exec();

        return res.status(200).send({findById:todos});
    }
    catch (err)
    {
        return res.status(200).send({message:err.message});

    }
})


router.get("", async(req,res)=>{
    try{
        const todos =todo.find().lean().exec();

        return res.status(200).send({findById:todos});
    }
    catch (err)
    {
        return res.status(200).send({message:err.message});

    }
})


module.exports =router;


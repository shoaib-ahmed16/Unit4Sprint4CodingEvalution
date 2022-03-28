const mongoose =require('mongoose');

const todoSchema=new mongoose.Schema(
    {
        title:{type:String,required:true},
        createdAt:{typr:String,require:false},
        updatedAt:{typr:String,require:false},
    }
)

module.exports =mongoose.model("todos",todoSchema)


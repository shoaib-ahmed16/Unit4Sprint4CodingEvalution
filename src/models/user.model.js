const bcrypt =require("bcrypt")
const mongoose =require("mongoose");


const userScehma = new mongoose.Schema(
    {
    
        firstName:{type:String,required:true},
        lastName:{type:String,required:true},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        createdAt:{type:String,required:false},
        updatedAt:{type:String,required:false}

    },
{
    versionKey:false,
    timestamps:true
})

userScehma.pre("save",function(next)
{
    const hash =bcrypt.hashSync(this.password, 8)
    this.password =hash;
    next ()
})

userScehma.method.checkPassword =function(password)
{
    return bcrypt.compareSync(this.password, hash);
}

module.exports =mongoose.model("user",userScehma)


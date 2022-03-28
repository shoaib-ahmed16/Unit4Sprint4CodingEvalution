const connect =require("./configue/database.js")

const app =require("./index.js")


app.listen(5000,async ()=>{
    try{
        await connect()
        console.log("listening the port 5000")
    }
    catch (err)
    {
        console.log({message:err.message})
    }
})
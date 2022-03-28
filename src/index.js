const express =require("express")

const userController =require("./controller/user.controlle.js")
const todoController =require("./controller/todo.controlle.js")
const {register,login} =require("./controller/auth.controlle.js")

const app = express();

app.use(express.json())


app.use("/user",userController)

app.post("/register",register)

app.post("/login",login)

app.use("/todo",todoController)


module.exports=app;
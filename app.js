import express from "express"
import userRouter from "./routes/userRouter.js";
import noteRouter from "./routes/noteRouter.js";
import mongoose, { connect } from "mongoose";

const app = express()

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log("El servidor está ejecutandose correctamente.");
})
mongoose.connect("mongodb+srv://doitapp:doitapp@cluster0.sj3gn9n.mongodb.net/doitapp?retryWrites=true&w=majority", (e) =>{
    if (e) {
        console.log(e);
    } else{
        console.log("Se ha conectado a la base de datos.");
    }
})

app.use(express.json())
app.use("/user", userRouter)
app.use("/note", noteRouter)
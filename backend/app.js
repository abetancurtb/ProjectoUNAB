//Importamos las dependencias
import cors from "cors";
//import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import userRouter from "./routes/userRouter.js";
import noteRouter from "./routes/noteRouter.js";

import apiRouter from "./routes/apiRouter.js";

const app = express()

const port = process.env.PORT || 8080

const uri = process.env.URI;
mongoose.set("strictQuery", true);

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

//Middlewares
app.use(
    cors({
      origin: true,
    })
  );
app.use(express.json())
app.use("/user", userRouter)
app.use("/note", noteRouter)
app.use("/api", apiRouter);
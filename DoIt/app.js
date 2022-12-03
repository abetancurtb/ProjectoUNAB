import  express from "express";
import usersRouters from "./routers/usersRouters.js";

const app = express();

const port = process.env.port || 3000; //me asigna el puerto o si no me da el 3000

app.listen(port, ()=>{
    console.log("El servidor esta ejecutandose")
}) // inicializa

app.use(express.json());
app.use("/user",usersRouters);
import express from "express";
import { createUser, deleteUser, readUser, updateUser } from "../controllers/userControllers.js";

const usersRouters = express.Router();//inicializo

//Crear 
//POST
usersRouters.post("/", (req, res) =>{
    createUser(req,res);
});
//Leer 
//
usersRouters.get("/", (req, res) =>{
    readUser(req,res);
});

// Actualizar
//

usersRouters.put("/", (req, res) =>{
    updateUser(res,res);
});

//Eliminar
//

usersRouters.delete("/", (req, res) =>{
    deleteUser(res,req);
});

export default usersRouters;
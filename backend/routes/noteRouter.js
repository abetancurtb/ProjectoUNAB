import express from "express";
import { createNote, deleteNote, readNote, updateNote } from "../controllers/noteController.js";

const noteRouter = express.Router()

//Crear
//POST
noteRouter.post("/", (req, res) =>{
    createNote(req, res)
})
//Leer
//GET
noteRouter.get("/", (req, res) =>{
    readNote(req, res)
})
//Actualizar
//PUT
noteRouter.patch("/:nombre", (req, res)=>{
    updateNote(req, res)
})
//Eliminar
//DELETE
noteRouter.delete("/:id", (req, res) =>{
    deleteNote(req, res)
})

export default noteRouter;

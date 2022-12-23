import userModel  from "../models/models.js"
import bcrypt from "bcrypt";

export async function createUser(req, res){

    const {usuario} = req.body;
   
    let { contraseña } = usuario

    if (contraseña == null) {
        res.sendStatus(400)
        return
    }
    
    let documento

    try {
        contraseña = await bcrypt.hash(contraseña, 10);
       
        usuario.contraseña = contraseña;
        
        documento = await userModel.create(usuario)
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(201)
    res.json(documento)
}

export async function readUser(req, res){
    const { nombre } = req.body

    let documento

    try {
        documento = await userModel.findOne({ nombre })
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(200)
    res.json(documento)
}
export async function updateUser(req, res){
    const { nombre } = req.params
    const { cambios } = req.body

    let documento;

    try {
        documento = await userModel.updateOne({
            nombre
        }, cambios)
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(200)
    res.json(documento)
}
export async function deleteUser(req, res){
    const { id } = req.params

    let documento;

    try {
        documento = await userModel.findOneAndDelete({
            "_id": id
        })
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(200)
    res.json(documento)
}
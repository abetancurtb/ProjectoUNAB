import mongoose from "mongoose";

const categorias = ["Personal", "Educativa", "Laboral"]

//perioricidad 
//0 diaria
//1 semanal


// estado
//pendientes
//cumplido

const userSchema = mongoose.Schema({
    "idUsuario": {type:String, required: true},
    "categoria": {type:String, required: true},
    "descripcion" :{type:String, required: true}
    //    "categoria": {type:String, required: true, enum: categorias},
//    "periodicidad": {type: Number, required: true},
//    "estado" : {type: Number, required: true},
//    "date":{type:Date, default:Date.now()}
//}, { timestamps: true })
})
export default mongoose.model("note", userSchema)


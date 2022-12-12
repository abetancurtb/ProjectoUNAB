import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    "nombre": {type:String, required: true, unique: true},
    "email": {type:String, required: true, unique: true},
    "ciudad": String,
    "date":{type:Date, default:Date.now()},
    "contraseña": { type: String, required: true }
}, { timestamps: true })

export default mongoose.model("users", userSchema)


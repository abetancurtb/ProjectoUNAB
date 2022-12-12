import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    "nombre": {type:String, required: true},
    "email": {type:String},
    "ciudad": String,
    "date":{type:Date, default:Date.now()}
})

export default mongoose.model("users", userSchema)
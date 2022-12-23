import bcrypt from "bcrypt";
import userModel from "../models/models.js";
import { genToken } from "./tokenGenerator.js";

export async function login(req, res) {
  try {
    const { name, password } = req.headers;

    const document = await userModel.findOne({ nombre: name });
    
    const access = await bcrypt.compare(password, document.contraseña);
    
    if (access) {
      const token = genToken({ name });
      res.status(200).json({ token });
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    res.status(401).json(error.message);
  }
}

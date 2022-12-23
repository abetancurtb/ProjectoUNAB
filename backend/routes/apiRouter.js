import express from "express";
import { login } from "../models/authModule.js";



const apiRouter = express.Router();

apiRouter.get("/login", login);


export default apiRouter;







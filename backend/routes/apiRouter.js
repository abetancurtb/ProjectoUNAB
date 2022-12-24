import express from "express";
import { readNote } from "../controllers/noteController.js";
import { validateToken } from "../models/tokenGenerator.js";


const apiRouter = express.Router();


apiRouter.get("/notes", validateToken, readNote);

export default apiRouter;







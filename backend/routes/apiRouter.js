import express from "express";
import { login } from "../models/authModule.js";
import { readNote } from "../controllers/noteController.js";
import { validateToken } from "../models/tokenGenerator.js";


const apiRouter = express.Router();
apiRouter.get("/login", login);

apiRouter.get("/notes", validateToken, readNote);

export default apiRouter;








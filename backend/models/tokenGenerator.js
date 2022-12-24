import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const privateKey = "";

export function genToken(element) {
  const token = jwt.sign(element, "1234567890abcdefghijklmnopqrstuwxyz");
  // @ts-ignore
  return token;
}

export function validateToken(req, res, next) {
  try {
    const { token } = req.headers;
    const value = jwt.verify(token, "1234567890abcdefghijklmnopqrstuwxyz");
    req.value = value;
    next();
  } catch (error) {
    res.status(401).json(error.message);
  }
}

import usuarioModel from "../models/usuarioModel.ts";
import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "Não autorizado" });
  }
  const token = req.headers.authorization.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.SECRET); 

    const usuario = await usuarioModel.buscarUserPorId(payload.id);
    if (!usuario) {
      return res.status(401).json({ message: "Não autorizado" });
    }
  } catch (error) {
    return res.status(401).json({ message: "Não autorizado" });
  }

  next();
};

export default auth;
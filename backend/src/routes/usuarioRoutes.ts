import usuarioController from '../controllers/usuarioController.ts';

import { Router, Request, Response } from "express"
const routes = Router()

routes
  .post("/cadastro", usuarioController.cadastrar)
  .get("/listarUsers", usuarioController.listarUser)
  .delete("/deletarUser/:id", usuarioController.deletarUsuario)
  
export default routes;
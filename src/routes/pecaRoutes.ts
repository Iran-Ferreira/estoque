import pecaController  from '../controllers/pecaController.ts';

import { Router, Request, Response } from "express"
const routes = Router()

routes
    .get("/listarPecas", pecaController.listarPecas)
    .get("/buscarPecaPorId/:id", pecaController.buscarPecaPorId)
    .get("/buscarPecaPorNome/:nome", pecaController.buscarPecaPorNome)
    .post("/addPeca", pecaController.addPeca) 
    .put("/editarPeca/:id", pecaController.editarPeca)
    .delete("/deletarPeca/:id", pecaController.deletarPeca)
    .put("/diminuirQuantidade/:id", pecaController.diminuirQuantidade);

export default routes;
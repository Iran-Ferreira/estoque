import authController  from "../controllers/authController.ts"
 
import { Router, Request, Response } from "express"

const routes = Router()
routes.post("/login", authController.logar);
routes.post("/loginADM", authController.logar);

export default routes;
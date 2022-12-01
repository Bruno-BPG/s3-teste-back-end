import { Router } from "express";

const routes = Router()

// clientes
import userCreateController from "./controllers/clientes/userCreate.controller";
import userListController from "./controllers/clientes/userList.controller"

// contatos
import contatosCreateController from "./controllers/contatos/contatosCreate.controller";
import contatosListController from "./controllers/contatos/contatosList.controller"

// clientes
routes.get('/cliente', userListController)
routes.post('/cliente', userCreateController)

// contatos
routes.get('/contatos', contatosListController)
routes.post('/contatos/:id', contatosCreateController)

export default routes

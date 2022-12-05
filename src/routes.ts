import { Router } from "express";

const routes = Router()

// clientes
import userCreateController from "./controllers/clientes/userCreate.controller";
import userListController from "./controllers/clientes/userList.controller"
import deletecontrolerCliente from "./controllers/clientes/userDelete.controllers"

// contatos
import contatosCreateController from "./controllers/contatos/contatosCreate.controller";
import contatosListController from "./controllers/contatos/contatosList.controller"
import deletecontrolerContatos from "./controllers/contatos/contatosDelete.controllers"

// clientes
routes.get('/cliente/', userListController)
routes.post('/cliente/', userCreateController)
routes.delete('/cliente/:id', deletecontrolerCliente)

// contatos
routes.get('/contatos/', contatosListController)
routes.post('/contatos/:id', contatosCreateController)
routes.delete('/contatos/:id', deletecontrolerContatos)

export default routes

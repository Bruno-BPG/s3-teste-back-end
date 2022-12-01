import { AppDataSource } from "../../data-source"
import { Cliente } from "../../entities/cliente.entity";
import { Contatos } from "../../entities/contatos.entity";


const contatosListService = async () => {

    const userRepository = AppDataSource.getRepository(Contatos)

    const users = userRepository.find()

    return users
}

export default contatosListService
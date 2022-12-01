// src/services/user/userList.service.ts

import { AppDataSource } from "../../data-source"
import { Cliente } from "../../entities/cliente.entity";


const userListService = async () => {

    const userRepository = AppDataSource.getRepository(Cliente)

    const users = userRepository.find()

    return users
}

export default userListService

// src/services/user/userCreate.service.ts

import { IUserCreate, IUser } from "../../interfaces/user";
import { AppDataSource } from "../../data-source";
import { Cliente } from "../../entities/cliente.entity";

const userCreateService = async ({name, email, telefone}: IUserCreate) => {

    const userRepository = AppDataSource.getRepository(Cliente) 

    const users = await userRepository.find()

    const emailAlreadyExists = users.find(user => user.email === email)

    if (emailAlreadyExists) {
        throw new Error("Email already exists")
    }

    const user = new Cliente()
    user.name = name
    user.email = email
    user.telefone = telefone

    userRepository.create(user)
    await userRepository.save(user)

    return user

}

export default userCreateService
        
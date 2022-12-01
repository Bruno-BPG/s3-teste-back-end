import { IUserCreate, IUser } from "../../interfaces/user";
import { AppDataSource } from "../../data-source";
import { Cliente } from "../../entities/cliente.entity";
import { Contatos } from "../../entities/contatos.entity";

const userCreateService = async ({id,name, email, telefone}: IUserCreate) => {

    const userRepository = AppDataSource.getRepository(Cliente) 

    // const clienteRepository = AppDataSource.getRepository(Cliente) 

    // const clienteFilter = await clienteRepository.findOneBy({
    //     id:id
    // })

    const users = await userRepository.find()

    const emailAlreadyExists = users.find(user => user.email === email)

    if (emailAlreadyExists) {
        throw new Error("Email already exists")
    }

    const user = new Cliente()
    // user.clientee = clienteFilter
    user.name = name
    user.email = email
    user.telefone = telefone

    userRepository.create(user)
    await userRepository.save(user)

    return user

}

export default userCreateService
        
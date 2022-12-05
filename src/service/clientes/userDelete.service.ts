import { AppDataSource } from "../../data-source"
import { Cliente } from "../../entities/cliente.entity"


const deleteServiceCliente = async ({id}:any) =>{

    const contatoRepository = AppDataSource.getRepository(Cliente)

    const contato = await contatoRepository.findOne({
        where:{
            id
        }
    })

    if(!contato){
        throw new Error("contato not found")
    }

    await contatoRepository.delete(contato.id)

    return "deletado"
}

export default deleteServiceCliente
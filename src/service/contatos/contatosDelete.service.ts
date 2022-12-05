import { AppDataSource } from "../../data-source"
import { Contatos } from "../../entities/contatos.entity"


const deleteServiceContatos = async ({id}:any) =>{

    const contatoRepository = AppDataSource.getRepository(Contatos)

    const  contato = await contatoRepository.findOne({
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

export default deleteServiceContatos
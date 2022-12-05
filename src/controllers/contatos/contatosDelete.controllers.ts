import { Request, Response } from 'express'
import deleteServiceContatos from '../../service/contatos/contatosDelete.service'

const deletecontrolerContatos = async (req: Request, res: Response) => {

    try {

        const id = req.params.id

        const users = await deleteServiceContatos({id})

        return res.status(200).send({"message":users})

    } catch (err) {

        if (err instanceof Error) {

            return res.status(404).send({
                "error": err.name,
                "message": err.message
            })
        }
    }
}

export default deletecontrolerContatos
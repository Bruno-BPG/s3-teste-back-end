import { Request, Response } from 'express'
import deleteServiceCliente from '../../service/clientes/userDelete.service'

const deletecontrolerCliente = async (req: Request, res: Response) => {

    try {

        const id = req.params.id

        console.log(id)

        const users = await deleteServiceCliente({id})

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

export default deletecontrolerCliente
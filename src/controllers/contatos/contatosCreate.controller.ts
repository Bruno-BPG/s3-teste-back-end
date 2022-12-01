import { Request, Response } from 'express'

import contatosCreateService from '../../service/contatos/contatosCreate.service'

const contatosCreateController = async (req: Request, res: Response) => {

    try {
        const {name, email,telefone} = req.body
        const {id} =  req.params
        const newUser = await  contatosCreateService({id,name, email, telefone})
        return res.status(201).send(newUser)

    } catch (err) {

        if (err instanceof Error) {

            return res.status(400).send({
                "error": err.name,
                "message": err.message
            })
        }
    }
}

export default contatosCreateController
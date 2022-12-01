import { Request, Response } from 'express'

import userCreateService from '../../service/clientes/userCreate.service'

const userCreateController = async (req: Request, res: Response) => {

    try {
        const {name, email,telefone} = req.body
        const {id} =  req.params
        const newUser = await  userCreateService({id,name, email, telefone})
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

export default userCreateController
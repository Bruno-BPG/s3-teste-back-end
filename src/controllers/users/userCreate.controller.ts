
import { Request, Response } from 'express'

// importando o Service
import userCreateService from '../../service/user/userCreate.service'

const userCreateController = async (req: Request, res: Response) => {

    try {
        
        // acessando os dados do corpo da requisição,
        // usando desestruturação
        const {name, email,telefone} = req.body
        
        // chamando o Service que vai retornar o newUser,
        // que será inferido pelo TS como tipo IUser
        const newUser = await  userCreateService({name, email, telefone})
        
        // retornando 201 com JSON do newUser para o cliente
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
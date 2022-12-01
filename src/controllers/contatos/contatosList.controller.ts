
import { Request, Response } from 'express'
import contatosUsersService from '../../service/contatos/contatosList.service'

const contatosListController = async (req: Request, res: Response) => {

    try {
        const users = await contatosUsersService()
        return res.send(users)

    } catch (err) {

        if (err instanceof Error) {

            return res.status(400).send({
                "error": err.name,
                "message": err.message
            })
        }
    }
}
export default contatosListController
        
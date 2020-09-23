import { Request, Response } from 'express'
import { TData } from '../../types'
import { saveAnswers, findAll } from '../../services/firebase'

export const save = async (req: Request, res: Response) => {
    const body: TData = req.body
    const response = await saveAnswers(body)
    res.status(200).send({ success: true, userInfo: response })
}

export const index = async (req: Request, res: Response) => {
    try {
        const response = await findAll()
        console.log(response)
        res.status(200).send(response)
    } catch (error) {
        res.status(400).send({
            error: {
                message: 'Não foi possível fazer esta requisição!'
            }
        })
        console.log(error)
    }
}

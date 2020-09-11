import { Request, Response } from 'express'
import { TData } from '../../types'
import { saveAnswers } from '../../services/firebase'

export const save = async (req: Request, res: Response) => {
    const body: TData = req.body
    const response = await saveAnswers(body)
    res.status(200).send({ success: true, userInfo: response })
}
import firebase from '../config/firebase'
import { TData } from '../types'

export const saveAnswers = async (data: TData) => {
    try {
        const response = await firebase
            .database()
            .ref(`survey/su${new Date().getTime()}`)
            .set({
                ...data
            })
        return response
    } catch (error) {
        throw new Error(error)
    }
}
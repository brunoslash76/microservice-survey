import express from 'express'
import { save } from './controllers/Survey'
const route = express.Router()
route.post('/full-survey', save)

export default route
import express from 'express'
import { save, index } from './controllers/Survey'
const route = express.Router()
route.post('/full-survey', save)
route.get('/full-survey', index)

export default route
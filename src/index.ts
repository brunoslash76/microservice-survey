import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import route from './routes'

const PORT = 3333
const app = express()
app.use(cors())
app.use(express.json())
app.use(route)

app.listen(PORT, () => {
    console.log(`server listening on port${PORT}`)
})




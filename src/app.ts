import express from 'express'
import cors from 'cors'
import path from 'path';
import routes from './routes';


const app = express()

app.use(cors())

app.use(express.json())

// registrando as rotas na aplicação
app.use(routes)

app.listen(3001)
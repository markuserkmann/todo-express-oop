import express from 'express'
import bodyParser from 'body-parser'

import todoRoutes from './routes/todo.js'

const app = express()
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.use('/todos', todoRoutes)

app.listen(3000, () => {
    console.log("Running on 3000")
})
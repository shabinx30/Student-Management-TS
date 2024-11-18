import dotenv from 'dotenv'
import path from 'path'
import bodyParser, { urlencoded } from 'body-parser'
import express, { Request, Response } from 'express'

const app = express()
dotenv.config()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.listen(3000,()=>{
    console.log('started');
})
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import express from 'express'
import Studentroute from './routes/route'
import mongo from './mongoConfig/mongo'

const app = express()
dotenv.config()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.set('view engine', 'ejs');

//routes
app.use('/', Studentroute)


//mongodb connection
mongo()

app.listen(process.env.PORT || 5000, () => {
    console.log(`server is started running on ${process.env.PORT || 5000}`);
})
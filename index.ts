import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import express from 'express'
import Studentroute from './routes/route'
import mongoose from 'mongoose'

const app = express()
dotenv.config()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.set('view engine', 'ejs');

//routes
app.use('/', Studentroute)


//mongodb connection
mongoose.connect(process.env.MONGODB_URL as string)
    .then(() => console.log("database connected"))
    .catch((err) => console.log(err))

app.listen(process.env.PORT || 5000, () => {
    console.log(`server is started running on ${process.env.PORT || 5000}`);
})
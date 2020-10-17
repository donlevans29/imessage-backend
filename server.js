// import
import express from 'express'
import mongoose from 'mongoose'
import pusher from 'pusher'
import cors from 'cors'


// app config
const app = express();
const port = process.env.PORT || 9000


// middleware
app.use(cors())
app.use(express.json())


// db config


// api routes
app.get('/', (req,res) => res.status(200).send('Hello From Squidux! 🦑 '))


// listen
app.listen(port, () => console.log(`listening on localhost:${port}`))
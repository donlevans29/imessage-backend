// import
import express from 'express'
import mongoose from 'mongoose'
import pusher from 'pusher'
import cors from 'cors'

import  mongoData from './mongoData.js'

// app config
const app = express();
const port = process.env.PORT || 9000


// middleware
app.use(cors())
app.use(express.json())


// db config
const mongoURI ='mongodb+srv://admin:0qkJ7d2A7L21gKBy@cluster0.nialt.mongodb.net/imessageDB?retryWrites=true&w=majority'

mongoose.connect(mongoURI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.once('open', () =>{
  console.log('DB Connected')
})

// api routes
app.get('/', (req,res) => res.status(200).send('Hello From Squidux! 🦑 '))

// create new conversation
app.post('/new/conversation', (req, res) => {
  const dbData = req.body

    mongoData.create(dbData,(err,data) => {
      if (err) {
          res.status(500).send(err)
      } else {
          res.status(201).send(data)  // created in server language
      }
    })

})


// listen
app.listen(port, () => console.log(`listening on localhost:${port}`))
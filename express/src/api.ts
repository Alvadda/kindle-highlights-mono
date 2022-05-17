import express from 'express'
import cors from 'cors'

import highlightsRoute from './routes/highlights.routes'
import booksRoute from './routes/books.routes'
import apiKey from './middleware/apikey.middleware'

const app = express()

// Config
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(apiKey)

// Routes
app.use('/highlights', highlightsRoute)
app.use('/books', booksRoute)
// Todo add apikey route

app.listen(1337, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${1337}`)
})

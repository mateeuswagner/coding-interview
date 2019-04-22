// TODO: Implement the web server here.

const express = require('express')
const bodyParser = require('body-parser')
const bubbleSort = require('./lib/sort')

const app = express()

app.use(bodyParser.json())
app.use('/static', express.static(`${__dirname}/public`))

app.get('/', (request, response) => {
  response.sendFile(`${__dirname}/public/index.html`)
})

app.post('/array', (request, response) => {
  const array = request.body
  const sortedArray = bubbleSort(array)

  response.json({ data: sortedArray })
})

app.listen(8080, () => {
  console.log('Application is running...')
})

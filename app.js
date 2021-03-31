// Imports
const express = require('express')
const app = express()
require('dotenv').config() // For .env

const data = require('./src/data.js')

// Variables
const port = process.env.PORT || 3000 

// Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + '/public/css'))
app.use('/js', express.static(__dirname + '/public/js'))
app.use('/img', express.static(__dirname + '/public/img'))
app.use('/data', express.static(__dirname + '/public/data'))

// Set views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
  response.render('index', { 
    title: 'Les tendandes de la mobilité',
    data: data.showData()
  })
})

// Listen server
app.listen(port, () => console.log(`\u001b[1;34mThe server is launched on http://localhost:${port} 👈\u001b[0m`))
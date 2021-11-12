const express = require('express')
const hbs = require('hbs')
const path = require("path")
const app = express()
const port = process.env.PORT || 3000


//Join Path
const staticPath = path.join(__dirname, '../public')
const templatePath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Set Template Engine
app.set('view engine', 'hbs')
app.set('views',templatePath)
hbs.registerPartials(partialsPath)

//built in middleware
app.use(express.static(staticPath))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('*', (req, res) => {
  res.render('404')
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
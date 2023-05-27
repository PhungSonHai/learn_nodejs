const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const path = require('path')
const app = express()
const port = 3000

//logger
app.use(morgan('combined'))

//static files
app.use(express.static(path.join(__dirname, 'public')))

//template handlebars
app.engine('hbs', engine({ 
  extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())


app.post('/', (req, res) => {
  console.log(req.body)
  res.render('home');
})

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
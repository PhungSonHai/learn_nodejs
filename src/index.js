const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const path = require('path')
const route = require('./routes/index')
const app = express()
const port = 3000
const db = require('./config/db')
const methodOverride = require('method-override')

//Connect DB
db.connect();

//logger
app.use(morgan('combined'))

app.use(methodOverride('_method'))

//static files
app.use(express.static(path.join(__dirname, 'public')))

//template handlebars
app.engine('hbs', engine({ 
  extname: '.hbs',
  helpers: {
    increase: (a, b) => a + b,
  }
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

//All route 
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
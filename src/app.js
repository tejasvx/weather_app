const path = require('path')
const express = require('express');
const hbs = require('hbs')

const app = express()

//Define paths
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.get('', (req, res) =>{
  res.render('index', {
    title: 'tejasv app',
    name: 'tejasv'    
  })
})

app.get('/about', (req, res) =>{
  res.render('about', {
    title: 'about me',
    name: 'tejasv'    
  })
})

app.get('/help', (req, res) =>{
  res.render('help', {
    title: 'help page',
    message: 'welcome to the help page'    
  })
})

app.get('/weather', (req, res) =>{
  res.send('weather')
})

app.get('/*', (req, res) =>{
  res.send('hehe')
})

app.listen(3000, () =>{
  console.log('app is running');
})
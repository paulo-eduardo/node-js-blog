const express = require('express')
const path = require('path')
const expressEdge = require('express-edge')
var mongoose = require('mongoose');
//DB setup
const app = new express()

mongoose.connect('mongodb://mongo:27017/node-js-blog');

app.use(express.static('public'))
app.use(expressEdge)
app.set('views', `${__dirname}/views`)


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/post', (req, res) => {
    res.render('post')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})


app.listen(4000, () => {
    console.log('App listen on port 4000')
})
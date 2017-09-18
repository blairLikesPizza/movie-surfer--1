var express = require('express')
var bodyParser = require('body-parser')
var movies = require('./movie_controller.js')
var cors = require('cors')

var app = express();

app.use(bodyParser.json()) //IF POST OR PUT then req.body = body
app.use(cors())

app.get('/api/movies', (req, res, next) => {
    
    res.status(200).send(movies.movies)
})

app.get('/api/movies', (req, res, next) => {
    res.status(200).send(movies.coverImage)
})

app.listen(3001, function(){
    console.log("Andre 3001")
})
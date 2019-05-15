var express = require('express');
var app = express();
var movieRoutes = express.Router();

// Require Item model in our routes module
var Movie = require('../models/Movie');

// Defined store route
movieRoutes.route('/add').post(function (req, res) {
  var movie = new Movie(req.body);
   movie.save()
    .then(item => {
    res.status(200).json({'movie': 'Movie added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
movieRoutes.route('/').get(function (req, res) {
   Movie.find(function (err, movies){
    if(err){
      console.log(err);
    }
    else {
      res.json(movies);
    }
  });
});
module.exports = movieRoutes;
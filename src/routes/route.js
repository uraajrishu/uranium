const express = require('express');

const router = express.Router();

// Problem No-1

router.get('/movies', function (req, res) {

    let movies = ["solley", "RRR", "KGF", "PUSHPA", "DDL", "Attack1", "Sweety", "Bhag milkha bhag", "Damaged brain", "Avenger", "Spiderman", "Avtar"]
res.send(movies)
});

// Problem No-2 + Problem No-3

router.get('/movies/:indexNumber', function (req, res) {

    let movies = ["solley", "RRR", "KGF", "PUSHPA", "DDL", "Attack1", "Sweety", "Bhag milkha bhag", "Damaged brain", "Avenger", "Spiderman", "Avtar"]
    let movieIndex = req.params.indexNumber

    let finalMovies = " ";
    if (movieIndex < movies.length) {
        finalMovies = movies[movieIndex] 
    } else {
        finalMovies = ("Movies doesn not exist " + movies.length)
    }
res.send(finalMovies)

});

// // Problem No-4 

router.get('/films', function (req, res) {

    let arr = [ {
        id: 1,
        name: "The Shining",
       }, {
        id: 2,
        name: "Incendies",
       }, {
        id: 3,
        name: "Rang de Basanti",
       }, {
        id: 4,
        name: "Finding Nemo",
       }]

res.send(arr)

});

// // Problem No-5

router.get('/films/:filmId', function (req, res) {

    let arr = [ {
        id: 1,
        name: "The Shining",
       }, {
        id: 2,
        name: "Incendies",
       }, {
        id: 3,
        name: "Rang de Basanti",
       }, {
        id: 4,
        name: "Finding Nemo",
       }]
       
       filmIndex = req.params.filmId

       function idLookup (x) {
        return x.id ;
    }
    let getId = arr.map (idLookup)
    
       let finalFilm = " " 
    
       if ( filmIndex <= getId.length ) {
           finalFilm = arr[filmIndex-1]
       } else {
           finalFilm = ( "Please enter number equal to or below := " + getId.length + ", Because no movie exists with the entered id")
       }

res.send(finalFilm)

});


router.get('/numbermissing', function (req, res) {

    let a = [2,4,6,7,8,9]
    count = a.length-1;
  let missing = new Array();
  
  for (let i = a[0]; i <= count; i++) {
    if (a.indexOf(i) == -1) {
       
      missing.push(i);
    }
  }
//   console.log(missing);
res.send(missing)
});


module.exports = router;
// adding this comment for no reason
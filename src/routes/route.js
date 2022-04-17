const express = require('express');
// const bookmodel = require('../models/bookModel');
const BookController = require('../controllers/bookController');

const router = express.Router();

// router.get('/test-me', function (req, res) {
//     res.send('Book Data API')
// });

router.post('/createauthor',BookController.createauthor);
router.post('/createbook',BookController.createbook);

router.get('/bookList',BookController.bookList);

router.get('/updatedbookprice',BookController.updatedbookprice);

router.get('/authorName',BookController.authorName);

// router.get('/getXINRBooks',BookController.getXINRBooks);

// router.get('/getRandomBooks',BookController.getRandomBooks);


module.exports = router;
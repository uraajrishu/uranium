const express = require('express');
const router = express.Router();

const allController= require("../controllers/allController.js")

// const authorController= require("../controllers/authorController")
// const bookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

router.post("/createAuthor", allController.createAuthor  )

router.post("/createPublisher", allController.createPublisher)

router.post("/createBook", allController.createBook)

router.get("/getBookData", allController.getBookData  )

router.get("/updatedata", allController.updatedata)

router.get("/updatePrice", allController.updatePrice)

module.exports = router;
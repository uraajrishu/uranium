const express = require('express');
const bookmodel = require('../bookmodel/bookmodel.js');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/bookauthur", async function(req, res){
 let book = req.body
 let saveBook= await bookmodel.create(book)
 res.send({msg: saveBook})   
}) 

router.get("/getBookList", async function(req, res){
    let allBooks= await bookmodel.find()
    res.send({msg: allBooks})
    
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

module.exports = router;
const newAuthor = require("../models/newAuthor.js")
const newBook = require("../models/newBook.js")
const newPublisher = require("../models/newPublisher.js")



const createAuthor = async function (req, res) {
    let author = req.body
    let authorCreated = await newAuthor.create(author)
    res.send({ data: authorCreated })
}

const createPublisher = async function (req, res) {
    let publisher = req.body
    let publisherCreated = await newPublisher.create(publisher)
    res.send({ data: publisherCreated })
}


const createBook=async function(req,res){
    let reqBook=req.body.author
    let reqPub=req.body.publisher

    let save=await newBook.create(req.body)
    res.send({msg:save})
    if(reqBook){
        if(reqPub){
            let authData=await newAuthor.find({_id:reqBook})
            let pubData=await newPublisher.find({id:reqPub})
            if(authData.length!==0){
                let save=await newBook.create(req.body)
                res.send({msg:save})
              } else res.send({msg:"send valid publisher_id"})  //return("send valid publisher")

        } res.send({msg:"send valid Author_id"})   //return ("send valid author") 
    }    res.send({msg:"publisher id is required"})    //return ("publisher id is required")              
    
      return ("authorid is needed")   
}

const getBookData= async function(req,res){
    let getbooks= await newBook.find().populate(["author","publisher"])
    res.send({msg:getbooks})
}

const updatedata=async function(req,res){
    let system=await newPublisher.find({$or:[{name:"Penguin"},{name:"HarperCollins"}]}).select({_id:1})
    let newSet=await newBook.updateMany({$or:[{publisher:system[0]},{publisher:system[1]}]},{$set:{hardCover:true},new:true})
 res.send({msg:newSet})
 }


 const updatePrice=async function(req,res){
    let data= await newAuthor.find({rating:{$gt:3.5}}).select({_id:1})
    console.log(data)
    let newThing=await newBook.updateMany({author:data},{$inc:{price:10}},{new:true})
    
    res.send({msg:newThing})
}

// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }

module.exports.createAuthor = createAuthor
module.exports.createPublisher = createPublisher
module.exports.getBookData = getBookData
module.exports.createBook = createBook
module.exports.updatedata = updatedata
module.exports.updatePrice = updatePrice
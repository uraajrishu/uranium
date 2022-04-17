const bookmodel = require("../models/bookModel");
const authormodel =require("../models/authormodel")

const createauthor = async function(req,res){
    let authordata=req.body;
    let saveData=await authormodel.create(authordata);
    res.send({msg : saveData});
}
const createbook = async function(req,res){
    let bookdata=req.body;
    let saveData=await bookmodel.create(bookdata);
    res.send({msg : saveData});
}



const bookList = async function(req,res){
    let author=await authormodel.find({author_name: "Chetan Bhagat"})
    let id=author[0].author_id
    let bookName=await bookmodel.find({author_id: id}).select({name:1})
    res.send({msg : bookName});
}

const updatedbookprice= async function(req,res){
    let bookdetails = await bookmodel.find({name:"Two states"})
    let id = bookdetails[0].author_id
    let authorA=await authormodel.find({author_id : id}).select({author_name:1,_id:0})
    let bookname=bookdetails[0].name
    let updatedprice = await bookmodel.findOneAndUpdate({name:bookname},{price:100},{new:true}).select({price:1,_id:0})

    res.send({msg : authorA,updatedprice});
}


const authorName = async function(req,res){
    let booksid=await bookmodel.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0})
    let id = booksid.map(inp => inp.author_id)
    let temp=[]
    for(let i=0;i<id.length;i++){
        let x= id[i]
        let author = await authormodel.find({author_id:x}).select({author_name:1,_id:0})
        temp.push(author)
    }
    let authorName = temp.flat()
    res.send({msg:authorName})
}









// const getParticularBooks = async function(req,res){
//     let key=req.body;
//     let books=await BookModel.find(key)//.select({_id:0,__v:0,createdAt:0,updatedAt:0});
//     res.send({books});
// }

// const getXINRBooks = async function(req,res){
//     let books=await BookModel.find({price : {inrPrice : {$or : [{$eq : 100},{$eq : 200},{$eq : 500}]}}},{bookName : 1,authorName : 1,_id : 0});
//     res.send({count : books.length,msg : books});
// }

// const getRandomBooks = async function(req,res){
//     let books=await BookModel.find({$or : [{stockAvailable : true},{totalPages : {$gt : 500}}]})//.select({_id:0,__v:0,createdAt:0,updatedAt:0});
//     res.send({count : books.length,msg : books});
// }

module.exports.createauthor=createauthor;
module.exports.createbook=createbook;
module.exports.bookList=bookList;
module.exports.updatedbookprice=updatedbookprice;
module.exports.authorName=authorName;
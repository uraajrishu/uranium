const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    authurName: String,
    bookName: String,
   
    category: String,
    
    publishedYear: Number
    
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) 



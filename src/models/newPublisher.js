const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema( {
name: String,
headQuarter: String,
ratings:Number

}, { timestamps: true });

module.exports = mongoose.model('newPublisher', publisherSchema)
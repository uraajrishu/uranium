const express = require('express');
const loggerModule = require('../logger/logger')
const helperModule = require('../util/helper')
const formatterModule = require('../validator/formatter')
const lodash = require('lodash')

const router = express.Router();

router.get('/test-me', function (req, res) {
    loggerModule.logger()
    helperModule.printTodaysDate()
    helperModule.printCurrentMonth()
    helperModule.printBatchInformation()
    formatterModule.trimString()
    formatterModule.changeCaseToUpper()
    formatterModule.changeCaseToLower()
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
let months = ['January','February','March','April','May','June','July','August','September','October','November','December']
let subArrays = lodash.chunk(months, 3)
console.log(subArrays)
let oddNumbers = [1,3,5,7,9,11,13,15,17,19]
console.log(lodash.tail(oddNumbers))
let a = [1 , 2, 1, 4]
let b = [2, 3, 4, 3]
let c = [6, 1, 5, 10]
let d = [1, 1, 1]
let e = [1, 2, 3, 4, 5]

console.log(lodash.union(a, b, c, d, e))

// Problem d)
let arrayOfKeyValuePairs = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
console.log('The object created from arrays is :', lodash.fromPairs(arrayOfKeyValuePairs))
    res.send('My hello api!')
});




module.exports = router;
// adding this comment for no reason
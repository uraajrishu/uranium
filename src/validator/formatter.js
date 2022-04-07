let trim = function(){
    console.log(' functionUp batch  '.trim() + '.')
   }
   
   let changetoLowerCase = function() {
       console.log('Uraj'.toLowerCase())
   }
   
   let changeToUpperCase = function() {
       console.log('uraNium'.toUpperCase())    
   }
   
   module.exports.trimString = trim
   module.exports.changeCaseToLower = changetoLowerCase
   module.exports.changeCaseToUpper = changeToUpperCase
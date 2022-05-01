const jwt = require('jsonwebtoken')

const middlewaree = async function(req,res,next){
    const token = req.headers['x-api-key']

    const validToken = jwt.verify(token,'Uranium')
    
    if(!validToken){
        res.status(400).send({status:false,msg:"No Such User Exist"})
    }
    
    req.body.tokenId = validToken._id
    next()
}
module.exports.middlewaree = middlewaree;
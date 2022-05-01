const authorModel = require("../model/authorModel")
const jwt = require('jsonwebtoken')

//validation
const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0
}
//Login Api

const authorLogin = async function (req, res) {
    try {
        const requestBody = req.body;
        if (!isValidRequestBody(requestBody)) {
            res.status(400).send({ status: false, message: 'Please provide Correct login details' })
            return
        }
        if (requestBody.email && requestBody.password) {
            const check = await authorModel.findOne({ email: requestBody.email, password: requestBody.password });
            if (!check) {
                return res.status(400).send({ status: false, msg: "Invalid Login Attempt" })
            }
            
            let payload = { _id: check._id }
            let token = jwt.sign(payload, 'Uranium')
            res.header('x-api-key', token);
            res.status(200).send({ status: true, data: "Yeah! Login Successful", token: { token } })
        } else {
            res.status(400).send({ status: false, msg: "Please Provide email and password" })
        }
    } catch (error) {
        res.status(400).send({ status: false, error: error.message })
    }
}
module.exports.authorLogin = authorLogin;

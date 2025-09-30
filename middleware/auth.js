const bodyParser = require("body-parser")
const {model} = require("mongoose")
const encoder =  bodyParser.urlencoded()
module.exports = encoder
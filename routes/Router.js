const Router = require("express").Router()
const StudentRouter = require("./StudentRoutes")

Router.use("/",StudentRouter)

module.exports = Router 
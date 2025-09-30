const StudentRouter = require("express").Router()
const encoder = require("../middleware/auth")
const {
    homePage,
    addPage,
    storePage,
    deletePage,
    editPage,
    updatePage,
} = require("../controllers/StudentControllers")

StudentRouter.get("/",homePage)
StudentRouter.get("/add",addPage)
StudentRouter.post("/add",encoder,storePage)
StudentRouter.get("/delete/:_id",deletePage)
StudentRouter.get("/edit/:_id",editPage)
StudentRouter.post("/update/:_id",encoder,updatePage)



module.exports = StudentRouter
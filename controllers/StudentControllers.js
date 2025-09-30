const Student = require("../models/Student")

async function homePage(req, res) {
    try {
        let data = await Student.find()
        res.render("index", {
            data: data
        })
    } catch (error) {
        res.render("index", {
            data: []
        })
    }
}

function addPage(req, res) {
    res.render("add", {
        data: {},
        errorMessage: {
            name: "",
            email: "",
            phone: "",
            branch: "",
            sem: ""
        }
    })
}

async function storePage(req, res) {
    try {
        var data = new Student(req.body)
        await data.save()
        res.redirect("/")
    } catch (error) {
        let errorMessage = {}
        error.errors?.name ? errorMessage.name = error.errors.name.message : ""
        error.errors?.email ? errorMessage.email = error.errors.email.message : ""
        error.errors?.phone ? errorMessage.phone = error.errors.phone.message : ""
        error.errors?.branch ? errorMessage.branch = error.errors.branch.message : ""
        error.errors?.sem ? errorMessage.sem = error.errors.sem.message : ""

        res.render("add", {
            data: data,
            errorMessage: errorMessage
        })
    }
}
async function deletePage(req, res) {
    try {
        await Student.deleteOne({ _id: req.params._id })
        res.redirect("/")
    } catch (error) {
        res.redirect("/")
    }
}

async function editPage(req, res) {
    try {
        let data = await Student.findOne({ _id: req.params._id })
        res.render("edit", {
            data: data
        })
    } catch (error) {
        res.redirect("/")
    }
}

async function updatePage(req, res) {
    try {
        var data = await Student.findOne({ _id: req.params._id })
        data.name = req.body.name
        data.email = req.body.email
        data.phone = req.body.phone
        data.branch = req.body.branch
        data.sem = req.body.sem
        data.city = req.body.city
        data.state = req.body.state
        await data.save()
        res.redirect("/")

    } catch (error) {
        let errorMessage = {}
        error.errors?.name ? errorMessage.name = error.errors.name.message : ""
        error.errors?.email ? errorMessage.email = error.errors.email.message : ""
        error.errors?.phone ? errorMessage.phone = error.errors.phone.message : ""
        error.errors?.branch ? errorMessage.branch = error.errors.branch.message : ""
        error.errors?.sem ? errorMessage.sem = error.errors.sem.message : ""

        res.render("edit", {
            data: data,
            errorMessage: errorMessage
        })
    }
}
module.exports = {
    homePage: homePage,
    addPage: addPage,
    storePage: storePage,
    deletePage: deletePage,
    editPage: editPage,
    updatePage: updatePage
}
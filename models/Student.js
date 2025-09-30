const mongoose = require("mongoose")

const StudentSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name field is required"]
    },
    email: {
        type: String,
        required: [true, "Email field is required"]
    },
    phone: {
        type: String,
        required: [true, "Phone field is required"]
    },
    branch: {
        type: String,
        required: [true, "Branch field is required"]
    },
    sem: {
        type: Number,
        required: [true, "Semester field is required"]
    },
    city: {
        type: String,

    },
    state: {
        type: String,

    }
})

const Student = new mongoose.model("Student",StudentSchema)

module.exports = Student
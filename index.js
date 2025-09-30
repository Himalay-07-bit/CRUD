const express = require("express")
const path = require("path")
const hbs =require("hbs")


const Router = require("./routes/Router")
require("./db-connect")
const app = express()
app.set("view engine","hbs")
hbs.registerPartials(path.join(__dirname + "/views/partials"))

app.use("/",Router)

app.listen(8000,()=>{
   console.log( `Server is running at http://localhost:8000`)
})

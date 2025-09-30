require("mongoose")
.connect("mongodb://localhost:27017/CRUD")
.then(()=>{
    console.log("Database is connected")
})
.catch(error=>{
    console.log(error)
})
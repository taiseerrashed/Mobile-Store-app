const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
require("dotenv").config()
const mongoose = require('mongoose')
const routes = require("./routes/index.route")
const morgan = require('morgan')
const cookieParser = require("cookie-parser")

// Database connection
function dbConnection(){
    const url = process.env.DB_URL
    mongoose.connect(url) 
    .then(()=>{
        console.log("DB Connected !");
    })
    .catch((err)=>{
        console.log(err);
        console.log("DB not Connected !");
    })  
}


app.use(morgan("dev"))
app.use(express.json())
app.use(cookieParser())
app.use("/api/images" , express.static("./uploads"))

app.use("/api",routes)

app.all("*" , (req,res)=>{
    res.status(404).send({message: "Invalid Route !"})
})



app.listen(PORT , ()=>{
    dbConnection()
    console.log(`Server is Running on port ${PORT}`);
})
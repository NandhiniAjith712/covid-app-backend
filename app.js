const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const  patientRouter = require("./controller/patientrouter")

const app = express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://nandhini:nandhini8606@cluster0.rv1crhn.mongodb.net/patientDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
})
app.use("/api/patient",patientRouter)

app.listen(3004,()=>{
    console.log("Server is running")
})
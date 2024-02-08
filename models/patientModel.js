const mongoose = require("mongoose")

const patientSchema = new mongoose.Schema({
    patientName:String,
    patientPhoneno:String,
    patientAddress:String,
    patientSymptoms:String,
    patientStatus:String
})

module.exports= mongoose.model("patient_entry",patientSchema)



const mongoose = require('mongoose')

const NameSchema = new mongoose.Schema({
    name: { type: String, required: true, maxlength: 45, minlength: 3 }
}, { timestamps: true })

const Name = mongoose.model('Name', NameSchema)
console.log("name model was registered")
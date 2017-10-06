'use strict'
const mongoose = require('mongoose')
const Name = mongoose.model('Name')

module.exports = {
    show: function(req, res) {
        const name = Name.find({}).exec(function (err, name) {
            if (err) { console.log("something went wrong!") }
            res.send(name)
        })
    },
    add: function (req, res){
        const name = new Name({name: req.params.name})
        name.save(function (err) {
            if (err) { console.log("something went wrong!") }
            res.redirect('/')
        })
    },
    remove: function (req, res) {
        Name.remove({ name: req.params.name }, function(err) {
            if (err) { console.log("something went wrong!") };
            res.redirect('/')
        })
    },
    display: function (req, res) {
        console.log("hello")
        const name = Name.findOne({ name: req.params.name }).exec(function (err, name) {
            if (err) { console.log("something went wrong!") }
            res.send(name)
        })
    }
}
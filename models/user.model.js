const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    fullName:{
        type:String
    },

    email:{
        type:String
    },

    message:{
        type:String
    }
})

module.exports = mongoose.model('User', userSchema)

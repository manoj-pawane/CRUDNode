const mongoose = require('mongoose');
var User = require('../models/user.model');

module.exports.register = async (req, res)=>{
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.message =req.body.message

    var data = await user.save();
    console.log(data);
    res.send(data)
}
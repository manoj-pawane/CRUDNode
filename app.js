const express = require('express')
const bodyParser = require('body-parser')
var app = express();
var port = 3000
var rtxIndex = require('./routes/user.router')
var database = require('./config/database')
app.use(bodyParser.json());
app.use('/api', rtxIndex)
database.mongoose
app.listen(port, ()=>console.log('server listening at port number: '+port))
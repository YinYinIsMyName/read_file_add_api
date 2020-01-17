const express = require('express')
const route = express.Router()
const readTextRouter = require('./route.readtext')
route.use('/text',readTextRouter)
module.exports = route

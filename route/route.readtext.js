const {TextReadController} = require('../controller')
const express = require('express')
const route = express.Router()
route.post('/post',TextReadController.textPost)

module.exports = route


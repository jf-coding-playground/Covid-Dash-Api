const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const expressApp = express()
const routes = require('./express-routes')

expressApp.use(logger('dev'))
expressApp.use(express.json())
expressApp.use(express.urlencoded({ extended: false }))
expressApp.use(cookieParser())

expressApp.use('/api/v1', routes)

module.exports = expressApp

const express = require('express')
const router = express.Router()
const tweets = require('../tweets/tweets.routes')(router)

router.use('/tweets', tweets)

module.exports = router

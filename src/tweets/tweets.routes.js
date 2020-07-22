const tweetsController = require('./tweets.controllers')
const { getTweetsController } = tweetsController

module.exports = function (router) {
  router.get('/', getTweetsController)

  return router
}

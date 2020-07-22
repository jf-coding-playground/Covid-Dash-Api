const { getTweetsService } = require('./tweets.services')

exports.getTweetsController = async function (req, res) {
  const tweets = await getTweetsService()

  res.status(200)
  res.send({ tweets })
}

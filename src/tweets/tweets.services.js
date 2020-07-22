const twitter = require('../config/twitter')

exports.getTweetsService = async function () {
  const query = 'from:CNN coronavirus'
  const numOfTweets = 25
  const twitterResponse = await twitter.get('search/tweets', { q: query, count: numOfTweets })
  const tweets = twitterResponse.data.statuses

  return tweets
}

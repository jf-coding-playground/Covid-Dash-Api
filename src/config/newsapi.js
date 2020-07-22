const NewsAPI = require('newsapi')
const { NEWSAPI_API_KEY } = process.env
const newsapi = new NewsAPI(NEWSAPI_API_KEY)

module.exports = newsapi

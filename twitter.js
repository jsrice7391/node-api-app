var Twitter = require("twitter");
require("dotenv/config");

var client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
})
var params = {
    user_id: "FourGrainsOfRice",
    count: 20
}

module.exports = {
    get_tweets: function() {
        client.get('statuses/user_timeline', params, function(error, tweets, response) {
            if (error) {
                console.log("Something went wrong")
            } else {
                var theTweets = tweets;
                for (let tweet in theTweets) {
                    console.log("-------------------");
                    console.log(theTweets[tweet].text);
                    console.log("-------------------")
                }
            }
        });
    }
}
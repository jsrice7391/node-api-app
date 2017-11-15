var Spotify = require("node-spotify-api");
require("dotenv/config");


var client = new Spotify({
    id: process.env.SPOT_CLIENT_ID, // Your client id
    secret: process.env.SPOT_SECRET_KEY, // Your secret
});

module.exports = {

    get_songs: function(theTrackName) {
        client.search({ type: 'track', query: theTrackName, limit: 3 }, function(err, data) {
            if (err) {
                console.log('Error occurred: ' + err);
                return;
            } else {
                var the_tracks = data.tracks.items;
                for (let track in the_tracks) {
                    console.log("------------------------------")
                    console.log(the_tracks[track].name)
                    console.log(the_tracks[track].artists[0].name);
                    console.log(the_tracks[track].href);
                    console.log(the_tracks[track].album.name)
                }
            }

        })
    }

};
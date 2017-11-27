var Spotify = require("node-spotify-api");
require("dotenv/config");


var client = new Spotify({
    id: process.env.SPOT_CLIENT_ID, // Your client id
    secret: process.env.SPOT_SECRET_KEY, // Your secret
});

var params = {
    type: "track",
    query: "",
    limit: 3,
};

var def_search = {
    type: "track",
    query: "The Sign Ace of Base",
    id: "0hrBpAOgrt8RXigk83LLNE",
    limit: 1
};

function get_songs(the_search) {
    client.search(the_search, function(err, data) {
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

    });
}

module.exports = {
    get_songs: get_songs,
    params: params,
    default: def_search
};
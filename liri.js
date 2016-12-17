var fs = require('fs');
var keys = require('./keys.js');
var spotify = require('spotify');
var Twitter = require('twitter');
var client = new Twitter({
    consumer_key: 'AK2U8RhbDYdhOIPVcDCh25hVO',
    consumer_secret: 'jm1vjqaprKhhiraU2mgMXIdbCU9vHX4M0IWjbMwUcLgzpSeUS7',
    access_token_key: '798031413652180992-fJGV1EHTG3MlSL2Zb1K3YS3vc66CrOx',
    access_token_secret: 'Ww2d5uJaylDKlAJCIMZWnYTwi5SJitEIwrLYcmB21WQ7o',
});

var liriAction = process.argv[2];

// My Switch Statement
switch (liriAction) {
	case 'my-tweets':
		myTweets();
		break;

	case 'spotify-this-song':
		mySpotify();
		break;

	case 'movie-this':
		movieThis();
		break;

	case 'do-what-it-says':
		doWhat();
		break;

}


// Function for my Tweets
function myTweets() {
    var params = {
        screen_name: 'DePaulCubs77'
    };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (error) {
            console.log(error);
        } else {
            console.log(tweets);
        }
        // For Loop to display my last twenty tweets
        for (var i = 0; i < tweets.length; i++) {
            console.log(tweets[i].text);
        }
    });
}

// Spotify Function
function mySpotify(song) {
    var songTitle = song;
    if (songTitle === undefined) {
        songTitle = 'The Sign';
    }
    spotify.search({
            type: 'track',
            query: song
        }, function(err, data) {
            if (err) {
                console.log('Error occurred:' + err);
                return;
            } else {
                console.log("Artist name: " + data.tracks.items[i].artists[i].name);
                console.log("Song Name: " + data.tracks.items[i].name);
                console.log("Preview link for song:" + data.tracks.items[i].previews_url);
            }
        }
    );
}

// Movie Function
function movieThis() {
    var movieName = movieName;
    if (movieName === undefined) {
        movieName = "Mr. Nobody";
        request('http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&tomatoes=true&r=json', function(error, response, body) {
            if (!error && response.statusCode === 200) {}
            var moviesJson = JSON.parse(body);
            console.log('Title of movie:' + movies.Title);
            console.log('Year the movie came out:' + movies.Year);
            console.log('IMDB Rating of the movie' + movies.IMDBRating);
            console.log('Language of the movie' + movies.Language);
            console.log('Country where the movie was produced' + movies.Country);
            console.log('Plot of the movie' + movies.Plot);
            console.log('Actors in the movie' + movies.Actors);
            console.log('Rotten Tomates Rating;' + movies.rottenTomatoesRating);
            console.log('Rotten Tomates URL' + movies.rottenTomatesUrl);
        });
    }

function  doWhat() {
	fs.readFile('random.txt', 'utf8' function(err, data) {
		var dataArr = data.split(' , ');
	})
}
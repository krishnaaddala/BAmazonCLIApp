# BAmazonCLIApp
 This is an Amazon-like storefront with the addition of a MySQL backend. The app will take in orders from customers and deplete stock from the store's inventory.

## Table of contents
Technologies Used
Applications Used
Screenshots of homework progress
Code Snippets

## Technologies Used
Javascript
node.js
MySQL
Inquirer
Markdown

## Applications Used
GitHub
ChromeDev tools
Visual Studio Code
Chrome browser

## Screenshots of homework progress

![Code progression Final](https://github.com/krishnaaddala/BAmazonCLIApp/blob/master/Images/Working_code_1.png "Working code1")

![Code progression Final](https://github.com/krishnaaddala/BAmazonCLIApp/blob/master/Images/Working_code_2.png "Working Code2")


## Gif walkthrough

![Giphy](https://github.com/krishnaaddala/BAmazonCLIApp/blob/master/Images/FinalGify.gif)


## Code Snippets

```var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: ******,

    // Your username
    user: "root",

    // Your password
    password: "******",
    database: "bamazonDB"
});
  ```

  ```function bandsInTown(band) {
    var bandsUrl = "https://rest.bandsintown.com/artists/" + searchInput + "/events?app_id=codingbootcamp";
    axios.get(bandsUrl).then(function (response) {
        for (i = 0; i < response.data.length; i++) {
            var date = response.data[i].datetime;
            var momentDate = moment(date).format('MM/DD/YYYY');
            console.log("\n\n Venue Name: " + response.data[i].venue.name + "\n\n Venue City: " + response.data[i].venue.city + "\n\n Date Of the Event: " + momentDate + "\n\n *****************************************************************************************");
        }
        
    });
}
  ```

  ``` function spotifySongs(songName) {
    spotify.search({ type: 'track', query: searchInput, limit: 1 }, function (error, data) {
        if (!error) {
            for (var i = 0; i < data.tracks.items.length; i++) {
                var searchSong = data.tracks.items[i];
                console.log("\n\n Artist : " + searchSong.artists[i].name + "\n\n Song Name: " + searchSong.name + "\n\n Preview Link of song on Spotify : " + searchSong.preview_url + "\n\n Album Name : " + searchSong.album.name + "\n\n*************************************************************************************");

            }
        }
        else {
            return console.log('Error occurred: ' + error);
        }
    });
}
  ```
  ```function moviesDB(movie) {
    var queryUrl = "http://www.omdbapi.com/?t=" + searchInput + "&y=&plot=short&apikey=trilogy";

    axios.get(queryUrl).then(
        function (response) {
            console.log("\nTitle: " + response.data.title);
            console.log("\nYear: " + response.data.Year);
            console.log("\nIMDB Rating: " + response.data.imdbRating);
            console.log("\nRotten Tomatoes Rating: " + response.data.tomatoRating);
            console.log("\nCountry: " + response.data.Country);
            console.log("\nLanguage: " + response.data.Language);
            console.log("\nPlot: " + response.data.Plot);
            console.log("\nActors: " + response.data.Actors);
            console.log("\n*********************************************************************")
        });
}
  ```
Git commands:

```git status
    git add .
    git commit -m "message"
    git push origin master
    ```
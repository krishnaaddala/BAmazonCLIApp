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

  ```connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    lookupTable();
});
  ```

  ``` var purchasePrice = parseInt(inventory[i].price) * quantity;
                var product = inventory[i].product_name;
                // else decrement the quantity in the DB, mySQL statement UPDATE to decrement the stock_quantity
                connection.query("UPDATE products SET stock_quantity = stock_quantity-? WHERE item_id = ?", [quantity, item], function (err, res) {
                    if (err) throw err;
                    console.log("\n"+"You have successfully made your purchase! You got : " + product + "\n" + " & it costed you : $" + purchasePrice);
                    lookupTable();
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
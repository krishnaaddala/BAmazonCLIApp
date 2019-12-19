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
  ```for (i = 0; i < inventory.length; i++) {
        if (inventory[i].item_id == item) {
            // if the user chosen quantity is > stock quantity then console.log ("insufficient quantity")
            if (quantity > inventory[i].stock_quantity) {
                console.log("\n"+" Insufficient Quantity!" +"\n"+"\n");
                // if they ask too much call the function which inquires the user from the start on what they 
                //want to choose from the list of items.
                userPrompts(inventory);
  ```
  ```    inquirer.prompt(
        {
            type: "input",
            name: "item",
            message: "What Item do you want to purchase? Please enter the ID of purchase: [Press Q to Quit]"
        }
    ).then(function (userResponse1) {
        if (userResponse1.item.toLowerCase() === "q") {
            console.log("\n"+ "Thanks for visiting our store!"+"\n"+"\n");
            connection.end();
        }
        else {
            inquirer.prompt(
                {
                    type: "input",
                    name: "quantity",
                    message: "How many do you want to purchase? [Press Q to Quit]"
                }
            ).then(function (userResponse2)
  ```
  ```if (userResponse2.quantity.toLowerCase() === "q") {
                    console.log("Thanks for visiting our store!");
                    connection.end();
                }
                else {
                    //create a function with a multiple IF n ELSE
                    console.log("\n"+"Checking inventory..."+"\n"+"\n")
                    checkInventory(userResponse1.item, userResponse2.quantity, inventory);
                }
  ```
Git commands:

```git status
    git add .
    git commit -m "message"
    git push origin master
    ```
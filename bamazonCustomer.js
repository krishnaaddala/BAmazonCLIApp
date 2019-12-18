var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    //connection.end();
    lookupTable();
});

function lookupTable() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.table(res);
        userPrompts(res);
    });
}

function checkInventory(item, quantity, inventory) {
    console.log(item + "||" + quantity + "||");
    // console.table(inventory);
    console.log(JSON.stringify(inventory, null, 2));
    //create a function with a multiple IF n ELSE
    // we should check if how many of the chosen items are in the DB (SQL statement)
    for (i = 0; i < inventory.length; i++) {
        if (inventory[i].item_id === item) {
            if (quantity > inventory[i].stock_quantity) {
                console.log("insufficient quantity");
            }
        }
    }

    // if the user chosen quantity is > stock quantity then console.log ("insufficient quantity")
    // if they ask too much call the function which inquires the user from the start on what they 
    //want to choose from the list of items.
    // else decrement the quantity in the DB, mySQL statement UPDATE to decrement the stock_quantity
}

function userPrompts(inventory) {
    inquirer.prompt([
        {
            type: "input",
            name: "item",
            message: "What Item do you want to purchase? Please enter the ID of purchase: "
        },
        {
            type: "input",
            name: "quantity",
            message: "How many do you want to purchase?"
        },
        // After the prompt, store the user's response in a variable called location.
    ]).then(function (userResponse) {
        if (userResponse === "Q") {
            console.log("Thanks for visiting our store!");
            connection.end();
        }
        else {
            //create a function with a multiple IF n ELSE
            checkInventory(userResponse.item, userResponse.quantity, inventory);
            // we should check if how many of the chosen items are in the DB (SQL statement)
            // if the user chosen quantity is > stock quantity then console.log ("insufficient quantity")
            // if they ask too much call the function which inquires the user from the start on what they 
            //want to choose from the list of items.
            // else decrement the quantity in the DB, mySQL statement UPDATE to decrement the stock_quantity
            //
        }
        // console.log(location.userInput);
        //     // Then use the Google Geocoder to Geocode the address
        //     geocoder.geocode(location.userInput, function(err, data) {
        //       console.log(JSON.stringify(data, null, 2));
        //     });
    });
}


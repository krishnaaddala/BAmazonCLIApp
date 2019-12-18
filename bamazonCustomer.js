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
    //console.log(JSON.stringify(inventory, null, 2));
    for (i = 0; i < inventory.length; i++) {
        if (inventory[i].item_id == item) {
            // if the user chosen quantity is > stock quantity then console.log ("insufficient quantity")
            if (quantity > inventory[i].stock_quantity) {
                console.log("Insufficient Quantity!");
                // if they ask too much call the function which inquires the user from the start on what they 
                //want to choose from the list of items.
                userPrompts(inventory);
            }
            else {
                var purchasePrice = parseInt(inventory[i].price) * quantity;
                console.log(purchasePrice);
                var product = inventory[i].product_name;
                // else decrement the quantity in the DB, mySQL statement UPDATE to decrement the stock_quantity
                connection.query("UPDATE products SET stock_quantity = stock_quantity-? WHERE item_id = ?", [quantity, item], function (err, res) {
                    if (err) throw err;
                    console.log("You have successfully made your purchase! " + product + "\n" + " & it costed you " + purchasePrice);
                    lookupTable();
                });
            }
        }
    }

}

function userPrompts(inventory) {

    inquirer.prompt(
        {
            type: "input",
            name: "item",
            message: "What Item do you want to purchase? Please enter the ID of purchase: [Press Q to Quit]"
        }
    ).then(function (userResponse1) {
        if (userResponse1.item.toLowerCase() === "q") {
            console.log("Thanks for visiting our store!");
            connection.end();
        }
        else {
            inquirer.prompt(
                {
                    type: "input",
                    name: "quantity",
                    message: "How many do you want to purchase? [Press Q to Quit]"
                }
            ).then(function (userResponse2) {
                if (userResponse.quantity.toLowerCase() === "q") {
                    console.log("Thanks for visiting our store!");
                    connection.end();
                }
                else {
                    //create a function with a multiple IF n ELSE
                    checkInventory(userResponse.item, userResponse.quantity, inventory);
                }

            });
        }
    })
};



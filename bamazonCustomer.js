//require mysql + inquirer
var mysql = require("mysql");
var inquirer = require("inquirer");
//create connection w mysql
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "password",
    database: "bamazon"
  });
  connection.connect(function(err) {
      if (err) throw err;
      console.log("connected as id " + connection.threadId);
      viewAllProducts();
  });

//first display all of the items available for sale. 
//Include the ids, names, and prices of products for sale
//to be printed within dtb to terminal
function viewAllProducts() {
var q = "SELECT * FROM goods";
connection.query(q, function (err, res) {
    if (err) throw err;
    console.log(res);
});
}


//       //hand off a query string - string literal argument - 
//       connection.query("SELECT * FROM products", 
//       //callback function to be excuted once query has been executed
//       function(err, res) {
//           if (err) throw err;
//           //reiterate through the response and format
//           for (var i = 0; i < res.length; i++) {
//               //alt: separate function that takes in an array and formats
//               console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].price + " | " + res.[i].stock_quantity + " | " + res[i].department_name + " | ")
//           }  
//               console.log("----------------------------------");
//           });
        

  



//prompt users with two messages.
//The first should ask them the ID of the product they would like to buy.
//The second message should ask how many units of the product they would like to buy.


// check if your store has enough of the product to meet the customer's request.

//If not, the app should log a phrase like Order Unable to be Fulfilled! Stock Manager Contacted, 
//and then prevent the order from going through.

//if your store does have enough of the product, 
//you should fulfill the customer's order.

//updating the SQL database to reflect the remaining quantity.
//Once the update goes through, 
//show the customer the total cost of their purchase.

//require mysql + inquirer + CLI Table
var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table2");
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
console.log("--------------------------------------------------------------------");
console.log("This is a tribute to the performers on the beautiful stages from Broadway to the screen. ");
console.log("This is a tribute to the performers on the beautiful stages from Broadway to the screen. ");
console.log("This is a tribute to the performers on the beautiful stages from Broadway to the screen. ");
console.log("This is a tribute to the performers on the beautiful stages from Broadway to the screen. ");
console.log("--------------------------------------------------------------------");
connection.query(q, function (err, res) {
    if (err) throw err;
    // console.log(res);
//reiterate through the response and format
for (var i = 0; i < res.length; i++) {
//alt: separate function that takes in an array and formats
table.push([res[i].Product_name + " | " + res[i].Price + " | " + res[i].Stock_quantity + " | " + res[i].Department_name + " | "]);
};
    console.log(table.toString());  
    console.log("--------------------------------------------------------------------");
    viewAllProducts();
  });
};


// //prompt users with two messages.
// // first function which prompts the user for what action they should take
// //The first should ask them the ID of the product they would like to buy.
// //The second message should ask how many units of the product they would like to buy.
// function artistSearch() {
//     inquirer
//       .prompt(
//           {
//         name: "productId",
//         type: "input",
//         message: "Please select the ID of the artifact you would like to buy."
//       }) 
//       // ,
//       // {
//       //     name: "quantity",
//       //     type: "input",
//       //     message: "Please insert the quantity you wish to purchase"
//       // }
//       // )
//       .then(function(answer) {
//         //get info of chosen answer
//           //sanitation - ignores user input after a semicolon
//           var chosenItem;
//           for (var i = 0; i < results.length; i++) {
//             if (results[i].item_name === answer.choice) {
//               chosenItem = results[i];
//             }
//         var query = "SELECT position, song, year FROM top5000 WHERE ?";
//         connection.query(query, { artist: answer.artist }, function(err, res) {
//           for (var i = 0; i < res.length; i++) {
//             console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
//           }
//           runSearch();
//         });
//       });
//   }

// check if your store has enough of the product to meet the customer's request.

//If not, the app should log a phrase like Order Unable to be Fulfilled! Stock Manager Contacted, 
//and then prevent the order from going through.

//if your store does have enough of the product, 
//you should fulfill the customer's order.

//updating the SQL database to reflect the remaining quantity.
//Once the update goes through, 
//show the customer the total cost of their purchase.

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
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  viewAllProducts();
});

//first display all of the items available for sale. 
//Include the ids, names, and prices of products for sale
//to be printed within dtb to terminal
function viewAllProducts() {
  var q = "SELECT * FROM goods";
  console.log("----------------------------------------------------------------------------------------------------------");
  console.log("Welcome. We have prized collector items from Broadway and the backstage of movies that have brought joy");
  console.log("and memories. The breaking, the healing, of music that have brought you to tears. Step back and gaze at");
  console.log("rare artifacts of poetry that you need to display in your living room or keep hidden to treasure. These");
  console.log("goods have traveled and survived many stories to get to you. Shipping is free, and satisfaction is guaranteed!");
  console.log("----------------------------------------------------------------------------------------------------------");
  var table = new Table({
    head: ["id", "Product_name", "Price", "Stock_quantity", "Department_name"],
    colWidths: [5, 70, 10, 20],
    style: {
      head: ["green"]
    }
  });

  connection.query(q, function (err, res) {
    if (err) throw err;
    // console.log(res);
    //reiterate through the response and format
    for (var i = 0; i < res.length; i++) {
      //alt: separate function that takes in an array and formats
      table.push([res[i].id, res[i].Product_name, res[i].Price, res[i].Stock_quantity, res[i].Department_name]);
    };
    console.log(table.toString());
    console.log("--------------------------------------------------------------------");
    customerSelect();
  });

};

function customerSelect() {
  inquirer
    .prompt(
      [{
        name: "productId",
        type: "input",
        message: "Please select the ID of the prized item you would like to buy."
      },
        // {
        //   name: "quantity",
        //   type: "input",
        //   message: "How many you would like to buy."
        // }
      ]
    )
    //dont forget to close the [] arrays bc the prompt knows there are two questions. 
    .then(function (inquirerResponse) {
      // console.log(inquirerResponse);
      //below is the pass inquirer response.pronct id is the answer, 
      //and give it to the new function in 81 and show up as a placeholder. this will become idSelected
      quantitySelect(inquirerResponse.productId);
    });
}
function quantitySelect(idSelected) {
  // console.log("inside our quantity function", idSelected);
  //database call to ask how many to buy
  connection.query(
        "SELECT * FROM goods WHERE id = " + idSelected, function(err, res){
          // console.log(res[0].Product_name, err);
          howManyPrompt(res[0]);
          //res is the goods. the index 0 to pick this whole object from the array then .product_name
      });
}
function howManyPrompt(productToBuy) {
// console.log("productToBuy", productToBuy);
inquirer.prompt (
  [
    {
      name: "quantity",
      type: "input",
      message: productToBuy.Product_name + "... How many you would like to buy."
    }
  ]
)
.then(function (inquirerResponse) {
  // console.log(inquirerResponse); 
  if (inquirerResponse.quantitySelect > productToBuy.Stock_quantity) {
console.log("Not enough in stock")
  }
  else {
    console.log("You got it! Enjoy!")
    //from ln 97 quanityt
    var newTotal = parseInt(productToBuy.Stock_quantity) - parseInt(inquirerResponse.quantity);
    // console.log("newTotal", newTotal)
    // console.log("productToBuy", productToBuy)
    // console.log("inquirerResponse", inquirerResponse)
    var query = "UPDATE goods SET Stock_quantity = " + newTotal + " WHERE id = " + productToBuy.id;
    connection.query(query, function(err, res){
// console.log(err, res)
    });
  }
});
}
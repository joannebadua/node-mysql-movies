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
var table = new Table({
  head: ["id", "Product_name", "Price", "Stock_quantity", "Department_name"],
  colWidths: [5, 70, 10, 20],
  style:{
    head: ["gold"]
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
          {
        name: "productId",
        type: "input",
        message: "Please select the ID of the prized item you would like to buy."
      },
      {
        name: "quantity",
        type: "input",
        message: "How many you would like to buy."
      }) 
      .then(function(inquirerResponse) {
        var query = connection.query(
          "SELECT * FROM goods WHERE id ?", inquirerResponse.productId, function(err, res){
            console.log(res);
        });
      });
    }
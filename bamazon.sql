DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE goods (
  id INT NOT NULL AUTO_INCREMENT,
  Product_name VARCHAR(45) NULL,
  Price DECIMAL (10,2) NULL,
  Stock_quantity INT NULL,
  Department_name VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

INSERT INTO goods (product_name, price, stock_quantity, department_name)
VALUES ("Ray Charles poster", 25.00, 100, "music");

INSERT INTO goods (product_name, price, stock_quantity, department_name)
VALUES ("Alexander Hamilton Reynolds Pamphlet", 3.10, 120, "broadway");

INSERT INTO goods (product_name, price, stock_quantity, department_name)
VALUES ("Roger's Guitar from Rent", 325.00, 75, "broadway");

INSERT INTO goods (product_name, price, stock_quantity, department_name)
VALUES ("Vita and Virginia love letters", 75.50, 20, "movies");

INSERT INTO goods (product_name, price, stock_quantity, department_name)
VALUES ("Dance shoes from Coming Up Queer", 100.00, 12, "movies");

INSERT INTO goods (product_name, price, stock_quantity, department_name)
VALUES ("Wicked broom", 500.00, 5, "broadway");

INSERT INTO goods (product_name, price, stock_quantity, department_name)
VALUES ("Red Coat from the Greatest Showman", 2500.00, 2, "movies");

INSERT INTO goods (product_name, price, stock_quantity, department_name)
VALUES ("King George's Crown from Alexander Hamilton", 3000.00, 1, "broadway");

INSERT INTO goods (product_name, price, stock_quantity, department_name)
VALUES ("Elton John's piano", 75000, 2, "music");

INSERT INTO goods (product_name, price, stock_quantity, department_name)
VALUES ("Cans from Beastie Boy's Make Some Noise", 20.25, 75, "music");
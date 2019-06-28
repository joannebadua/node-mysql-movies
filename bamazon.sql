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
VALUES ("Autographed Ray Charles poster", 50, 10, "music");

INSERT INTO goods (product_name, price, stock_quantity, department_name)
VALUES ("Magical Carpet from Alladin", 1000, 1, "broadway");

INSERT INTO goods (product_name, price, stock_quantity, department_name)
VALUES ("Roger's Guitar from Rent", 325.00, 5, "broadway");

INSERT INTO goods (product_name, price, stock_quantity, department_name)
VALUES ("Vita and Virginia love letters", 20, 9, "movies");

INSERT INTO goods (product_name, price, stock_quantity, department_name)
VALUES ("Dance shoes from Coming Up Queer", 70, 6, "movies");

INSERT INTO goods (product_name, price, stock_quantity, department_name)
VALUES ("Wicked broom", 500.00, 3, "broadway");

INSERT INTO goods (product_name, price, stock_quantity, department_name)
VALUES ("Red Coat from the Greatest Showman", 2500.00, 1, "movies");

INSERT INTO goods (product_name, price, stock_quantity, department_name)
VALUES ("King George's Crown from Alexander Hamilton", 3000.00, 2, "broadway");

INSERT INTO goods (product_name, price, stock_quantity, department_name)
VALUES ("Elton John's piano", 75000, 2, "music");

INSERT INTO goods (product_name, price, stock_quantity, department_name)
VALUES ("Cans from Beastie Boy's Make Some Noise", 20.25, 20, "music");
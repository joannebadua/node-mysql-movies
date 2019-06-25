DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  price DECIMAL (10,2) NULL,
  stock_quantity INT NULL,
  department_name VARCHAR(45) NULL,
  PRIMARY KEY (id)
);
INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("Ray Charles poster", 25.00, 100, music);

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("Alexander Hamilton Reynolds Pamphlet", 3.10, 120, broadway);

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("Roger's Guitar from Rent", 3.25, 75, broadway);

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("Vita and Virginia love letters", 75.50, 20, movies);

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("Dance shoes from Coming Up Queer", 100.00, 12, movies);

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("Wicked broom", 500.00, 5, broadway);

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("Red Coat from the Greatest Showman", 2500.00, 2, movies);

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("King George's Crown from Alexander Hamilton", 3000.00, 1);

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("Elton John's piano", 75,000, 2, music);

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("Cans from Beastie Boy's Make Some Noise", 20.25, 75, music);
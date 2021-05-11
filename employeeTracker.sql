DROP DATABASE IF EXISTS employeeTrackerDB;
CREATE DATABASE employeeTrackerDB;
USE employeeTrackerDB;


CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  departmentName VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  salary INTEGER NULL,
  department_id INTEGER NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(45) NULL,
  lastName VARCHAR(45) NULL,
  roleID INTEGER NULL,
  managerID INTEGER, 
  PRIMARY KEY (id)
);

INSERT INTO department(departmentName)
VALUES ("Information Management"), ("bananas"), ("Human Resources"), ("Sales"), ("Research & Development"), ("Customer Sercive");

INSERT INTO role (title, salary, department_ID) 
VALUES ("developer", 90000 ,1), ("director", 95000 ,2), ("manager", 92500 ,3);

INSERT INTO employee (firstName, LastName, roleID, managerID) 
VALUES ("Robert", "Dinero", 1, 3), ("Billy", "Idol", 3, 3),("Price", "Philip", 2, 3),("Queen", "Elizabeth", 1, 2); 
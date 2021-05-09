DROP DATABASE IF EXISTS employeeTrackerDB;
CREATE DATABASE employeeTrackerDB;
USE employeeTrackerDB;
CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  departmentName VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE theirRole(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  salary DECIMAL NULL,
  department_id INTEGER NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(45) NULL,
  lastName DECIMAL NULL,
  roleID INTEGER NULL,
  managerID INTEGER, 
  PRIMARY KEY (id)
);
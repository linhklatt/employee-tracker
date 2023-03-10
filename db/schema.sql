DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

-- department table
CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) 
);

-- role table
CREATE TABLE role(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT
);
-- employee table
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) ,
  last_name VARCHAR(30) ,
  role_id INT  ,
  manager_id INT 
  
);

SELECT * 
FROM employee;

SELECT *
FROM department;

SELECT * 
FROM role;
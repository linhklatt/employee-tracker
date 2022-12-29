// get the client
const mysql = require("mysql2");
// Import inquirer
const inquirer = require("inquirer");

// create the connection to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "root",
    database: "employee_db",
  },
  console.log(`Connected to the employee_db database.`)
);

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

// show the title for the employee tracker table
console.log("------------EMPLOYEE MANAGER------------");

// the app questions
const startQuestion = [
  {
    type: "list",
    message: "Hello, would you like to start using the database?",
    name: "name",
    choices: ["Start", "Quit"],
  },
];
// list of questions

const mainQuestion = [
  {
    type: "list",
    message: "What would you like to do?",
    name: "choice",
    choices: [
      "View All Employees",
      "Add Employee",
      "Update Employee Role",
      "View All Roles",
      "Add Role",
      "View All Departments",
      "Add Department",
      "Quit",
    ],
  },
];

// Function to view all department table
function viewAllDepartments() {
  db.query("SELECT * FROM department"),
    function (err, results) {
      console.table(results);
    };
}

// Function to view all role table
function viewAllRoles() {
  db.query("SELECT * FROM role"),
    function (err, results) {
      console.table(results);
    };
}
// Function to view all employee table
function viewAllEmployees() {
  db.query("SELECT * FROM employee"),
    function (err, results) {
      console.table(results);
    };
}

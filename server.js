// get the client
const mysql = require("mysql2");
// Import inquirer
const inquirer = require("inquirer");
const table = require("console.table");
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
  function (err) {
    if (err) {
      console.error("Error connecting to the database:", err);
      return;
    }

    console.log(`Connected to the employee_db database.`);
  }
);
/***********************************************************/
// show the title for the employee tracker table
console.log("------------EMPLOYEE MANAGER------------");
/***********************************************************/
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
/***********************************************************/
// Function to view all department table
function viewAllDepartments() {
  db.query("SELECT * FROM department", function (err, results) {
    console.table(results);
    mainQuestionFunction();
  });
}

// Function to view all role table
function viewAllRoles() {
  db.query("SELECT * FROM role", function (err, results) {
    console.table(results);
    mainQuestionFunction();
  });
}
// Function to view all employee table
function viewAllEmployees() {
  db.query("SELECT * FROM employee", function (err, results) {
    console.table(results);
    mainQuestionFunction();
  });
}
/***********************************************************/
// Employee Questions
let newEmployee = [];

const employeeQuestions = [
  {
    type: "input",
    message: "What is the employee's first name?",
    name: "firstName",
  },
  {
    type: "input",
    message: "What is the employee's last name?",
    name: "lastName",
  },

  {
    type: "list",
    message: "What is the employee's role?",
    name: "role",
    choices: [
      "Sales Lead",
      "Sales Person",
      "Lead Engineer",
      "Software Engineer",
      "Account Manager",
      "Accountant",
      "Legal Team Lead",
      "Lawyer",
    ],
  },
  {
    type: "list",
    message: "Who is the employee's manager?",
    name: "manager",
    choices: [
      "John Doe",
      "Mike Chan",
      "Ashley Rodriquez",
      "Kevin Tupik",
      "Kunal Singh",
      "Malia Brown",
      "Sarah Lourd",
      "Tom Allen",
    ],
  },
];
/***********************************************************/
// Role Questions
let newRole = [];

const roleQuestions = [
  {
    type: "input",
    message: "What is the name of the role?",
    name: "roleName",
  },
  {
    type: "input",
    message: "What is the salary of the role?",
    name: "roleSalary",
  },

  {
    type: "list",
    message: "What department does the role belong to?",
    name: "roleDepartment",
    choices: ["Sales", "Engineering", "Finance", "Legal"],
  },
];
/***********************************************************/
// Department Questions
let newDepartment = [];
const departmentQuestions = [
  {
    type: "input",
    message: "What is the name of the department?",
    name: "departmentName",
  },
];
/***********************************************************/
// Update Employee
let newUpdate = [];
const updateQuestions = [
  {
    type: "list",
    message: "Which employee's role do you want to update?",
    name: "updateName",
    choices: [
      "John Doe",
      "Mike Chan",
      "Ashley Rodriquez",
      "Kevin Tupik",
      "Kunal Singh",
      "Malia Brown",
      "Sarah Lourd",
      "Tom Allen",
    ],
  },

  {
    type: "list",
    message: "What role do you want to assign to the selected employee?",
    name: "updateAssign",
    choices: [
      "Sales Lead",
      "Sales Person",
      "Lead Engineer",
      "Software Engineer",
      "Account Manager",
      "Accountant",
      "Legal Team Lead",
      "Lawyer",
    ],
  },
];

/***********************************************************/
// Prompting questions
inquirer.prompt(startQuestion).then((answers) => {
  if (answers.name === "Quit") {
    return;
  } else {
    mainQuestionFunction();
  }
});

function mainQuestionFunction() {
  inquirer.prompt(mainQuestion).then((answers) => {
    if (answers.choice === "View All Employees") {
      viewAllEmployees();
    } else if (answers.choice === "View All Roles") {
      viewAllRoles();
    } else if (answers.choice === "View All Departments") {
      viewAllDepartments();
    } else if (answers.choice === "Add Employee") {
      inquirer.prompt(employeeQuestions).then((answers) => {
        let employeeInputFirstName = [`${answers.firstName}`];
        let employeeInputLastName = [`${answers.lastName}`];
        let employeeInputRole = [`${answers.role}`];
        let employeeInputManager = [`${answers.manager}`];
        let newEmployeeInput = [
          `${employeeInputFirstName},${employeeInputLastName},${employeeInputRole},${employeeInputManager}`,
        ];
        newEmployee.push(newEmployeeInput);

        db.query(
          `INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("${answers.firstName}","${answers.lastName}", 1,null)`,
          function (err, results) {
            if (err) throw err;
          }
        );
        console.log(newEmployee);
        console.log(
          `Added ${answers.firstName} ${answers.lastName} to the database`
        );
        mainQuestionFunction();
      });
    } else if (answers.choice === "Add Role") {
      inquirer.prompt(roleQuestions).then((answers) => {
        let roleInputName = [`${answers.roleName}`];
        let roleInputSalary = [`${answers.roleSalary}`];
        let roleInputDepartment = [`${answers.roleDepartment}`];
        let newRoleInput = [
          `${answers.roleName},${answers.roleSalary},${answers.roleDepartment}`,
        ];
        newRole.push(newRoleInput);

        db.query(
          `INSERT INTO role(tile, salary, department_id) VALUES ("${roleInputName}","${roleInputSalary}", ${roleInputDepartment})`,
          function (err, results) {
            if (err) throw err;
          }
        );
        console.log(newRole);
        console.log(`Added ${answers.roleName}to the database`);
        mainQuestionFunction();
      });
    } else if (answers.choice === "Add Department") {
      inquirer.prompt(departmentQuestions).then((answers) => {
        let departmentInput = [`${answers.departmentName}`];

        newDepartment.push(departmentInput);

        db.query(
          `INSERT INTO department(name) VALUES ("${departmentInput}")`,
          function (err, results) {
            if (err) throw err;
          }
        );
        console.log(newDepartment);
        console.log(`Added ${answers.departmentName}to the table`);
        mainQuestionFunction();
      });
    } else if (answers.choice === "Update Employee Role") {
      inquirer.prompt(updateQuestions).then((answers) => {
        let updateInput = [`${answers.updateName}, ${answers.updateAssign}`];

        newUpdate.push(updateInput);

        db.query(
          `INSERT INTO department(name) VALUES ("${updateInput}")`,
          function (err, results) {
            if (err) throw err;
          }
        );
        console.log(newUpdate);
        console.log(`Updated employee's role!`);
        mainQuestionFunction();
      });
    } else if (answers.choice === "Quit") {
      return mainQuestionFunction();
    }
  });
}

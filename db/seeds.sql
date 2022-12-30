INSERT INTO department (id, name)
VALUES (1, "Sales"),
       (2, "Engineering"),
       (3, "Finance"),
       (4, "Legal");



INSERT INTO role (id ,title, salary, department_id)
VALUES (1, "Sales Lead", 100000, 1),
       (2,"Salesperson", 80000, 1),
       (3,"Lead Engineer", 150000, 2),
       (4,"Software Engineer", 120000, 2),
       (5,"Account Manager", 160000, 3),
       (6,"Accountant", 125000, 3),
       (7,"Legal Team Lead", 250000, 4),
       (8,"Lawyer", 190000, 4);

       

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "John", "Doe", 1,NULL),
       (2, "Mike", "Chan", 1, 1),
       (3, "Ashley", "Rodriguez", 1, NULL),
       (4, "Kevin", "Tupik", 1, 3),
       (5, "Kunal", "Singh", 1, NULL),
       (6, "Malia", "Brown", 1, 5),
       (7, "Sarah", "Lourd", 1, NULL),
       (8, "Tom", "Allen", 1, 7);

-- SELECT
-- employee.id,
-- employee.first_name,
-- employee.last_name,
-- role.title,
-- department.name AS department,
-- role.salary,
-- CONCAT(manager.first_name, " ", manager.last_name) AS manager
-- FROM
-- employee
-- LEFT JOIN
-- role ON employee.role_id = role.id
-- LEFT JOIN
-- department on role.department_id = department.id
-- LEFT JOIN
-- employee manager on manager_id = employee.manager_id
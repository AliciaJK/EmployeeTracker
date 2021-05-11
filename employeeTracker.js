//CONNECTIONS
const mysql = require('mysql');
const inquirer = require('inquirer');


//CREATE THE SERVER
const connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'password',
	database: 'employeeTrackerDB',
});


//GIVE THE USER OPTIONS
const promptUser = () => {
	return inquirer.prompt([
		{
			type: 'list',
			name: 'options',
			message: 'What action would you like to take?',
			choices: [
				"VIEW DEPARTMENTS",
				"VIEW EMPLOYEE ROLES",
				"VIEW EMPLOYEES",

				"ADD AN EMPLOYEE",
				"ADD A DEPARTMENT",
				"ADD A ROLE",

				"UPDATE AN EXISTING EMPLOYEE"],
		},
	])

		//MENU TREE
		.then((response) => {
			switch (response.options) {
				case "ADD AN EMPLOYEE":
					addEmployee();
					break;
				case "ADD A DEPARTMENT":
					addDepartment();
					break;
				case "ADD A ROLE":
					addRole();
					break;
				case "VIEW DEPARTMENTS":
					viewDepartment();
					break;
				case "VIEW EMPLOYEE ROLES":
					viewRole();
					break;
				case "VIEW EMPLOYEES":
					viewEmployees();
					break;
				case "UPDATE AN EXISTING EMPLOYEE":
					updateEmployee();
					break;
			}
		})
}
//CALLING THE FUNCTION
promptUser();

//VIEW EMPLOYEE
function viewEmployees() {
	console.log("Adding employee...")
	connection.query('SELECT * FROM employee', function (err, res) {
		console.table(res)
	});
}

//VIEW DEPARTMENT
function viewDepartment() {
	console.log("Viewing departments...")
	connection.query('SELECT * FROM department', function (err, res) {
		console.table(res)
	});
}

//VIEW ROLE
function viewRole() {
	console.log("Viewing departments...")
	connection.query('SELECT * FROM role', function (err, res) {
		console.table(res)
	});
}


//ADD EMPLOYEE
function addEmployee() {
	console.log("Adding Employee...")

		const promptUser = () => {
			return inquirer.prompt([
				{
					type: 'choice',
					name: 'options',
					message: 'What action would you like to take?',
					choices: [
						"VIEW DEPARTMENTS",
						"VIEW EMPLOYEE ROLES",
						"VIEW EMPLOYEES",

						"ADD AN EMPLOYEE",
						"ADD A DEPARTMENT",
						"ADD A ROLE",

						"UPDATE AN EXISTING EMPLOYEE"],
				},
			])
		}
			promptUser();

		connection.query('SELECT * FROM employee', function (err, res) {
			console.table(res)
		});

	}

	//ADD DEPARTMENT	
	function addDepartment() {
		console.log("Adding Employee...")
		connection.query('SELECT * FROM departmenr', function (err, res) {
			console.table(res)
		});
	}

	//ADD ROLE
	function addRole() {
		console.log("Viewing roles...")
		connection.query('SELECT * FROM role', function (err, res) {
			console.table(res)
		});
	}

	//UPDATE EMPLOYEE ROLE
	function updateEmployee() {
		console.log("Updating roles...")
		connection.query('SELECT * FROM role', function (err, res) {
			console.table(res)
		});
	}










// function viewEmployees() {
// 	console.log("viewing employee...")
// 	connection.query(`SELECT 
//         employee.id,
//         employee.firstName,
//         employee.lastName,
//         role.title,
//         department.departmentName,
//         role.salary,

//         FROM employee  
//         LEFT OUTER JOIN employee ON emloyee.managerID = employee.id 
//         INNER JOIN role ON (role.ID = emoloyee.id) 
//         INNER JOIN department ON (department.departmentName = role.department_id) 
//         ORDER BY emloyee.employee_id;
//         `, (err, res) => {
// 		if (err) throw err;
// 		res.forEach(({ ID, firstName, lastName, title, departmentName, salary, Manager_Name }) => {
// 			employeeArray.push([employee_id, first_name, last_name, title, department_name, salary, Manager_Name]);
// 		});
// 		console.table(["ID", "First Name", "Last Name", "Title", "Department", "Salary", "Manager"], employeeArray);
// 		start();
// 	});
// }




// role.id, role.title, role.salary
// console.log("Adding employee")
// const promptUser = () => {
// 	return 
// this is my employee function
// call employee function
// inquirer.prompt([
// 	{
// 		type: 'input',
// 		name: 'employeeFirstName',
// 		message: 'Employee first name: ',
// 		input: ''
// 	},
// ])

//   } else if(response.menu === "promptUser") {

					// } else {
					//   endTeam();
// 				}
		// 	}
		// })

// }

// promptUser();

// //take that and print it to mysql with the following: 
// // UPDATE EXISTING EMPLOYEE
// const updateEmployee = () => {
// 	console.log('Updating all employees with the name...\n');
// 	const query = connection.query(
// 		'UPDATE employee SET ? WHERE ?',
// 		[
// 			{
// 				firstName: firstName,
// 			},
// 			{
// 				lastname: lastname,
// 			},
// 			//HOW DO I ADD MULTIPLE UPDATE EMPLOYEE FILES
// 		],
// 		(err, res) => {
// 			if (err) throw err;
// 			console.log(`${res.affectedRows} products updated!\n`);
// 			// Call deleteProduct AFTER the UPDATE completes
// 			updateEmployee();
// 		}
// 	);

// 	// logs the actual query being run
// 	console.log(query.sql);
// };






// const deleteEmployee = () => {
// 	console.log('Deleting all strawberry icecream...\n');
// 	connection.query(
// 		'DELETE FROM employee WHERE ?',
// 		{
// 			lastName: employeeLastName,
// 		},
// 		(err, res) => {
// 			if (err) throw err;
// 			console.log(`${res.affectedRows} products deleted!\n`);
// 			// Call readProducts AFTER the DELETE completes
// 			deleteemployee();
// 		}
// 	);
// };



// const addEmployee = () => {
// 	console.log('Inserting a new product...\n');
// 	const query = connection.query(
// 		'INSERT INTO products SET employee',
// 		{
// 			item: 'gold fish',
// 			category: "pet",
// 			startBid: 50,
// 		},
// 		(err, res) => {
// 			if (err) throw err;
// 			console.log(`${res.affectedRows} product inserted!\n`);
// 			// Call updateProduct AFTER the INSERT completes
// 			addEmployee();
// 		}
// 	);
// }
// // ADD DEPARTMENT
// const addDepartment = () => {
// 	inquirer.prompt([
// 		{
// 			name: "newDepartment",
// 			type: "input",
// 			message: "Please enter a new department name.",
// 			// validate:
// 		}
// 	]).then((answer) => {
// 		connection.query("INSERT INTO department (department_name) VALUES (?)", answer.newDepartment, (err, res) => {
// 			if (err) throw err;
// 			console.log("The department was successfully added.")
// 			viewDepartment();
// 		})
// 	})

// }
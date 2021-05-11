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

				"UPDATE AN EXISTING EMPLOYEE ROLE",
				"UPDATE AN EXISTING EMPLOYEE DEPARTMENT"],
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
				case "VIEW EMPLOYEES":
					viewEmployees();
					break;
				case "VIEW DEPARTMENTS":
					viewDepartment();
					break;
				case "VIEW EMPLOYEE ROLES":
					viewRole();
					break;
				case "UPDATE AN EXISTING EMPLOYEE ROLE":
					updateEmployeeRole();
					break;
				case "UPDATE AN EXISTING EMPLOYEE DEPARTMENT":
					updateEmployeeDepartment();
					break;
			}
		})
}
//CALLING THE FUNCTION
promptUser();

//VIEW EMPLOYEE
function viewEmployees() {
	console.log("Viewing employee...")
	connection.query('SELECT employee.firstName, employee.lastName,	role.title,	role.salary, department.departmentName FROM employee LEFT JOIN role ON employee.roleID = role.id JOIN department ON role.id = department.id;', function (err, res) {
		console.table(res)
		promptUser();
	});
}

//VIEW DEPARTMENT
function viewDepartment() {
	console.log("Viewing departments...")
	connection.query('SELECT * FROM department', function (err, res) {
		console.table(res)

	});
	promptUser();
}

//VIEW ROLE
function viewRole() {
	console.log("Viewing departments...")
	connection.query('SELECT * FROM role', function (err, res) {
		console.table(res)
	});
	promptUser();
}


//ADD EMPLOYEE
function addEmployee() {
	console.log("Employee added successfully!")

	const promptUser = () => {
		return inquirer.prompt([
			{
				type: 'input',
				name: 'firstName',
				message: 'What is their first name?',
			},
			{
				type: 'input',
				name: 'lastName',
				message: 'What is their last name?',
			},
			{
				type: 'input',
				name: 'roleID',
				message: 'What will be their role ID?',
			},
			{
				type: 'input',
				name: 'managerID',
				message: 'Who will be their manager ID?',
			},

		])
			.then((response) => {
				console.log(response)
				console.log("Adding a new employee...")
				connection.query('INSERT INTO employee SET ?',
					{
						firstName: response.firstName,
						lastName: response.lastName,
						roleID: response.roleID,
						managerID: response.managerID
					},

					function (err, res) {
						console.table(res)
						console.table(err)
					})
			})
	}
	promptUser();

}


//ADD DEPARTMENT	
function addDepartment() {
	console.log("Adding Department...")
	const promptUser = () => {
		return inquirer.prompt([
			{
				type: 'input',
				name: 'departmentName',
				message: 'What is the new department name?',
			},
		])
			.then((response) => {
				console.log("Adding a new department...")
				connection.query('INSERT INTO department (departmentName) VALUES (?);'
				[response.departmentName], function (err, res) {
					console.table(response)
				})
			})
	}
	promptUser();

}


//ADD ROLE
function addRole() {
	console.log("Viewing roles...")
	const promptUser = () => {
		return inquirer.prompt([
			{
				type: 'input',
				name: 'roleID',
				message: 'What will be their role ID?',
			},
			{
				type: 'input',
				name: 'managerID',
				message: 'Who will be their manager ID?',
			},

		])
			.then((response) => {
				console.log("Adding a new employee...")
				connection.query('INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES (?,?,?,?);'
				[response.firstName, response.lastName, response.roleID, response.managerID], function (err, res) {
					console.table(response)
				})
			})
	}
	promptUser();

}


//UPDATE EMPLOYEE ROLE
function updateEmployeeRole() {
	const promptUser = () => {
		return inquirer.prompt([
			{
				type: 'input',
				name: 'lastName',
				message: 'What is their last name?',
			},
			{
				type: 'input',
				name: 'roleID',
				message: 'What will be their role ID?',
			},
			{
				type: 'input',
				name: 'managerID',
				message: 'Who will be their manager ID?',
			},

		])
			.then((response) => {
				console.log("Sussessfully updated the employee")
				connection.query('UPDATE employee SET employee.roleID = ? WHERE employee.lastName = ?;'
				[response.roleID, response.lastName], function (err, res) {
					console.table(response)
				})
			})
	}
	promptUser();

}



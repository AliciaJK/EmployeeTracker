const mysql = require('mysql');
const inquirer = require('inquirer');


const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: 'password',
  database: 'employeeTrackerDB',
});

const afterConnection = () => {
  connection.query('SELECT * FROM forSale', (err, res) => {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
};

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  afterConnection();
});

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'options',
      message: 'What item do you want to put up for auction?',
      choices: ["POST AN ITEM", "BID ON AN ITEM"]
    },
  ])

  //allow user to post an item
  .then((response)=>{
    if(response.options === "POST AN ITEM")
      const promptUser = () => {
        return inquirer.prompt([
          {
            type: 'input',
            name: 'options',
            message: 'What item do you want to put up for auction?',
            input: ''
          },
        ])
    
      } else if (response.menu === "Intern".brightYellow) {
      internQuestions();
    } else {
      endTeam();
    }
  })

  }
  //promt them for input item, category and bid price;


//take that and print it to mysql with the following: 

// const updateSongs = () => {
//   console.log('Updating all songs by The Who...\n');
//   const query = connection.query(
//     'UPDATE products SET ? WHERE ?',
//     [
//       {
//         artist: 'The Legendary Who',
//       },
//       {
//         genre: 'Rock',
//       },
//     ],
//     (err, res) => {
//       if (err) throw err;
//       console.log(`${res.affectedRows} products updated!\n`);
//       // Call deleteProduct AFTER the UPDATE completes
//       deleteSongs();
//     }
//   );

//   // logs the actual query being run
//   console.log(query.sql);
// };





};
// const deleteSongs = () => {
//   console.log('Deleting all strawberry icecream...\n');
//   connection.query(
//     'DELETE FROM products WHERE ?',
//     {
//       title: 'Yellow Submarine',
//     },
//     (err, res) => {
//       if (err) throw err;
//       console.log(`${res.affectedRows} products deleted!\n`);
//       // Call readProducts AFTER the DELETE completes
//       readSongs();
//     }
//   );
// };



const bid = () => {
  console.log('Inserting a new product...\n');
  const query = connection.query(
    'INSERT INTO products SET ?',
    {
      item: 'gold fish',
      category: "pet",
      startBid: 50,
    },
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} product inserted!\n`);
      // Call updateProduct AFTER the INSERT completes
      updateSongs();
    }
  );
}
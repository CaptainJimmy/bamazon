var fs = require('fs');
var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'bamazon_db'
});
var inq=inquirer;

var questions = {
	type: "input",
	message: "Howdy pard'ner. What be yer name ya go by?",
	name: "name"
	},
	{
    type: "list",
    name: "menuChoice",
    message: "Welcome to Bamazon.  Your Last Stop For Provisions on The BORE-Egon Trail. What will you do?",
    choices: ["Buy a Product","Search for a Product","Depart On The Trail"]
    },
	{
    type: "input",
    name: "buy", 	
    message: "Which product would yeh like to buy?"
    },
   {
    type: "input",
    name: "buyQuantity",
    message: "How Many?"
    };

var cash,
	name;

//new game
function newGame(){
 cash=800;
 inq.prompt(questions.name).then(answer => {
  answer.name=name;
  

 })

}
//enter name
//enter store

  //purchase a product
	//list the products
	// enter the product ID key
		//pull the record
			//confirm purchase
			//decrease the quantity
	//search for a product
		//select stuff
			//display it if it exists, error if not
//depart on the trail
// hall of shame





//list all the profucts

function listAll() {
 connection.query('SELECT id, name, description, price, quantity_on_hand FROM products', function (error, results, fields) {
  if (error) throw error;
console.log(results)
});
 connection.end();
}
//listAll();





// connection.connect(function(err) {
//   if (err) throw err;
//   connection.query("SELECT id, product_name, price FROM products", function (err, result, fields) {
//     if (err) throw err;
//     console.log("WEELCOME, GOT SOME THINGS THINGS THAT MIGHT INTEREST YOU!");
//     console.log("\n //==================================================================\\ \n");
//     console.log(result);
//     console.log("\n \\=================================================================//");
//     questions();
//   });
// });


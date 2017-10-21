var fs = require('fs');
var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'bamazon_db'
});
var inq=inquirer;
var Table = require ('easy-table');

// prompt questions

var questions = {name:{
	type: "input",
	message: "Howdy pard'ner. What be yer name ya go by?",
	name: "name"
	},
	menu:{
    type: "list",
    name: "menuChoice",
    message: "Welcome to Bamazon. Your Last Stop For Provisions on The BORE-Egon Trail. What will you do?",
    choices: ["Buy a Product","Search for a Product","Depart On The Trail"]
    },
	buy:{
    type: "input",
    name: "buy", 	
    message: "Which product would yeh like to buy?\n"
    },
   quant:{
    type: "input",
    name: "buyQuantity",
    message: "How Many?\n"
    }
};

var cash,
	name,
	 allProducts;

//new game

function newGame(){
 cash=800;
 //enter name
 inq.prompt(questions.name).then((answer) => {
 name=answer.name;
 console.log(name);
 mainMenu();

 })

}


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
	var t=new Table
 connection.query('SELECT * FROM products', function (error, results, fields) {
  if (error) throw error;
//console.log(results)
results.forEach ((RowDataPacket)=>{
t.cell('ID',RowDataPacket.id);
t.cell('Product',RowDataPacket.name);
t.cell('Description',RowDataPacket.description);
t.cell('Price',RowDataPacket.price);
t.cell('Category', RowDataPacket.category);
t.cell('Quantity On Hand',RowDataPacket.quantity_on_hand);
t.newRow();
})
console.log(t.toString());
});
 connection.end();
 //mainMenu();
}

function mainMenu(){
inq.prompt(questions.menu).then((answer)=> {

switch(answer.menuChoice){

	case "Buy a Product":
		console.log("BUY");
		console.log("answer.menuChoice");
		buyStuff();
		//mainMenu();
		break;

	case "Search for a Product":
				console.log("SEARCH");
		console.log("answer.menuChoice");
		//searchStuff();
		mainMenu();
		break;
	case "Depart On The Trail":
			console.log("DEPART");
		console.log("answer.menuChoice");
		//trailStuff()
		break;
}

})


}

function buyStuff(){

//enter store
	//find out which item they want
listAll();

inq.prompt(questions.buy).then((answer)=>{

	var buyItemID=[answer.buy];
	//buyItemID.push()
	//;
	console.log(buyItemID);
	// get quantity

		inq.prompt(questions.quant).then((ans)=>{
			var buyItemQuant=ans.buyQuantity;
				connection.query('SELECT * FROM products WHERE id=?',[buyItemID], (error, results) => {
  					if (error) throw error;

  					console.log(results);
  				})
  				connection.end();
				//if (!checkQuantity())
			 //check to see if that amount exists in db
			 	// if it doesnt, 
			 		//alert the user that only X items exist, rerun buyStuff();
			 	//if it does
			 		// calc price, confirm with user. 
			 			//make sure user has enough money
			 				//if yes 
			 					//deduct money total from cash
			 					//deduct item from database quantity_on_hand
			 					//add order to orders



		})
	})

}

function checkQuantity(){

}

function updateQuantity(id,quant){
	//connection.query('SELECT quantity_on_hand FROM products WHERE id='+buyItemID,  (error, results, fields) => {
  		connection.query('SELECT quantity_on_hand FROM products WHERE id=3',  (error, results, fields) => {

  	if (error) throw error;
  		console.log(results)


  	})
  		connection.end();
}



buyStuff()
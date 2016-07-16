var mysql = require('mysql'); 
var inquirer = require('inquirer'); 

var connection = mysql.createConnection({
	host: 'localhost', 
	port: 3306, 
	user: 'root', 
	password: '', 
	database: 'bamazon'
});

connection.connect(function(err){
	if(err) throw err; 
}); 

function selection(){
	inquirer.prompt([
		{
			type: "input", 
			message: "Enter ID of item you want to purchase: ", 
			name: "userSelection"
		}, 
		{
			type: "input", 
			message: "Enter quantity of items you want to purchase: ",
			name: "userQuantity"
		}
	]).then(function(user)){
		switch(user
	}
}


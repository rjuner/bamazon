var mysql = require('mysql'); 
var inquirer = require('inquirer'); 
var Table = require('cli-table');

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
	connection.query('SELECT * FROM Products', function(err, res) {
	    if (err) throw err;

	    var table = new Table({
	    	head: ["Item ID", "Product Name", "Department Name", "Price", "Qty"], 
	    	colWidths: [10, 40, 20, 13, 13],
	    });

	    for(var i = 0; i < res.length; i++) {
			table.push(
			    [res[i].itemId, res[i].productName, res[i].departmentName, parseFloat(res[i].price).toFixed(2), res[i].stockQty]
			);
		}

		console.log(table.toString());

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
		]).then(function(user){
			connection.query('SELECT * FROM Products', function(err, res) {
				if (err) throw err;
				console.log(user);

			});
		});

	});

}

selection();
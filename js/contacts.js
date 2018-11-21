/* 
Activity: Contact manager
@author: Stephane Mensah (waptik -> www.github.com/waptik)
@date: 11/21/2018 , the whole day
*/


// TODO: Complete the program

// The parent function
function Contacts () {
	// now let's push new contacts into the arrays
	this.list = [];
	this.fname = ["John", "Jane"];
	this.lname = ["Smith", "Doe"];
	this.list.push(
		(this.fname[0] + " " + this.lname[0]), 
		(this.fname[1] + " " + this.lname[1]),
	);
}

/**
 * add new contact detail
 * @param {[type]} fname [description]
 * @param {[type]} lname [description]
 */
Contacts.prototype.add = function (fname, lname) {
	// now let's push new contacts into the arrays
	this.fname.push(fname);
	this.lname.push(lname);

	// add full name in list
	if(fname != undefined && lname !=undefined)
	{

		this.list.push(
			(this.fname + " " + this.lname)
		);
	}

	console.log("Done adding " +
				fname + " " +
				lname + 
				" to contact list\n"
	);
} // end the arr prototype


/**
 * display all contacts from the list
 * @return {[type]} [description]
 */
Contacts.prototype.display = function() {
	// display some message
	console.log("\n\nYou have " + this.list.length + " contacts in your contacts list.\n-----------------------------------------------------------------------\n");

		for(i = 0; i !== this.list.length; i++)
		{
			console.log("#" + (i+1) +
						" First name: " + this.fname[i] + 
						", Last name: " + this.lname[i] + 
						"\n"
			);
		}
};






//	var ask = console.log("1: List Contacts\n2: Add a contact\n0: Quit the app");

//console.log("This is ask: " + ask); // this was used to check the value of the prompt's answer

var on = 1; // use for input validation

var contacts = new Contacts; // this will be used to access the Contact method

// our welcome message
console.log("Welcome to Simple Contacts Manager\n\n"); // a welcome message

	do
	{
		// the prompt
		var ask = Number(
			prompt("1: List Contacts\n2: Add a contact\n0: Quit the app", "")
		);

		// let's do some control structure ops
		switch(ask)
		{
			case 1:
				contacts.display();
				 on = 1;
			break;
			case 2: 
				var first_name = prompt("Enter first name: ");
				var last_name = prompt("Enter last name: ");
				contacts.add(first_name, last_name);
				 on = 1;
			break;
			case 0:
				 console.log("GoodBye.");
				 on = 0;
			break;
		} // end switch control structure

	}while(on !== 0);


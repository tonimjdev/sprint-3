
// Exercise 6
function validate() {
	let error = 0;

	// RegExp ***condiciones validacion

	let regExpName = /^[-'a-zA-ZÀ-ÿ\s]{3,}$/i;
    let regExpEmail = /^[-'a-zA-Z0-9_+]+@[-'a-zA-Z0-9_+]+\.[a-z]{2,}$/i;
    let regExpAddress = /^.{3,}$/;
	let regExpLastN = /^[-'a-zA-ZÀ-ÿ\s]{3,}$/i;
	let regExpPassword = /^(?=.*[0-9])(?=.*[a-zA_Z]).{4,8}/;
    let regExpPhone = /^\d{9}$/;


	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	/* // Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone"); */
	

	// Validate fields entered by the user: name, phone, password, and email

	// Funciones para valid / invalid
	function invalid (field) {
		field.classList.remove('is-valid');
		field.classList.add('is-invalid');
		error++;
	}
	function valid (field) {
		field.classList.remove('is-invalid');
		field.classList.add('is-valid');
	}

	/*if (regExpName.test(fName.value) == false){
		invalid(fName);
		console.log ('Nombre está mal');
	} else {
		valid(fName);
		console.log ('Nombre está bien');
	}
	if (regExpEmail.test(fEmail.value) == false){
		invalid(fEmail);
		console.log ('Email está mal');
	} else {
		valid(fEmail);
		console.log ('Email está bien');
	}*/

	// Condicionales ternarios
	regExpName.test(fName.value) ? valid(fName) : invalid(fName);
	regExpEmail.test(fEmail.value) ? valid(fEmail) : invalid(fEmail);
	regExpAddress.test(fAddress.value) ? valid(fAddress) : invalid(fAddress);
	regExpLastN.test(fLastN.value) ? valid(fLastN) : invalid(fLastN);
	regExpPassword.test(fPassword.value) ? valid(fPassword) : invalid(fPassword);
	regExpPhone.test(fPhone.value) ? valid(fPhone) : invalid(fPhone);
	
	// Check
	console.log("Ternario name: ", regExpName.test(fName.value));
	console.log("Ternario email: ", regExpEmail.test(fEmail.value));
	console.log("Ternario adress: ", regExpAddress.test(fAddress.value));
	console.log("Ternario last name: ", regExpLastN.test(fLastN.value));
	console.log("Ternario password: ", regExpPassword.test(fPassword.value));
	console.log("Ternario phone: ", regExpPhone.test(fPhone.value));
	
	// Alert error/ok
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}

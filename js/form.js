function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

const form = document.querySelector("#signup");

const NAME_REQUIRED = "Please enter your name";
const ADDRESS_REQUIRED = "Please enter your address";
const PHONE_REQUIRED = "Please enter your phone";
const CITY_REQUIRED = "Please enter your city";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";
const OBJECTIVE_REQUIRED = "Please enter your objective";
const SKILL_REQUIRED = "Please enter your skill";
const EDUCATION_REQUIRED = "Please enter your education";

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
	let addressValid = hasValue(form.elements["address"], ADDRESS_REQUIRED);
	let phoneValid = hasValue(form.elements["phone"], PHONE_REQUIRED);
	let cityValid = hasValue(form.elements["city"], CITY_REQUIRED);
	let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
	// let objectiveValid = hasValue(document.getElementById("objective"), OBJECTIVE_REQUIRED);
	// let skillValid = hasValue(document.getElementById("skill"), SKILL_REQUIRED);
	// let educationValid = hasValue(document.getElementById("education"), EDUCATION_REQUIRED);
	// if valid, submit the form.
    localStorage.setItem("name",form.elements["name"].value);
    localStorage.setItem("address",form.elements["address"].value);
    localStorage.setItem("phone",form.elements["phone"].value);
    localStorage.setItem("city",form.elements["city"].value);
    localStorage.setItem("email",form.elements["email"].value);
    localStorage.setItem("objective",form.elements["objective"].value.replace(/\n\r?/g, '<br />'));
    localStorage.setItem("skill",form.elements["skill"].value.replace(/\n\r?/g, '<br />'));
    localStorage.setItem("education",form.elements["education"].value.replace(/\n\r?/g, '<br />'));

	if (nameValid && emailValid && phoneValid && cityValid && addressValid) {
		alert("CV Created. Press OK to view");
        window.location = 'CV.html';
	}

});

window.onload = function(){
    var username = localStorage.getItem("username");
    var password = localStorage.getItem("password");
	if(username != "ali"  && password != "12345678"){
        window.location = 'index.html';
	}
}

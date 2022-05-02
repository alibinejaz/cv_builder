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

const form = document.querySelector("#login");

const USERNAME_REQUIRED = "Please enter your username";
const PASSWORD_REQUIRED = "Please enter your password";

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let usernameValid = hasValue(form.elements["Uname"], USERNAME_REQUIRED);
	let passwordValid = hasValue(form.elements["Pass"], PASSWORD_REQUIRED);
    localStorage.setItem("username",form.elements["Uname"].value);
    localStorage.setItem("password",form.elements["Pass"].value);

	if (usernameValid && passwordValid) {
        window.location = 'CV.html';
	}

});

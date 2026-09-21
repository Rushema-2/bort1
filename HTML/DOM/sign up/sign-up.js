const signUpForm = document.querySelector("form");

const inputFirstName = document.getElementById("first-name");
const inputLastName = document.getElementById("last-name");
const inputEmail = document.getElementById("email");
const inputPhone = document.getElementById("phone");
const inputPassword = document.getElementById("password");

// Validation spans
const firstNameValidation = document.getElementById("firstNme-validation");
const lastNameValidation = document.getElementById("lastName-validation");
const emailValidation = document.getElementById("email-validation");
const phoneValidation = document.getElementById("phone-validation");
const passwordValidation = document.getElementById("password-validation");


function signUp(event) {
    event.preventDefault();

    // Check empty fields
    if (
        inputFirstName.value === "" ||
        inputLastName.value === "" ||
        inputEmail.value === "" ||
        inputPhone.value === "" ||
        inputPassword.value === ""
    ) {
        alert("Please fill your form");
        return;
    }

    // First name must start with uppercase
    if (
        inputFirstName.value !==
        inputFirstName.value.charAt(0).toUpperCase() +
        inputFirstName.value.slice(1)
    ) {
        firstNameValidation.innerHTML =
            "Your first name must start with an uppercase letter.";
        return;
    }

    // Email validation
    if (!inputEmail.value.includes("@")) {
        emailValidation.innerHTML = "Invalid email address.";
        return;
    }

    // Phone validation
    if (
        inputPhone.value.length !== 13 ||
        !inputPhone.value.startsWith("+2507")
    ) {
        phoneValidation.innerHTML = "Invalid phone number.";
        return;
    }

    // Password validation
    if (inputPassword.value.length < 8) {
        passwordValidation.innerHTML =
            "Password must contain at least 8 characters.";
        return;
    }

    const data = {
        firstName: inputFirstName.value,
        lastName: inputLastName.value,
        email: inputEmail.value,
        phone: inputPhone.value,
        password: inputPassword.value
    };

    try {
        let users = JSON.parse(localStorage.getItem("users")) || [];

        users.push(data);

        localStorage.setItem("users", JSON.stringify(users));

        alert("User successfully registered!");

        signUpForm.reset();

    } catch (error) {
        console.log(`Error is: ${error}`);
    }
}

signUpForm.addEventListener("submit", signUp);
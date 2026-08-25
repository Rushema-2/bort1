const loginForm = document.querySelector("form");

const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const invalidMessage = document.getElementById("invalid-message");

function login(event) {
    event.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
        (user) => user.email === inputEmail.value
    );

    if (!user) {
        invalidMessage.innerHTML = "Invalid email or password";
        return;
    }

    if (user.password !== inputPassword.value) {
        invalidMessage.innerHTML = "Invalid email or password";
        return;
    }

    localStorage.setItem("loggedIn", JSON.stringify(user));

    alert("Login successfully!");
}

loginForm.addEventListener("submit", login);
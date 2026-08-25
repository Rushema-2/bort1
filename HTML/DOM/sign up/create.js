const signUpForm = document.querySelector("#signup-form");

async function signUp(event) {
    event.preventDefault();

    const username = document.querySelector("#userName").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    try {
        const response = await fetch("https://fakestoreapi.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        });

        const data = await response.json();

        console.log(data);
        console.log("User created successfully");

    } catch (error) {
        console.error("Error:", error);
    }
}

signUpForm.addEventListener("submit", signUp);
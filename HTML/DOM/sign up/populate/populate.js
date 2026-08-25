const tableBody = document.getElementsByTagName("tbody")[0];

async function fetchUsers() {
    try {
        const response = await fetch("https://fakestoreapi.com/users");
        const users = await response.json();

        users.map((user, index) => {
            const tableRow = document.createElement("tr");

            tableRow.innerHTML = `
                <td>${index + 1}</td>
                <td>${user.name.firstname}</td>
                <td>${user.name.lastname}</td>
                <td>${user.email}</td>
                <td>${user.username}</td>
                <td>${user.address.city}</td>
                <button class="edit-btn"><i class="fa-solid fa-pen"style="color: rgb(0, 255, 0);"></i></button>
                <button class="delete-btn"><i class="fa-solid fa-trash"style="color: rgb(255, 0, 0);"></i></button>
            `;

            tableBody.appendChild(tableRow);

            tableRow.querySelector('.edit-btn').addEventListener('click', () => updateUser(user));
            tableRow.querySelector('.delete-btn').addEventListener('click', () => deleteUser(user.id));
        });

    } catch (error) {
        console.log("Error:", error);
    }
}

fetchUsers();


async function updateUser(user) {
    console.log('Defaurt user:',user)

    const updateUserForm = document.createElement("form");
    updateUserForm.innerHTML = `
    <h1>Update user</h1>
    <input class='form-input' type='text' value=${user.name.tirstname} />
    <input class='form-input' type='text' value=${user.name.lastname} />
    <input class='form-input' type='text' value=${user.username} />
    <input class='form-input' type='text' value=${user.address.city} />
    <div>
    <button class='form-button' style="background: red;">Cancele</button>
    <button class='form-button' style="background: blue;">Update</button>
    </div>
    `
    document.body.appendChild(updateUserForm)
}
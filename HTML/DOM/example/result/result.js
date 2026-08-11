const userTable = document.getElementById("userTable");


const users = JSON.parse(localStorage.getItem("users")) || [];


users.forEach(function (user) {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.date}</td>
        <td>${user.time}</td>
    `;

    userTable.appendChild(row);
});
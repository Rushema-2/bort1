const form = document.getElementById("appointmentForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

  
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

 
    let users =  JSON.parse(localStorage.getItem("users")) || [];
   
    
   

  
    const user = {
        name: name,
        date: date,
        time: time
    };

 
    users.push(user);

 
    localStorage.setItem("users", JSON.stringify(users));


    form.reset();

   window.location.href = "./result/result.html";
});


let hello = document.querySelector(".title") . innerHTML = "Sport News"

// let title= document.getElementById("sub-title")
// letsubtitle= document.getElementsByClassName("title")
// let description = document.getElementsByTagName("p")

 
let title = document.querySelector(".title");
title.innerHTML = "sport News";
title.style . color = "red"


let subTitle = document.querySelector("#sub-title");
subTitle.innerHTML = "Coding School";
subTitle.style . color = "blue";


let paragraph = document.querySelector("p");
paragraph.innerHTML = "welcome to coding school cohort!"
paragraph.style.color="green"



let button = document.querySelector("button")
let result = document.querySelector("span")

button.addEventListener("click",function(){
    result.innerHTML="we don't have other more discription"
});


let on = document.querySelector("#on-image");
on.style.display = "none"
let off = document.querySelector("#off-image") ;

let onButton = document.querySelector(".on")
let offButton = document.querySelector(".off")

onButton.addEventListener("click",function(){
    on.style.display="block"
    off.style.display="none"
})

offButton.addEventListener("click",function(){
    on.style.display="none"
    off.style.display="block"
})




let form = document.querySelector("form");
let inputValue = document.querySelector("#marks");
let anwer = document.querySelector("#form-result");

form.addEventListener("submit",function(e){
    e.preventDefault()

    const marks = inputValue.value
    console.log(marks)
    if(marks === ""){
        anwer.innerHTML = "please enter your marks";
        anwer.style.color = "yellow"
    }

    if(marks>=80){
      anwer.innerHTML = "Exellent";
        anwer.style.color = "green";
    }else if(marks <= 79 && marks >=50){
        anwer.innerHTML = "Good"
        anwer.style.color = "blue"
    }else if(marks < 50){
  anwer.innerHTML = "Fail"
  anwer.style.color = "red"
    }
})
    

const input = document.getElementById("display");



function appendValue(value){

    if(input.value === "0"){
        input.value="";
    }
    input.value += value;

}
function clearDisplayed(){
    input.value = "0"
}
function deleteLast(){
    input.value = input.value.slice(0,-1)
    if(input.value === ""){
        input.value = "0";
    }
}
function calculate(){
    try {
        input.value = eval(input.value) 

    } catch(error){
      input.value = `Error is: ${error}`
    };
    
    
}
function percentage(){
    input.value = Number(input.value) / 100;
}



// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         const value = button.textContent;

//         if (value === "AC") {   
//             display.value = "";
//         }
//         else if (value === "DEL") {
           
//             display.value = display.value.slice(0, -1);
//         }
//         else if (value === "=") {
            
//             try {
//                 display.value = eval(display.value);
//             } catch {
//                 display.value = "Error";
//             }
//         }
//         else {
           
//             display.value += value;
//         }
//     });
// });
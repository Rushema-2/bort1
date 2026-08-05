
const input = document.querySelector("#inputs");
const button = document.querySelector("#check");
const answer = document.querySelector("#result");


function chechPolindrome(){
    const trimededText = input.value.trim();
    const cleannedText = trimededText.replace(/[^a-zA-Z0-9]/g, '');
    result.innerHTML = cleannedText;


    const reversedWordArray = wordArray.reverse();
    const joinReversedWordArray = reversedWordArray.join('');

    compare . innerHTML = `${smallText} and ${joinReversedWordArray}`;

    result.style.color = "#4EA281";
    if(smallText === joinReversedWordArray) return result.innerHTML = "this text ispolindrome"
    result.style.color = "#F16464";
     return result.innerHTML = "this text is not polindrome";

     
}
input.addEventListener("input" ,function(){
    answer.innerHTML = "no checked yet!!";
    answer.style.color = "grey"
});

function checksText() {
    const text = input.value.trim();

    if (text === "") {
        answer.innerHTML = "Hey!! Insert text to check.";
        answer.style.color ="red";

    } else if (text.length < 3) {
        answer.innerHTML = "Hey!! Text should contain at least 3 characters.";
        answer.style .color ="red"
       
    } else {
        answer.innerHTML = text;
        answer.style.color = "grey"
    }
}

button.addEventListener("click", checksText);

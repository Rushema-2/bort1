
function WelcomeMessage() {
    return "welcome to javascript"


}
console.log(WelcomeMessage())



function addElements() {
    const number = [1, 2, 3, 4, 5]
    number.push(6)
    return number;
}

console.log(addElements());


function greetUser() {
  const personalName = 'claude'
  const sentence = `hello ${personalName}!`
  return sentence 
}
console.log(greetUser())


function nameOfAge(passedYear, nawTame) {
    return nawTame - passedYear;
}

console.log(nameOfAge(2000, 2026));


function studentss(name, age, height) {
    const information = {
        Name: name,
        Age: age,
        Height: height
    };

    return information;
}

console.log(studentss("rushema", 30, 1.70));
console.log(studentss("kamana",28,1.69));
console.log(studentss("mupenzi",40,1.82));
console.log(studentss("havuga",45,1.90));
console.log(studentss("kabera",34,1.78));



function numberd(a, b) {
       
      const  sum = a + b

    return sum;
}

console.log(numberd(7, 5));
// const console = require("node:console");

// const { startupSnapshot } = require("node:v8");

// function WelcomeMessage() {
//     return "welcome to javascript"


// }
// console.log(WelcomeMessage())



// function addElements() {
//     const number = [1, 2, 3, 4, 5]
//     number.push(6)
//     return number;
// }

// console.log(addElements());


// function greetUser() {
//   const personalName = 'claude'
//   const sentence = `hello ${personalName}!`
//   return sentence 
// }
// console.log(greetUser())


// function nameOfAge(passedYear, nawTame) {
//     return nawTame - passedYear;
// }

// console.log(nameOfAge(2000, 2026));


// function studentss(name, age, height) {
//     const information = {
//         Name: name,
//         Age: age,
//         Height: height
//     };

//     return information;
// }

// console.log(studentss("rushema", 30, 1.70));
// console.log(studentss("kamana",28,1.69));
// console.log(studentss("mupenzi",40,1.82));
// console.log(studentss("havuga",45,1.90));
// console.log(studentss("kabera",34,1.78));



// function numberd(a, b) {

//       const  sum = a + b

//     return sum;
// }

// console.log(numberd(7, 5));



// function calculateAverage(){
//     const a=2
//     const b=6
//     const c=10

//     function sumOfNumber(){
//         const sum=a+b+c
//         return sum
//     }

//     const summationResult=sumOfNumber()
//     const avg=summationResult/3
//     return avg

// }
// console.log(calculateAverage())




// function checkGrade(mark){
//     function getGrade(){
//         if(mark>=80){
//             return 'A'
//         }else if(mark>=70 && mark<=79){
//             return 'B'
//         }else if(mark>=60 && mark<=69){
//             return 'C'
//         }else if(mark<60){
//             return 'D'
//         }
//     }
//     return getGrade()
// }
// console.log(checkGrade(90))
// console.log(checkGrade(20))
// console.log(checkGrade(65))
// console.log(checkGrade(32))




// function shoppingCart(){
//   const avocado = 2000
//   const banana = 3000
//   const mango = 5000

//   function calculateTotal(){
//     const totalPrices = avocado+banana+mango
//     return totalPrices
//   }
//   const sumTotal=calculateTotal()
//   return sumTotal
// }
// console.log(shoppingCart())





// function checkStudent(student) {

//     if (student.active == true) {
//         return "student is active";
//     } else {
//         return "student is not active"
//     }
// }

// console.log(checkStudent({active:true}));
// console.log(checkStudent({active:false}));




// function checkNumber(number) {
//     if (number > 0) {
//         return "Positive number";
//     } else if (number < 0) {
//         return "Negative number";
//     } else {
//         return "Zero";
//     }
// }

// console.log(checkNumber(5));
// console.log(checkNumber(-1));
// console.log(checkNumber(0));





// function checkVotingAge(age) {
//     if (age < 0) {
//         return "Invalid age.";
//     } else if (age >= 18) {
//         return "You are eligible to vote.";
//     } else {
//         return "You are not eligible to vote.";
//     }
// }

// console.log(checkVotingAge(18)); 
// console.log(checkVotingAge(15)); 
// console.log(checkVotingAge(-5)); 

// function checkResult(mark) {
//     if (mark >= 50) {
//         return "You passed";
//     } else {
//         return "You failed";
//     }
// }

// console.log(checkResult(50));
// console.log(checkResult(45)); 
// console.log(checkResult(80));







// const allCourses=["figma","html","css","javascript","linux"];
// console.log(allCourses)

// allCourses.push("Git")
// console.log(allCourses)

// allCourses.pop()
// console.log(allCourses)

// allCourses.unshift("Git")
// console.log(allCourses)

// allCourses.shift()
// console.log(allCourses)

// console.log(allCourses.length)

// console.log(allCourses.join(" | "))



// function displayCourses(courses) {
//     return courses;
// }

// const myCourses = ["figma", "html", "css", "linux", "javascript", "git"];

// console.log(displayCourses(myCourses));





// function createUser(name, email, phone) {
//     const user = {
//         name: name,
//         email: email,
//         phone: phone
//     };

//     console.log(`I'm ${user.name}. So when you need to reach out to me use this contact ${user.phone}`);
// }

// createUser("claude", "claude@gmail.com", "0781234567");





// const student = ["Manzi","Delphine","Claude","Ngabo","Opera","Elia","Egide","Justin","Fablice","Grace","Jenereze",
//     "Dyane","Juasse","umuyoboro","Flank"]

//     for(let a=0; a< student.length; a++){
// console.log(`${a+1}.${student[a]}`);
//     } 



//     let products = ["sugar","Ricer","Liquid soap","cooking oil","Milk","Bread","Eggs","Tea"];
//     let prices = ["Rwf 4,800","Rwf 2,500","Rwf 2,100","Rwf 7,000","Rwf 1,500","Rwf 900","Rwf 3,200","Rwf 2,000"];


//     for (let i = 0; i <products.length; i++) {
//   console.log(`${i + 1}. ${products[i]} = ${prices[i]} `); 

// }

// let totalProducts = products.length;
// console.log('total products='+products.length);



// const correctPassWord = "123@2023";
// const passWord = ['123@2020', '123@2021', '123@2022', '123@2023', '123@2024', '123@2025', '123@2026']


// let index = 0;
// while (passWord[index] !== correctPassWord) {
//     console.log(`incorrect passWord: ${passWord[index]}`);
//     index += 1
// }
// console.log(`correct passWord: ${correctPassWord}`);



// for(let a=0; a<passWord.length; a++){
// console.log(`${passWord[a]}`)


//  if (passWord[a] === correctPassWord) {
//  console.log(`${passWord[a]} = Correct password`);
//   } else {
//     console.log(`${passWord[a]} = Incorrect password`);
//   }
// }




// const seats = ["reserved", "available", "occupied", "available", "reserved", "available", "reserved", "occupied", "available", "reserved", "occupied"];

// let i = 0;

// while (seats[i] !== "available") {
//     console.log(`Checking seat ${i + 1}: ${seats[i]}`);
//     i++
// }

// console.log(`seat ${i + 1} is available.Booking can proceed!`)
// console.log(`Found an available seat afterchecking ${i + 1} seats.`)




// const students = ["Manzi", "Delphine", "Claude", "Ngabo", "Opera", "Elia", "Egide", "Justin", "Fablice", "Grace", "Jenereze",
//     "Dyane", "Juasse", "umuyoboro", "Flank"]


// students.forEach((Element, index) => {
//     console.log(`${index + 1}.${Element}`)
// })


const seats = [
    { owner: 'MANZI', price: 100, category: 'VIP', status: 'OCCUPIED' },
    { owner: 'MUTONI', price: 25, category: 'VIP', status: 'RESERVED' },
    { owner: 'EGIDE', price: 50, category: 'VIP', status: 'RESERVED' },
    { owner: 'NULL', price: 100, category: 'VIP', status: 'AVAILABLE' },
    { owner: 'JUSTIN', price: 25, category: 'VIP', status: 'OCCUPIED' },
]


let Claude;
let Eric;

seats.forEach((seat, index) =>{
    if(seat.owner === "MANZI"){
Claude =`hey jose, ${seat.owner} allread entered and his in ${seat.category} of ${seat.price}` ;
}
    if(seat.status === "AVAILABLE") {
        Eric = `please check seat ${index + 1} is ${seat.status}`;
    }
})

 console.log(`${Claude} ${Eric}`)


 
 let totalPrices = 0

seats.forEach((seat) =>{
    if(seat.status === "OCCUPIED" || seat.status === "RESERVED"){
  totalPrices += seat.price
    }
})
console.log("totalPrices =" , totalPrices)


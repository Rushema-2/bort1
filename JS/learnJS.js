// const console = require("node:console");


console.log("HELLO WORLD !");

const integer = 46;

console.log(integer);

const String = "Emmanuel";

console.log(String);

const Arry = ["car", true, 42, new Date("2026-08-02"), "banana"];
console.log(Arry);

const Object = {name:"laptop", price:1200,availeble:"true"};
console.log(Object)

const people = [ 
    {name:"fablice",age:"26"},
    {name:"eric",age:"12"},
    {name:"emmy",age:"34"}
];
    console.log(people);



const families = [
    {
        name:"claude",
        gender:"male",
        married:"true",
        location:{country:"Rwanda",city:"Kigali",districty:"Gatsibo"},
        Children:[
            {name:"Logan",age:2,genger:"male"},
            {name:"alina",age:6,genger:"female"}
        ],
    },
    {
        name:"harera",
        gender:"male",
        married:"true",
        location:{country:"Rwanda",city:"Kigali",districty:"Gatsibo"},
        Children:[
            {name:"saral",age:12,genger:"female"},
            {name:"fred",age:5,genger:"male"}
        ]

    }
];


console.log(families);







const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
console.log(numbers.length)
console.log(numbers[9])
const addElement = numbers.push(16)
// numbers.pop()

numbers.unshift(car={name:"Toyota",price:5000,createdAt:new Date})
numbers.shift()
console.log(numbers)


const room=[]

room[3]="gedeon"
room[1]="manzi"
room[2]="claude"
room[4]="joyeuse"
room[6]="bikora"
room[5]="justin"
console.log(room)





const Items = ["phone","pen","book"];
Items.unshift("table","disktop","chair");
console.log(Items)




const words = ["s","n","a","c","k","s"]; 
//  const popResult=words.pop()
words.push("e","s")
const findLetter =words[2]

console.log(findLetter)

// constarrayFormed=words.unshift("i,","s")

console.log(words.toString())






const Numbers = [];
Numbers[6]=70
Numbers[4]=50
Numbers[0]=10
Numbers[5]=60
Numbers[1]=20
Numbers[3]=40
Numbers[2]=30
console.log(Numbers)



const Arrays = ["h", "e", "l", "l", "o", " ", "w", "o", "r", "d", "!"];
Arrays.pop()
console.log(Arrays.join())




const students = ["Eric","Alice","John","Grace","David"];
console.log(students.length)

console.log(students.toString())

console.log(students.at(4))

console.log(students.join(" | "))

console.log(students.pop())

students.push("sarah");
console.log(students)

console.log(students.shift())

students.unshift("Teacher")
console.log(students)

console.log(students.join(" "))




const fruits = ["Apple","Banana","Orange"];
const vegetables = ["Carrot","Potato"];
const snacks = [["Chips","Popcorn"],["Cookies"]];

console.log(Array.isArray(fruits));
delete fruits[1];
console.log(fruits)
const food = fruits.concat(vegetables)
const neWFood = food.concat(snacks)
console.log(neWFood)
console.log(food)
const onLeveLArray = snacks.flat()
console.log(onLeveLArray)


const names =["claude","fablice","eric"];
const number =[[20,12,16],[9]];
const matheries = ["table","chair","disktop"];

const total = number.flat()
console.log(total)

const all = names.concat(total,matheries)
console.log(all)




const arrayr = ["T","u","g","e","n","d","a","n","e"," ","n","u","r","i","y","a"," ","m","u","n","t","u","?"]
arrayr.pop();
arrayr.push(".")
console.log(arrayr);
console.log(arrayr.join(""))

const thing = ["chair","table","disktop","pen"]
const matherials = ["book","phone","pen"]
thing.pop();
console.log(thing)
const alls = thing.concat(matherials)
console.log(alls)


const fruit = ["banana","mango","orange"]
const numberr = [[2,3,4,5,6,7,],[1,8,9,]]
const numberrs = numberr.flat()
console.log(numberrs)
const nuFruit = fruit.concat(numberrs)
console.log(nuFruit)



const numbert = [1,2,3,4,5,6,7,8,9,10]
numbert.pop()
numbert.shift()
console.log(numbert)


const peoples ={
    students:"Habimana",
    farmer :"Gakire",
    entrepreneur:"Kamali",
    Leader:"Mupenzi",
};
console.log(`We eat because of production of ${peoples.farmer} and our security comes form the efforts of our
    leader, ${peoples.Leader}`,
);


// const name = "claude"

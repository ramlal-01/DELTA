// object literals
// let info = {name:"ram lal", sec:"B", age:19,city:"Mathura"};
// const items={
//     price:99.99,
//     discount:49,
//     color:["black","white","golden"]
// };

// JS automatically converts keys into string like null and true are string here not keyword.
// let obj={
//     1:'a',
//     2:'b',
//     true:'c',
//     null:'d',
//     undefined:'e'
// };   

// const student={
//     name:"ram",
//     age:19,
//     marks: 99,
//     city:"Mathura"
// };

// Object of Objects
// c 
// console.log(classInfo.ram.city);

//  Nested Objects
const Info1={
    ram:{
        grade: "A",
        city : "Mathura"
    },
    bipan:{
        grade: "A",
        city: "Pune"
    },
    aman:{
        grade:"O",
        city:"Lucknow"
    }
};

// Array of Objects
const Info2=[
    {
        name: "ram",
        grade: "A",
        city : "Mathura"
    },
    {
        name: "bipan",
        grade: "A",
        city: "Pune"
    },
    {
        name:"aman",
        grade:"O",
        city:"Lucknow"
    }
];

// let numbers=Math.floor(Math.random() *  10) + 1;
let numbers=Math.floor(Math.random() *  5) + 21;/* from 21-25& */

// Guessing Game

const max=prompt("enter the max no.");
const random= Math.floor(Math.random() * max)+1;

let guess = prompt("guess the no.");
while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
    if( guess == random){
        console.log("you are right!! congratulations!! random no. was "+random);
        break;
    }
    else if (guess<random){
        guess= prompt("Hint : Your guess was too small, please try again.");
    }
    else{
        guess= prompt("Hint : Your guess was too large, please try again.");
    }
}


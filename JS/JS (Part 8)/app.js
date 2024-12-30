// let arr= [1,2,3,4,5];

// arr.forEach( (el) => {
//     console.log(el);
// });

// arr.forEach( function (el) {
//     console.log(el);
// });

// let print = function (el){
//     console.log(el);
// };
// arr.forEach(print);

//----------------------------------
// let arr= [{
//         name:"aman",
//         marks:95,
//     },
//     {
//         name:"ram",
//         marks:99,
//     },
//     {
//         name:"abhinav",
//         marks:35,
//     }
// ];

// arr.forEach( (student)=> {
//     console.log(student.marks);
// });

// Map
// let num=[1,3,5,6];
// let double = num.map((el)=>{
//     return el*el;
// });

// let gpa = arr.map((el)=>{
//     return el.marks /10;
// });

// Filter
// let nums = [1,2,3,4,5,6,7,7,3,2,];
// let ans = nums.filter((el)=> {
//     return el%2==0;
// });

// every
// [2,4,6].every((el)=>el%2==0);

// some
// [1,2,3,4].some((el)=>el%2==0);

// reduce
// let no = [1,2,3,4,22,4,6,7,8,9];
// let finalValue = no.reduce( (res,el) => res +el);
// console.log(finalValue);

// let max = no.reduce( (max, el)=> {
//     if(max < el){
//         return el;
//     }
//     return max;    
// });

// console.log(max);

// spread
let arra =[1,2,3,5,4];
Math.min(...arra);
console.log(...arra);

// Spread with Array Literals
// let arr = [1,2,3,4,5];
// let newArr = [...arr];

// let chars = [..."hello"];

// let odd = [1,3,5,7,9];
// let even = [2,4,6,8,10];

// let nums = [...odd, ...even];

// Speard with object literals
const data ={
    email: "abc@gamil.com",
    passwordd : "abcs"
};

const dataCopy = { ...data , id:123 , country: "India"};
let arr1=[1,2,3,4,5]; //val
let obj1 = {...arr1 }; //obj -> key:val

// Rest
// function sum(...args){ // arguments
//     for( let i=0 ; i< args.length ; i++){
//         console.log("you gave us:", args[i]);
//     }
// }

// function min(){
//     console.log(arguments);
//     console.log(arguments.length);
//     // arguments.push(1);
// }

// function sum(msg,...args){
//     console.log(msg);
//     return args.reduce((sum,el)=> sum+el);
// }

// destructuring
let names = ["tony","ram","brian","peter","aman"];
let [winner,runnerup,...others]= names;

const student ={
    names: "ram lal",
    age:19,
    class:"2nd Year",
    subjects:["CO","CN","English","DBMS"],
    username: "ramlal@gmail.com",
    password: "abcd",
    city: "Ahmednagar"
};

let { username:user,password:secret, city:place="Mathura"}=student;
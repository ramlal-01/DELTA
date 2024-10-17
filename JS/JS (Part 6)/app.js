// function hello(){
//     console.log("Hello");
// }

// function printName(){
//     console.log("Ram Lal");
//     console.log("GLA University")
// }

// function print1to5(){
//     for(let i=1;i<=5;i++){
//         console.log(i);
//     }
// }

// hello();
// printName();
// print1to5();

function printInfo(name, age){
    console.log(`${name}'s age is ${age}.`);
}

// printInfo("Ram Lal",19);
// printInfo("Aman");
// printInfo;

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(sum(3,4),5));

let sum=50; //Global Scope
function sum1(a,b){
    // let sum=a+b; //Function Scope
    return sum;
}
// console.log(sum1(3,5));
// console.log(sum);

// Lexical Scope
function outerFunc(){
    let x=4;
    let y=5;
    function innerFunc(){
        let a=10;
        console.log(x);
        console.log(y);
    }
    // console.log(a);
    innerFunc();
}
// outerFunc();

// Function Expression
let name="ram lal"
let sum4= function(a,b){
    return a+b;
}
let hello= function(){
    console.log("hello");
}
hello= function(){
    console.log("Namaste");
}
// sum4(3,6);
// hello();

// Higher Order Function
function mulitpleGreet(func,count){
    for(let i=1;i<=count;i++){
        func();
    }
}
let greet = function(){
    console.log("hello");
}
// mulitpleGreet(greet, 188);



/*
function oddOrEvenFactory(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }
    else if(request=="even"){
        return function(n){
            console.log(n%2==0);
        }
    }
    else{
        console.log("wrong request");
    }
}
let request='even'; //even
let func= oddOrEvenFactory(request);
console.log(func(2));
*/

// Methods
/*const calculator={
    num:55,
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a+b;
    }
};*/
const calculator={
    num:55,
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a+b;
    }
};
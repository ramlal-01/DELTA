// loops 
// for(let i=0;i<6;i++){
//     console.log(i);
// }

// let n= prompt("Enter Your No. ");
// n= parseInt(n);

// for(let i=n;i<=n*10;i=i+n){
//     console.log(i);
// }

// for-of-loops
// let fruits= ["mango","apple","banana","orange","litchi"];

// for(fruit of fruits){
//     console.log(fruit);
// }

// for( char of "ramlal"){
//     console.log(char);
// }

// Nested for of loop
// let heroes= [["ironman","spiderman","thor"],["superman","wonder man","flash"]];
// for(list of heroes ){
//     for( hero of list){
//         console.log(hero);
//     }
// }

// todo app

let todo=[];
let req= prompt("please enter your request");

while(true){
    if(req=="quit"){
        console.log("quitting app");
        break;
    }
    if( req=="list"){
        console.log("---------------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("---------------");
    } else if( req== "add"){
        let task = prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    } else if ( req=="delete"){
        let ind=prompt("enter the index of task");
        todo.splice(ind,1);
        console.log("deleted");
        
    } else{
        console.log("wrong request");
    }
    req= prompt("please enter your request");

}

/*let number=287152;
let sum=0;
let copy=number;
while(copy>0){
    digit=copy%10;
    sum+=digit;
    copy=Math.floor(copy/10);
}
console.log(sum);*/
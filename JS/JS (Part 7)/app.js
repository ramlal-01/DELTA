// // this keyword
// const student = {
//     name: "ram",
//     age: 19,
//     eng : 15,
//     maths : 26,
//     cn : 30,
//     getAvg(){
//         console.log(this);
//         let avg = (this.eng + this.maths + this.cn)/3;
//         console.log(`${this.name} got avg marks ${avg}`);
//     }
// }

// function getAvg(){
//     console.log(this); //this is the window object. window.getAvg()--> function same as getAvg()
// }

// // try and catch
// let a=5;
// try{
//     console.log(a);
// } catch(err){
//     console.log("caught and error..a is not defined");
//     console.log(err);
// }

// // Arrow Fucntions

// const sum=(a,b)=>{
//     console.log(a+b);
// }

// const mul = (a,b)=> (a*b);

// Set Timeout
console.log("HI There!!")
// setTimeout(()=>{
//     console.log("Ram Lal's Home.")
// },4000);
console.log("Welcome to ...")
let id = setInterval( ()=>{
    console.log("Ram Lal's Home.")
},1000);
console.log(id);  //clearInterval(id) ---------> to stop this fucntion.
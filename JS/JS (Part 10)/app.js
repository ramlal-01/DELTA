/*---------------- onclick & onmouseenter ---------------------*/
let btns= document.querySelectorAll('button');
console.dir(btns);

// btn.onclick = function(){
//     // console.log('button was clicked')
//     alert('button was clicked')
// }

// for (btn of btns){
//     btn.onclick= sayHello;
//     btn.onmouseenter = function(){
//         console.log("you entered a button");
//     }
// }
function sayHello(){
    alert("Hello");
}

/*-----------------------Event Listner-----------------------*/ 
for (btn of btns){
    // btn.addEventListener("click",sayHello) ;
    // btn.addEventListener("click",sayName) ;
    btn.addEventListener("dblclick",function() {
        console.log("you double clicked me");
    }) ;
}
function sayName(){
    alert("Ram Lal");
}

let p = document.querySelector("p");
p.addEventListener("click", function(){
    console.log("para was clicked");
})
let box = document.querySelector(".box");
box.addEventListener("mouseenter",function(){
    console.log("mouse inside box");
});

/*----------------this in event listners-----------*/
function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor= "lightblue";
}
for (btn of btns){
    btn.addEventListener("click",changeColor)
}

p.addEventListener("click",changeColor);
box.addEventListener("click",changeColor);
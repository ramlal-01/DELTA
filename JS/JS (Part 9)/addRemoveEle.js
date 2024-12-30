/* -------------Adding Element------------------*/
document.createElement("p");
let newP= document.createElement('p');

newP.innerText = "Hi, I am a new p";
// console.dir(newP);

let body = document.querySelector('body');
body.appendChild(newP);

let box = document.querySelector('.box');
box.appendChild(newP);

let but= document.createElement('button');
// console.dir(but);

but.innerText = "New Button";
box.appendChild(but);

newP.append("Hi , this is new text!!")
newP.append(but);
newP.append("do not click this button");

box.prepend(newP);

let btn= document.createElement('button');
btn.innerHTML = "NEW BUTTON !!!";

let p = document.querySelector('p');

p.insertAdjacentElement("beforebegin",btn); //p se pehle 
// p.insertAdjacentElement("afterbegin",btn);  //as a first child
// p.insertAdjacentElement("beforeend",btn);   //p ke andar but last mai
// p.insertAdjacentElement("afterend",btn);    //p ke khatam hone ke baad

/* -------------Removing Element------------------*/
// body.removeChild(btn);
but.remove();
body.remove();
//  Manipulating Attributes
/*let img = document.querySelector('img');
console.dir(img.getAttribute('id'));
img.setAttribute('id','spidermanimg');

console.dir(img.getAttribute('id'));

img.setAttribute('src','assets/creation_3.jpeg');

img.setAttribute('class','images');*/

// ------------------------------------------------

// Manipulating Styles
// let heading = document.querySelector('h1');
// heading.style.color = 'blue';
// heading.style.backgroundColor = 'grey';
// let links = document.querySelectorAll('.box a');
// for ( link of links){
//     link.style.color= "purple";
// }
// for( let i = 0 ; i<links.length ; i++){
//     links[i].style.color = "golden";
// }

// ------------------------------------------------

// using classList
let img= document.querySelector('img');
console.dir(img.classList);

let heading = document.querySelector('h1');

heading.classList.add("green");
heading.classList.add("underline");

// heading.classList.remove("green");

// heading.setAttribute('class','green') //setattribute se sirf ek hi class ki value rakh sakte hai

console.dir(heading.classList.contains('underline'));

heading.classList.toggle('green');

let box = document.querySelector('.box');
box.classList.add('yellowBg');
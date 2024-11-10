//  Manipulating Attributes
/*let img = document.querySelector('img');
console.dir(img.getAttribute('id'));
img.setAttribute('id','spidermanimg');

console.dir(img.getAttribute('id'));

img.setAttribute('src','assets/creation_3.jpeg');

img.setAttribute('class','images');*/

// ------------------------------------------------

// Manipulating Styles
let heading = document.querySelector('h1');
heading.style.color = 'blue';
heading.style.backgroundColor = 'grey';
let links = document.querySelectorAll('.box a');
for ( link of links){
    link.style.color= "purple";g
}
// for( let i = 0 ; i<links.length ; i++){
//     links[i].style.color = "golden";
// }
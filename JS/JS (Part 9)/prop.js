let para = document.querySelector('p');
// console.dir(para);
// console.dir(para.innerText);
// console.dir(para.textContent);
// console.dir(para.innerHTML);

// para.innerText = "<u>Hi , I am Peter Parker.</u";
// para.innerHTML = "<u>Hi , I am Peter Parker.</u";

let heading = document.querySelector('h1');

heading.innerHTML= `<u>${heading.innerText}</u>`;
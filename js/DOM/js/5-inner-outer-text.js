let header = document.querySelector("header");
// header.innerHTML ='<a href="#"> Nowy link w header</a>'

header.lastElementChild.innerText += '!!!!!!!!!!!';


// console.log(header.lastElementChild.innerText);

// console.log(document.querySelector('.parSecond').outerHTML);
// console.log(document.querySelector('.parSecond').innerHTML);

let link = document.querySelector('.link.superlink');
link.classList.add('new-class');
link.classList.remove('new-class');

console.log(link.classList);
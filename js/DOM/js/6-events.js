let header = document.querySelector('header');
let h1 = document.querySelector('h1');
colorChange = () => {

    header.style.color = 'red';
    console.log('click na <header></header> ')
}



h1.onclick = event => {
    event.stopPropagation();
    console.log('h1');
}









let parSecond = document.querySelector('.parSecond');

onDbclick = () => {
    parSecond.style.backgroundColor = 'yellow';
}

parSecond.ondblclick = onDbclick;


let parFirst = document.querySelector('#parFirst');

Mouse = ()=> {
    // parFirst.style.color= 'blue';
    parFirst.classList.toggle('toggle');
}

parFirst.addEventListener('mouseover', Mouse);

// parFirst.removeEventListener ('mouseover', Mouse);

let link =document.querySelector('a[href="https://akademia108.pl"]');

link.onclick = (event) => {
event.preventDefault();
console.log(event);
}
console.log(link);



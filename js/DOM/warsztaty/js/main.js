let button = document.querySelector('button');
let p1 = document.querySelector('#p1');
let p2 = document.querySelector('#p2');
ustawTlo = () => {
    p1.style.backgroundColor= 'red';
    p2.style.backgroundColor= 'yellow';

}

button.onclick = ustawTlo;


let inputSub = document.querySelector('form');

inputSub.onsubmit = event => {
    let fname =  inputSub.querySelectorAll('input[type="text"]')[0].value;
    let lname =  inputSub.querySelectorAll('input[type="text"]')[1].value;
    event.preventDefault();


    console.log(fname,lname);
}



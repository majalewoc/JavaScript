let element;

element = document.getElementById('parFirst'); //get element by id

element = document.getElementsByClassName('link superlink'); // get element by class
// element = document.getElementsByClassName('Link')[document.getElementsByClassName('Link').length-1];


element = document.getElementsByTagName('p') [0];// by tag

element = document.querySelector('#sectionFirst .parSecond .par2').innerHTML;// by queryselector 

element = document.querySelectorAll('#sectionFirst a')[2].innerHTML;// by queryselectorall



element = document.getElementById('main-header').parentElement;


element = document.getElementById('main-header').parentElement.children;

element = document.querySelector('header').firstElementChild;
console.log(element);
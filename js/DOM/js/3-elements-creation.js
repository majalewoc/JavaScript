let footer = document.createElement('footer'); //footer creation
let footerText = document.createTextNode('Stopka strony'); // test creation

footer.appendChild(footerText);
footer.setAttribute('class', 'test-footer-attribute');

document.querySelector('section').insertAdjacentElement('afterend', footer);
console.log(footer);
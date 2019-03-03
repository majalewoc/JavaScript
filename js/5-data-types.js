let typeNumber = 10 + 10;

// typeNumber='20' * '2' + 10;

// typeNumber = `10 +10 = ${10+10}`;

typeNumber = `Mam ${typeNumber}`;

// type = boolean

typeNumber = 4 + 4 === 8;
typeNumber = 4 + 4 > 8;

// console.log(typeNumber);


// type = array


let table = ['Michał', 'Inna', "Ola", "Martyna","Arek"];


// table[1] = 'Ola ma 1 kota';
// table[1] = {name: 'Ola', has: '1 kota'}

// table.reverse();
table.unshift('ooops');  //add element at the beginning
table.shift(); //remove first element
table.push('ooops'); //add element at the end
table.pop(); //remove last element

table.slice(1,3); //cuts and does not modify []
// table.splice(1,3); //modifies original []
table.splice(2, 1, 'Daria'); // replace
// table.splice(3, 0, 'Daria'); //add 

// console.log(table.slice(1,4));
// table.sort();
let tableNumber=[1, 76, 338, -1,0];

tableNumber =  tableNumber.sort((number1, number2) => {
    // if (number1>number2) return number1; //asc.
     // if (number1<number2) return number1; //desc.
    return number2 - number1;
});



console.log(tableNumber);

// let sampleObject = {id: 3, name: 'Kacper'};
// console.log(sampleObject.name, sampleObject.id);


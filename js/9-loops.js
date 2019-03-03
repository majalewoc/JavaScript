let users = [
{  
    firstName: 'Kubs',
    lastName: 'Dulny'
}, {
    firstName: 'Majs',
    lastName: 'Lewok',
}, {
    firstName: 'Denis',
    lastName: 'XYZ'
}
];


// console.log(users [0].firstName,users [1].firstName, users [2].firstName);
// for (let index = 0; index < users.length; index++) {
//     console.log(users[index].firstName);
// }

// let number = 10;

// while (number>=0) {
//     console.log(number);
//     number --;

// }

// petla forEach

users.forEach((element,index) => {
    if (index < 1) {
    if (element.firstName === 'Kubs') {
        element.eyesColor = 'blue';

    } else if (element.firstName === 'Majs') {
        element.eyesColor = 'green';
    } else if (element.firstName === 'Denis') {
        element.eyesColor = 'no eyes';
    }
    } else {
        element.eyesColor ='black';
    }
});

console.log(users);

// do {
//     console.log(number2);
// }while (number)//to finish
// zapis standardowy

let value1= 2;
let value2= 3;

// const multiply = function(value1, value2) {
//     console.log(value1, value2)
//     let result = value1 * value2;
//     return result;
// };
// let resultMultiply = multiply(value1, value2);
// console.log(resultMultiply);

// zapis strzałkowy 1

// const multiply = (value1, value2) => value1 * value2;
// console.log(multiply(value1, value2));

// zapis strzałkowy 2
const multiply = value1 => value1 *2;

console.log(multiply(value1));
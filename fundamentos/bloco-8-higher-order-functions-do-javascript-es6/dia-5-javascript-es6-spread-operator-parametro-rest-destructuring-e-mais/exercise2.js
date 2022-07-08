// const sumOfNumbers = (...numbers) => {
//   let result = 0;
//   numbers.forEach((number) => {
//     result += number;
//   })
//   return result;
// }

// console.log(sumOfNumbers(1, 2, 3, 5));

const sum = (...numbers) => numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(1, 2, 3, 5));
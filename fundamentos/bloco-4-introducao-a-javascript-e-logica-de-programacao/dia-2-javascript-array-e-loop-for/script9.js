let numbers = [];
for(index = 1; index <= 25; index += 1) {
    numbers.push(index)
}
let numbersdividedby2 = [];
for(index = 0; index < numbers.length; index += 1) {
    numbersdividedby2.push(numbers[index] / 2)
}
console.log(numbersdividedby2)
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMultiplied = [];
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === numbers[numbers.length - 1]) {
        numbersMultiplied.push(numbers[index] * 2);
    }
    else (numbersMultiplied.push(numbers[index] * numbers[index + 1]));
}
console.log(numbersMultiplied); 
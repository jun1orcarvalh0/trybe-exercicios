let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let largestNumber = numbers[0]

for (let index = 0; index < numbers.length; index += 1){
    if (largestNumber < numbers[index]) {
        largestNumber = numbers[index]
    }
}

console.log(largestNumber);
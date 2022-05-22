let array = ['java', 'javascript', 'python', 'html', 'css'];

let largestWord = array[0];
let smallestWord = array[0];

for (index = 0; index < array.length; index += 1) {
    if (largestWord.length < array[index].length)
    largestWord = array[index];
    if (smallestWord.length > array[index].length)
    smallestWord = array[index]
}
console.log(largestWord)
console.log(smallestWord)
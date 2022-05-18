let word = 'tryber';
let backWord = "" 
for (let index = word.length - 1; index >= 0; index -= 1) {
    backWord += word[index]
}

console.log(backWord)
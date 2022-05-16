let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaDeNumbers = null;
let mediaAritmetica = null;

for (let index = 0; index < numbers.length; index += 1) {
    somaDeNumbers += numbers[index]
}

mediaAritmetica = somaDeNumbers / numbers.length - 1

console.log(mediaAritmetica)

if (mediaAritmetica > 20) {
    console.log("valor maior que 20")
}
else {
    console.log("valor menor ou igual a 20")
}
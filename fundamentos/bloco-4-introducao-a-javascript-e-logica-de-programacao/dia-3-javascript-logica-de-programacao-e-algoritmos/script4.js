let number = 50;
let biggestPrimeNumber = 0;

for(let numbersVerification = 0; numbersVerification <= number; numbersVerification += 1) {
    let dividers = 0;
    for(let divisors = 0; divisors <= numbersVerification; divisors += 1) {
        if (numbersVerification % divisors === 0) {
            dividers += 1;
        };
    }
    if(dividers === 2) {
        biggestPrimeNumber = numbersVerification;
    };
}
console.log(biggestPrimeNumber)
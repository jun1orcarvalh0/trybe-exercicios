const readline = require('readline-sync');

function handleBMI(weight, height) {
  const heightToMeters = height / 100;
  const heightByHeight = heightToMeters ** 2;
  const result = weight/heightByHeight;
  
  return result;
}

function main() {
  const weightInKg = readline.questionFloat('What’ your weight? (kg)');
  const heightInCm = readline.questionInt('What’ your height?(cm) ');

  const bmi = handleBMI(weightInKg, heightInCm);

  if (bmi < 18.5) {
    console.log(`Abaixo do peso (magreza)`)
    return;
  } 
  if (bmi >= 18.5 && bmi <= 24.9) {
    console.log(`Peso normal`);
    return;
  }
  if (bmi >= 25 && bmi <= 29.9) {
    console.log(`Acima do peso (sobrepeso)`);
    return;
  }
  if (bmi >= 30 && bmi <= 34.9) {
    console.log(`Obesidade grau I`);
    return;
  }
  if (bmi >= 35 && bmi <= 39.9) {
    console.log(`Obesidade grau II`);
    return;
  }
  if (bmi >= 40) {
    console.log(`Obesidade graus III e IV`);
    return;
  }
}

main();
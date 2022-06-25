// <<< 1st exercise >>>
const generateEmail = (fullName) => {
  return ({ nomeCompleto: fullName, email: `${fullName.split(" ")[0].toLowerCase()}_${fullName.split(" ")[1].toLowerCase()}@trybe.com` });
}

// console.log(generateEmail('Matheus Francisco'));
// console.log(generateEmail('Pedro Guerra'));

const newEmployees = (generateEmail) => {
  const employees = {
    id1: generateEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: generateEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: generateEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// console.log(newEmployees(generateEmail))

// <<< 2nd exercise >>>

const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
}

// console.log(lotteryResult(2, numberChecker));

// <<< 3rd exercise >>>

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswer, studentAswer) => {
  if(rightAnswer === studentAswer) {
    return 1;
  } if (studentAswer === 'N.A') {
    return 0;
  }
  return -0.5;
}

const countPoints = (rightAnswers, studentAswers, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1); {
    const actionReturn = action(rightAnswers[index], studentAswers[index]);
    contador += actionReturn;
  }
  return `Resultado final: ${contador} pontos`;
};

// console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));
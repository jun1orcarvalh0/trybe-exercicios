//Array.forEach
const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

names.forEach((name, index) => {
  names[index] = name.toUpperCase();
});

// console.log(names); //meu jeito de fazer


// const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

// const convertToUpperCase = (name, index) => {
//   names[index] = name.toUpperCase();
// };

// names.forEach(convertToUpperCase);
// console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ] //jeito deles de fazer

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// emailListInData.forEach(showEmailList);

//Array.find

// FIRST EXERCISE
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = numbers.find((number) => number % 3 === 0 && number % 5 === 0)
// console.log(findDivisibleBy3And5) // meu jeito

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = (number) => number % 3 === 0 && number % 5 === 0;

// const firstDivisibleby3and5 = numbers.find(findDivisibleBy3And5);

// console.log(firstDivisibleby3and5); // outro jeito (voltar e olhar o gabarito);

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = () => {
//   // Adiciona seu código aqui
//   return numbers.find((number) => number % 3 === 0 && number % 5 === 0);
// }

// console.log(findDivisibleBy3And5()) // solucao do gabarito

// SECOND EXERCISE

const names1 = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = names1.find((name) => name.length === 5);

// console.log(findNameWithFiveLetters);

// THIRD EXERCISE

// const musicas = [
//   { id: '31031685', title: 'Partita in C moll BWV 997' },
//   { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//   { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// ]

// const findMusic = musicas.find((musica) => musica.id === '31031685')

// // console.log(findMusic); //meu jeito

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  return musicas.find((musica) => musica.id === id);
}

// console.log(findMusic('31031685')) //gabarito

// Array.some e Array.every

const grades = {
  portugues: 'Aprovado',
  matematica: 'Aprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => (
  Object.values(studentGrades).every((grade) => grade === 'Aprovado')
);

// console.log(verifyGrades(grades));

// FIRST EXERCISE
const names2 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (names2, name) => {
  return names2.some((currentName) => currentName === name);
}

// console.log(hasName(names2, 'Cláudia')); //

// SECOND EXERCISE
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  return arr.every((person) => person.age >= minimumAge);
}

// console.log(verifyAges(people, 16));

// Array.sort

// FIRST EXERCISE
const people1 = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people1.sort((a, b) => a.age > b.age ? 1 : -1);

// console.log(people1);

// SECOND EXERCISE
const people2 = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people2.sort((a, b) => a.age > b.age ? -1 : 1);

// console.log(people2);

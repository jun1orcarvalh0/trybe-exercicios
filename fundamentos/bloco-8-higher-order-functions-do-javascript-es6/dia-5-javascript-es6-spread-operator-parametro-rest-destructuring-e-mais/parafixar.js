// Spread Operator

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'morango', 'mamao'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['aveia', 'whey', 'pasta de amendoim'];

const fruitSalad = (fruit, additional) => [... fruit, ...additional];

// console.log(fruitSalad(specialFruit, additionalItens));

// Parametro Rest

function quantosParams(...args) {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

// console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
// console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

// const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
// console.log(sum(4, 7, 8, 9, 60)); // 88

// Object destructuring

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

// const { name, price } = product;
// console.log(`nome: ${name} preco: ${price}`);

// definindo o objeto
const character = {
  nome: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    nome: 'Tatooine',
    population: '200000',
  },
};

// const { nome, age, homeWorld: { nome: planetName}, description: { jedi } } = character;
// console.log(`Esse é o ${nome}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`)

const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};

const { workDays, weekend } = daysOfWeek;
const weekDays = [...workDays, ...weekend];

// console.log(weekDays);

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const userAndJobsInfos = {
  ...user,
  ...jobInfos,
};

// const { name, age, nationality, profession, squad, squadInitials} = userAndJobsInfos;

// console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);

// Array Destructuring

const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

// console.log(firstCountry); // Brazil
// console.log(secondCountry); // Japan
// console.log(thirdCountry); // China
// console.log(fourthCountry); // Canada

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
const [saudacao, realizaSaudacao] = saudacoes;

// console.log (realizaSaudacao(saudacao)); // Olá (rever isso)

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // gato água arroz

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
[animal, bebida, comida] = [comida, animal, bebida];

console.log(animal, bebida, comida);

let numerosPares = [1, 3, 5, 6, 8, 10, 12];
[,,, ...numerosPares] = numerosPares;

//console.log(numerosPares);

// Default Destructuring

// const person = {
//   name: 'João',
//   lastName: 'Jr',
//   age: 34,
// };



// const { nationality = 'Brazilian'} = person;

// console.log(nationality)

const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

// console.log(z);

//para fixar
const getNationality = ({ firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));

//Object Property Shorthand

// para fixar
const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

// console.log(getPosition(-19.8157, -43.9542));

//Default Parameters

const greeting = (user = 'usuário') => //console.log(`Welcome ${user}!`);

greeting(); // Welcome usuário!

//para fixar

const multiply = (number, value = 1) => {
  return number * value
};

// console.log(multiply(8));
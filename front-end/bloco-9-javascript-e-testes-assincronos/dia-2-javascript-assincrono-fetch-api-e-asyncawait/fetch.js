const fetch = require('node-fetch');

// const getRandomAdvice = () => {
//   const url = '	https://pi.adviceslip.com/advice';

//   fetch(url)
//     .then((response) => response.json())
//     .then(({ slip: {id, advice} }) => console.log(advice))
//     .catch((error) => console.log(`Algo deu errado :( \n  ${error}`));
// }

// getRandomAdvice();

// const fetchJoke = async () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   const result = await fetch(url)
//     .then((response) => response.json())
//     .then((data) => data.value)
//     .catch((error) => `Algo deu errado :( \n${error}`);

//   console.log(result);
// };

// fetchJoke();

// // Chuck Norris can write multi-threaded applications with a single thread.

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
}

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.
const randomNumber = () => Math.floor(Math.random() * 101);

const upperCase = (str) => str.toUpperCase();

const firstLetter = (str) => str.charAt(0);

const sumOfStrings = (str1, str2) => str1.concat(str2);

function fetchDog() {
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => data);

}

module.exports = { randomNumber, upperCase, firstLetter, sumOfStrings, fetchDog };

const fs = require('fs').promises;
const path = require('path');
const SIMPSONS_DATA_PATH = './simpsons.json';
const SIMPSONSFAMILY_DATA_PATH = './simpsonFamily.json';

async function readSimpsonsData(id) {

  const data = await fs.readFile(path.resolve(__dirname, SIMPSONS_DATA_PATH));
  const simpsons = JSON.parse(data);
  // const arrayOfSimpsons = simpsons.map((simpson) => `${simpson.id} - ${simpson.name}`);
  // arrayOfSimpsons.forEach((simpsonInfo) => console.log(simpsonInfo));
  const findId = simpsons.find((simpson) => Number(simpson.id) === id)
  console.log(simpsons)
  if (!findId) {
    throw new Error('Id não encontrado');
  }
  return findId;  
}

async function removeSimpsonsData() {
  const data = await fs.readFile(path.resolve(__dirname, SIMPSONS_DATA_PATH));
  const simpsons = JSON.parse(data);
  const filterSimpsons = simpsons.filter((simpson) => Number(simpson.id) !== 6 && Number(simpson.id) !== 10)
  console.log(filterSimpsons)
  await fs.writeFile(path.resolve(__dirname, SIMPSONS_DATA_PATH), JSON.stringify(filterSimpsons));
}

async function createSimpsonsFamilyData() {
  const data = await fs.readFile(path.resolve(__dirname, SIMPSONS_DATA_PATH));
  const simpsonsFamily = JSON.parse(data);
  console.log(simpsonsFamily)

  const filterSimpsons = simpsonsFamily.filter((simpson) => Number(simpson.id)=== 1 || Number(simpson.id) === 2 || Number(simpson.id) === 3 || Number(simpson.id) === 4 )
  console.log(filterSimpsons)
  await fs.writeFile(path.resolve(__dirname, SIMPSONSFAMILY_DATA_PATH), JSON.stringify(filterSimpsons));
}

async function writeNewMemberSimpsonsFamily() {
  const data = await fs.readFile(path.resolve(__dirname, SIMPSONSFAMILY_DATA_PATH));
  const simpsonsFamily = JSON.parse(data);
  await fs.writeFile(path.resolve(__dirname, SIMPSONSFAMILY_DATA_PATH), JSON.stringify([...simpsonsFamily, { id: '8', name: 'Nelson Muntz' }]));
};

async function replaceNelsonForMaggie() {
  const data = await fs.readFile(path.resolve(__dirname, SIMPSONSFAMILY_DATA_PATH));
  const simpsonsFamily = JSON.parse(data);
  const removingNelson = simpsonsFamily.filter((simpson) => Number(simpson.id) !== 8);
  await fs.writeFile(path.resolve(__dirname, SIMPSONSFAMILY_DATA_PATH), JSON.stringify([...removingNelson, { id: '15', name: 'Maggie Simpson' }]));
};

module.exports = {
  readSimpsonsData,
  removeSimpsonsData,
  createSimpsonsFamilyData,
  writeNewMemberSimpsonsFamily,
  replaceNelsonForMaggie
}
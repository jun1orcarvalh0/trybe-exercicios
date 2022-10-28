const { readSimpsonsData, removeSimpsonsData, createSimpsonsFamilyData, writeNewMemberSimpsonsFamily, replaceNelsonForMaggie } = require('./fsUtils');

async function main() {
    // const data = await readSimpsonsData(1);
    // console.log(data);
    // removeSimpsonsData();
    // createSimpsonsFamilyData();
    // writeNewMemberSimpsonsFamily();
    replaceNelsonForMaggie();
};

main();
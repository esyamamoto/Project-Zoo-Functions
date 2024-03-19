const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const responsibleFirst = data.employees
    .find((employee) => employee.id === id).responsibleFor[0];

  const animal = data.species
    .find((specie) => specie.id === responsibleFirst).residents;
  return Object.values(animal.sort((a, b) => a.age - b.age)[animal.length - 1]);
};

module.exports = getOldestFromFirstSpecies;

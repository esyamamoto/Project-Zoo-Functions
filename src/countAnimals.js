const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    return data.species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
  }
  if (animal.species && !animal.sex) {
    return data.species
      .find((specie) => specie.name === animal.species).residents.length;
  }
  return data.species
    .find((specie) => specie.name === animal.species)
    .residents.filter((resident) => resident.sex === animal.sex).length;
};

module.exports = countAnimals;

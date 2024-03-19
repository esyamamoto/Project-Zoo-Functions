const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => data.species
  .find((animals) => animals.name === animal)
  .residents.every((animals) => animals.age > age);

module.exports = getAnimalsOlderThan;

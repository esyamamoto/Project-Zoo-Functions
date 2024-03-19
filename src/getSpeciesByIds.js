const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => data.species
  .filter((animals) => ids.includes(animals.id));

module.exports = getSpeciesByIds;

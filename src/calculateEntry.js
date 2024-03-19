const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const count = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      count.child += 1;
    } else if (entrant.age >= 18 && entrant.age < 50) {
      count.adult += 1;
    } else {
      count.senior += 1;
    }
  });
  return count;
};

function calculateEntry(entrants) {
  if (!entrants || entrants.length === 0) {
    return 0;
  }
  const total = (countEntrants(entrants)
    .adult * data.prices.adult) + (countEntrants(entrants)
    .senior * data.prices.senior) + (countEntrants(entrants)
    .child * data.prices.child);
  return total;
}

module.exports = { calculateEntry, countEntrants };

const data = require('../data/zoo_data');

const scheduleAnimal = (animal) => data.species // recebe o nome de um animal como argumento e retorna a disponibilidade desse animal no zoológico.
  .find(({ name }) => name === animal)
  .availability;

const scheduleDay = (...days) => {
  const schedule = {};
  days.flat() // junta os arrays em um
    .forEach((day) => {
      if (day === 'Monday') {
        schedule[day] = {
          officeHour: 'CLOSED',
          exhibition: 'The zoo will be closed!',
        };
      } else {
        schedule[day] = {
          officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
          exhibition: data.species
            .filter(({ availability }) => availability.includes(day))
            .map(({ name }) => name),
        };
      }
    });
  return schedule;
};

const getSchedule = (scheduleTarget) => {
  const days = Object.keys(data.hours); // armazena um array com os dias do data.hours
  const animalsName = data.species.map(({ name }) => name);

  if (animalsName.includes(scheduleTarget)) { // Se o alvo for um animal, retorna a disponibilidade desse animal
    return scheduleAnimal(scheduleTarget);
  }
  if (days.includes(scheduleTarget)) { // Se o alvo for um dia da semana, retorna a programação para esse dia
    return scheduleDay(scheduleTarget);
  }
  return scheduleDay(days); // Caso contrário, retorna a programação para todos os dias da semana
};

module.exports = getSchedule;

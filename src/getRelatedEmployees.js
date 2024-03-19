const data = require('../data/zoo_data');

const isManager = (id) => data.employees
  .some((employee) => employee
    .managers.find((manager) => manager === id));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    return data.employees
      .filter((employee) => employee.managers.includes(managerId))
      .map((employee) => `${employee.firstName} ${employee.lastName}`);
  }

  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
};

module.exports = { isManager, getRelatedEmployees };

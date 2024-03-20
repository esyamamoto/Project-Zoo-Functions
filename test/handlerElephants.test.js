const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Para o argumento count deve retornar o número inteiro 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Para o argumento names deve retornar um array de nomes que possui o nome Jefferson', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });

  it('Para o argumento averageAge deve retornar um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });

  it('Para o argumento availability - Retorna um array com a relação de dias em que é possível visitar os elefantes , ["Friday", "Saturday", "Sunday", "Tuesday"] ', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });

  it('Para o argumento location deve retornar a string NW;', () => {
    expect(handlerElephants('location')).toMatch('NW');
  });

  it('Não passando argumentos a função deve retornar undefined', () => {
    expect(handlerElephants(undefined)).toBeUndefined();
  });

  it('Para o argumento popularity deve retornar um número igual ou maior a 5;', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });

  it('Para o argumento names deve retornar um array com os nomes dos elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('Deve retornar uma mensagem de erro quando o parâmetro não for uma string', () => {
    expect(handlerElephants(1234)).toBe('Parâmetro inválido, é necessário uma string');
  });
});

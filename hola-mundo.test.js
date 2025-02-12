const saludar = require('./index');

test('Debe saludar a Mundo', () => {
  expect(saludar('Mundo')).toBe('Hola, Mundo!');
});
const test = require('node:test');
const assert = require('node:assert');
const { sumar, obtenerEntorno } = require('../src/operaciones');

test('La suma de 2 + 3 debe ser 5', () => {
  assert.strictEqual(sumar(2, 3), 10);
});

test('Debe leer correctamente la variable de entorno', () => {
  assert.strictEqual(obtenerEntorno(), 'produccion');
});

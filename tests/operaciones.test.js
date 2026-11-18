const test = require('node:test');
const assert = require('node:assert');
const { sumar, obtenerEntorno } = require('../src/operaciones');

test('La suma de 2 + 3 debe ser 10', () => {
  assert.strictEqual(sumar(2, 3), 5);
});

test('Debe leer correctamente la variable de entorno', () => {
  assert.strictEqual(obtenerEntorno(), 'produccion');
});
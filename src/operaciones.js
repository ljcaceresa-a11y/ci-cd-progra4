function sumar(a, b) {
  return a + b;
}

function obtenerEntorno() {
  return process.env.APP_ENV || 'desarrollo';
}

module.exports = { sumar, obtenerEntorno };
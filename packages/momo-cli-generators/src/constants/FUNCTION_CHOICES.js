const FUNCTION_TYPES = require('./FUNCTION_TYPES');

const FUNCTION_CHOICES = [
  FUNCTION_TYPES.ACTION,
  FUNCTION_TYPES.COMPONENT,
  FUNCTION_TYPES.CONTAINER,
  FUNCTION_TYPES.HELPER,
  FUNCTION_TYPES.PLAIN_FUNCTION,
  FUNCTION_TYPES.REDUCER,
  FUNCTION_TYPES.SELECTOR,
];

module.exports = FUNCTION_CHOICES;

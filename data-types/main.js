var isBoolean = true;
var isString = "Cadena de Texto";
var isNumber = 123;
var isNull = null;
var isUndefined = undefined;
var isObject = {
  name: 'Elizabeth',
  last_name: 'Manrique'
}
var isFunction = function() {
  return 'Hi';
};

var isArray = ['Eli', 'Karla', 'Jon', 'Estanis'];

console.log(isBoolean, typeof isBoolean);
console.log(isString, typeof isString);
console.log(isNumber, typeof isNumber);
console.log(isNull, typeof isNull);
console.log(isUndefined, typeof isUndefined);
console.log(isObject, typeof isObject);
console.log(isFunction(), typeof isFunction);
console.log(isArray, typeof isArray);

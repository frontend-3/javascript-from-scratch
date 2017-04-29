// Ejemplo función
function sayHi(name) {
  console.log("Hi " + name);
}

sayHi("Eli");


// Formas de declarar funciones
function rest(a, b) {
  console.log("La resta es: ", a - b);
}

var sum = function (a , b) {
  console.log("La suma es: ", a + b);
}

rest(7, 4);
sum(3, 4);

// Funciones anidadas
function processStudent(student) {
  function sayHi() {
    console.log("Hola ",student.name);
  }
  return sayHi();
}
processStudent({ name: "Eli", lastName: "Manrique" });

// Funciones recursivas
function factorial(n) {
  if (n == 1) {
    return 1;
  }

  return factorial(n-1) * n;
}

console.log("Factorial: ", factorial(4));

// Funciones y scope
function approveStudent(student) {
  var minimumNote = 13;

  if (student.note > minimumNote) {
    console.log("Felicidades, estás aprobado");
  }
}

approveStudent({ name: 'Eli', lastName: 'Manrique', note: 12 });

try {
  console.log(minimumNote);
} catch (e) {
  console.log("Hubo un error", e);
}

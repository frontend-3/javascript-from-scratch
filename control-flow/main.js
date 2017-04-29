 // Ejemplo con if/else
var studentName = "Karla";

if (typeof studentName === "string") {
  console.log("studentName es un string!!!");
} else {
  console.log("Error! studentName no es un String");
}

// Ejemplo switch
var lastName = "Gutierrez";

switch(typeof lastName){
  case 'string':
    console.log('lastName es un string');
    break;
  case 'number':
    console.log('lastName es un number');
    break;
  default:
    console.log('lastName no se encontró ningún match');
}

// Ejemplo while
var note = 20;

while (note >= 12) {
  if (note == 12) {
    console.log('Estás desaprobado 😢');
  }

  note = note - 1;
}

// Ejemplo for
var students = [
  { name: 'Eli', lastName: 'Manrique', note: 11},
  { name: 'Karla', lastName: 'Jaime', note: 12},
  { name: 'Jon', lastName: 'Lozano', note: 17},
  { name: 'Estanis', lastName: 'Guillen', note: 13}
];
var student;

for (var i = 0; i < students.length; i++) {
  student = students[i];
  console.log('Nombre Completo:', student.name + " " + student.lastName, ', Note:', student.note);
}


// Ejemplo Try/Catch
try {
  var number1 = 1;
  var div = number1 / number2;

} catch (e) {
  console.log("No puedes dividir número entre una variable que no existe 💥", e);
}

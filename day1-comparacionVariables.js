//* Day 1
let numeroUn = 1
let stringUn = '1'
let numeroTreinta = 30
let stringTreinta = '30'
let numeroDiez = 10
let stringDiez = '10'

function compararTiposYValores(var1, var2, nombre1, nombre2) {
  if (var1 === var2) {
    console.log(`Las variables ${nombre1} y ${nombre2} tienen el mismo valor y el mismo tipo`);
  } else if (var1 == var2) {
    console.log(`Las variables ${nombre1} y ${nombre2} tienen el mismo valor, pero tipos diferentes`);
  } else {
    console.log(`Las variables ${nombre1} y ${nombre2} no tienen el mismo valor`);
  }
}

compararTiposYValores(numeroUn, stringUn, 'numeroUn', 'stringUn');
compararTiposYValores(numeroTreinta, stringTreinta, 'numeroTreinta', 'stringTreinta');
compararTiposYValores(numeroDiez, stringDiez, 'numeroDiez', 'stringDiez');

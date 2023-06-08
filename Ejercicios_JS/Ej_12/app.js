
var lado1 = parseInt(prompt("Ingrese el lado 1 del triángulo:"));
var lado2 = parseInt(prompt("Ingrese el lado 2 del triángulo:"));
var lado3 = parseInt(prompt("Ingrese el lado 3 del triángulo:"));

verificarTriangulo(lado1, lado2, lado3);

function verificarTriangulo(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
      console.log("El triángulo es equilátero.");
    } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
      console.log("El triángulo es isósceles.");
    } else {
      console.log("El triángulo es escaleno.");
    }
  }
  

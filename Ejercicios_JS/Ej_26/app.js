        // Solicitar ingreso de números al usuario

let valores = [];
let numero;

do {
  numero = parseFloat(prompt("Ingrese un número o ingrese un valor no numérico para finalizar:"));

  if (!isNaN(numero)) {
    valores.push(numero);
  }
} while (!isNaN(numero));

            // Verificar si se ingresaron valores

if (valores.length > 0) {
  calcularEstadisticas(valores);
} else {
  console.log("No se ingresaron valores numéricos.");
}


function calcularEstadisticas(valores) {
    let sumatoria = 0;
    let menor = valores[0];
    let mayor = valores[0];
  
    for (let i = 0; i < valores.length; i++) {
      sumatoria += valores[i];
  
      if (valores[i] < menor) {
        menor = valores[i];
      }
  
      if (valores[i] > mayor) {
        mayor = valores[i];
      }
    }
  
    console.log("Sumatoria de los valores ingresados: " + sumatoria);
    console.log("Menor valor ingresado: " + menor);
    console.log("Mayor valor ingresado: " + mayor);
  }
  
  
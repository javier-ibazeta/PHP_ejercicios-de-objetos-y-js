

var nro1 = parseFloat(prompt("Ingrese el número 1:"));
var nro2 = parseFloat(prompt("Ingrese el  número 2:"));
var oper = prompt("Ingrese el operador +, -, *, o /:");

calcularOperacion(nro1, nro2, oper);


function calcularOperacion(nro1, nro2, oper) {

    let resultado;
  
    switch (oper) {
      case '+':
        resultado = nro1 + nro2;
        break;
      case '-':
        resultado = nro1 - nro2;
        break;
      case '*':
        resultado = nro1 * nro2;
        break;
      case '/':
        resultado = nro1 / nro2;
        break;
      default:
        console.log("Operador no válido");
        alert("Operador no válido");
        return;
    }
  
    console.log("El resultado de la operación es: " + resultado);
    alert("El resultado de la operación es: " + resultado);

  }
  

  
  
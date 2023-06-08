var categoria = parseInt(prompt("Ingrese la categoría del empleado 1, 2 o 3:"));
var hsExtra = parseInt(prompt("Ingrese la cantidad de horas extra trabajadas:"));

calcularSueldo(categoria, hsExtra);

function calcularSueldo(categoria, hsExtra) {
    var sueldoBase;
  
    switch (categoria) {
      case 1:
        sueldoBase = 2000;
        if (hsExtra > 20) {
          sueldoBase += 500;
        }
        break;
      case 2:
        sueldoBase = 3000;
        break;
      case 3:
        sueldoBase = 4000;
        if (hsExtra > 30) {
          sueldoBase += 1000;
        }
        break;
      default:
        alert("Categoría no válida");
        return;
    }
  
    alert("Sueldo base: $" + sueldoBase);
  
    if (sueldoBase > 4000) {
      alert("El sueldo mensual supera los $4000.");
    } else {
      alert("El sueldo mensual no supera los $4000.");
    }
  }
  

  
  
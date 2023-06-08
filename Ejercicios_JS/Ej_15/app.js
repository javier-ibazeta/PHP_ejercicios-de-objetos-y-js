
var min = parseInt(prompt("Ingrese el extremo inferior del rango:")); 

var max = parseInt(prompt("Ingrese el extremo superior del rango:")); 

var cantValores = parseInt(prompt("Ingrese la cant de valores desconocidos:")); 

verificarRango(min, max, cantValores); 

 

function verificarRango(min, max, cantValores) { 

  if (max - min < 5) { 

    alert("La diferencia entre los extremos del rango debe ser de al menos 5 números enteros."); 

    return; 

  } 

 
  for (let i = 1; i <= cantValores; i++) { 

    let numero = parseInt(prompt("Ingrese el número " + i + ":")); 

  

    if (numero >= min && numero <= max) { 

      alert(numero + " está dentro del rango."); 

        if (numero % 2 === 0) { 

        alert(numero + " es par."); 

      } else { 

        alert(numero + " es impar."); 

      } 

    } else { 

      alert(numero + " está fuera del rango."); 

        if (numero % 2 !== 0) { 

        alert(numero + " es impar."); 

      } 

    } 

  } 

} 
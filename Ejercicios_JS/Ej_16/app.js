do { 

    var num1 = parseFloat(prompt("Ingrese el primer número:")); 
  
    var num2 = parseFloat(prompt("Ingrese el segundo número:")); 
  
    var operador = prompt("Ingrese el operador (+, -, *, /):"); 
  

    if (isNaN(num1) || isNaN(num2)) { 
  
      alert("¡Error! Los valores ingresados no son numéricos."); 
  
    } else { 
  
      calcular(num1, num2, operador); 
  
    } 
 
    var continuar = prompt("¿Desea realizar otra operación? (s/n):"); 
  
  } while (continuar.toLowerCase() == "s" ); 
  
   
  alert("Fin del programa."); 
  
   
  function calcular(num1, num2, operador) { 
  
    let resultado; 
  
    switch (operador) { 
  
      case "+": 
  
        resultado = num1 + num2; 
  
        break; 
  
      case "-": 
  
        resultado = num1 - num2; 
  
        break; 
  
      case "*": 
  
        resultado = num1 * num2; 
  
        break; 
  
      case "/": 
  
        if (num2 !== 0) { 
  
          resultado = num1 / num2; 
  
        } else { 
  
          alert("¡Error! No se puede dividir por cero."); 
  
          return; 
  
        } 
  
        break; 
  
      default: 
  
        alert("¡Error! Operador no válido."); 
  
        return; 
  
    } 
  
    alert("Resultado: " + resultado); 
  
  } 
  
    
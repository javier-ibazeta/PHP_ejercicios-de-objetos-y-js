const calculadora = {
    sumar: function(a, b) {
      return a + b;
    },
    restar: function(a, b) {
      return a - b;
    },
    multiplicar: function(a, b) {
      return a * b;
    },
    dividir: function(a, b) {
      if (b !== 0) {
        return a / b;
      } else {
        console.log("No se puede dividir por cero.");
      }
    }
  };
  
  console.log(calculadora.sumar(5, 3)); 
  console.log(calculadora.restar(7, 2)); 
  console.log(calculadora.multiplicar(4, 6)); 
  console.log(calculadora.dividir(10, 2)); 
  console.log(calculadora.dividir(8, 0)); 
  
var nro1 = parseInt(prompt("Ingrese el primer número:")); 

var nro2 = parseInt(prompt("Ingrese el segundo número:")); 

var nro3 = parseInt(prompt("Ingrese el tercer número:")); 

 
 

verificarMultiplos(nro1, nro2, nro3); 

 
 

function verificarMultiplos(nro1, nro2, nro3) { 

    if (nro1 % 3 === 0 && nro1 % 5 === 0) { 

      alert(nro1 + " es múltiplo de 3 y 5."); 

    } else if (nro1 % 3 === 0) { 

      alert(nro1 + " es múltiplo de 3."); 

    } else if (nro1 % 5 === 0) { 

      alert(nro1 + " es múltiplo de 5."); 

    } else { 

      alert(nro1 + " no es múltiplo de 3 ni de 5."); 

    } 

   

    if (nro2 % 3 === 0 && nro2 % 5 === 0) { 

      alert(nro2 + " es múltiplo de 3 y 5."); 

    } else if (nro2 % 3 === 0) { 

      alert(nro2 + " es múltiplo de 3."); 

    } else if (nro2 % 5 === 0) { 

      alert(nro2 + " es múltiplo de 5."); 

    } else { 

      alert(nro2 + " no es múltiplo de 3 ni de 5."); 

    } 

   

    if (nro3 % 3 === 0 && nro3 % 5 === 0) { 

      alert(nro3 + " es múltiplo de 3 y 5."); 

    } else if (nro3 % 3 === 0) { 

      alert(nro3 + " es múltiplo de 3."); 

    } else if (nro3 % 5 === 0) { 

      alert(nro3 + " es múltiplo de 5."); 

    } else { 

      alert(nro3 + " no es múltiplo de 3 ni de 5."); 

    } 

  } 

   

 
 

 

  
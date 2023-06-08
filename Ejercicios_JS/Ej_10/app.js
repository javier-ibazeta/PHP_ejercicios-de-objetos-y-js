
 var ini = parseInt(prompt("Ingrese el inicio del rango:"))
 var fin = parseInt(prompt("Ingrese el fin del rango:"))
 var nro = parseInt(prompt("Ingrese el número a verificar:"))

 verificarRango(nro, ini, fin)

function verificarRango(nro, ini, fin) {
    if (fin - ini < 5) {
      alert("El rango debe tener una diferencia mínima de 5 números enteros.")
      console.log("El rango debe tener una diferencia mínima de 5 números enteros.")
      return
    }
  
    if (nro >= ini && nro <= fin) {
      alert("El número está dentro del rango.")
      console.log("El número está dentro del rango.")
  
      if (nro % 2 == 0) {
        alert("El número es par.")
        console.log("El número es par.")
      } else {
        alert("El número es impar.")
        console.log("El número es impar.")
      }
    } else {
      alert("El número no está dentro del rango.")
      console.log("El número no está dentro del rango.")
    }
  }
  
 
  
  
  
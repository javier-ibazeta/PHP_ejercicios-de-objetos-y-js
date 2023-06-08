alert(" cálculo de haberes ")
let valor_hs = parseInt(prompt("Ingrese valor de la hs. trabajada: "))
let cant_hs = parseInt(prompt("Ingrese cantidad de horas trabajadas: "))
let años = parseInt(prompt("Ingrese antiguedad laboral en años: "))
let sueldo = valor_hs*cant_hs 
let bono = 0.15*sueldo*años
let sueldo_mensual = sueldo + bono
alert("el sueldo conformado es igual a: $"+sueldo_mensual)
console.log("el sueldo conformado es igual a: $"+sueldo_mensual)
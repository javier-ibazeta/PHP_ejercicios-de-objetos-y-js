alert("ingrese 4 números. informar la suma y el promedio.")

let nro_1 = parseInt(prompt("ingrese el nro 1"))
let nro_2 = parseInt(prompt("ingrese el nro 2"))
let nro_3 = parseInt(prompt("ingrese el nro 3"))
let nro_4 = parseInt(prompt("ingrese el nro 4"))

let total = nro_1 + nro_2 + nro_3 + nro_4;
let promedio = total/4;

alert(" la suma de los nros ingresados es: "+total +" y el promedio es igual a: "+promedio)
console.log("la suma de los nros ingresados es: "+total)
console.log("el promedio es igual a: "+promedio)
alert("liquidación de haberes")
let valor_hs = parseInt(prompt("ingrese el valor de la hora"))
let canti_hs = parseInt(prompt("ingrese la cantidad de horas trabajadas en el mes"))
let años = parseInt(prompt("ingrese los años de antigüedad"))
let cant_seg = parseInt(prompt("ingrese la cantidad de seguros vendidos"))
let val_mayor = parseInt(prompt("ingrese el valor del seguro más caro vendido"))

/* calculo del sueldo */

let sueldo_parcial = valor_hs * canti_hs

let bono_1 = 0.5 * val_mayor
let bono_2 = 0.25 * sueldo_parcial * cant_seg
let bono_3 = 0.15 * sueldo_parcial * años

let sueldo_total = sueldo_parcial + bono_1 + bono_2 + bono_3

alert("el sueldo del empleado es: $"+sueldo_total)

console.log("el sueldo del empleado es: $"+sueldo_total)
// ingreso de notas  

let notas = []; 

let nota; 


do { 

  nota = parseFloat(prompt("Ingrese la nota del alumno (1 al 10) o ingrese un número negativo para finalizar:")); 

  if (nota >= 1 && nota <= 10) { 

    notas.push(nota); 

  } else if (nota >= 0) { 

    alert("¡Error! Ingrese una nota válida (1 al 10)."); 

  } 

} while (nota >= 0); 

  

// Verificar si se ingresaron notas 

 

if (notas.length > 0) { 

  calcularEstadisticas(notas); 

} else { 

  alert("No se ingresaron notas."); 

} 

function calcularEstadisticas(notas) { 

  let totalAlumnos = notas.length; 

  let aprobados = 0; 

  let desaprobados = 0; 

  let sumaNotas = 0; 

  

  for (let i = 0; i < totalAlumnos; i++) { 

    if (notas[i] >= 4) { 

      aprobados++; 

    } else { 

      desaprobados++; 

    } 

    sumaNotas += notas[i]; 

  } 

  let porcentajeAprobados = (aprobados / totalAlumnos) * 100; 

  let porcentajeDesaprobados = (desaprobados / totalAlumnos) * 100; 

  let promedioNotas = sumaNotas / totalAlumnos; 

  

  alert("Porcentaje de alumnos aprobados: " + porcentajeAprobados.toFixed(2) + "%"); 

  alert("Porcentaje de alumnos desaprobados: " + porcentajeDesaprobados.toFixed(2) + "%"); 

  alert("Promedio de las notas: " + promedioNotas.toFixed(2)); 

} 
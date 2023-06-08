    // Ejemplo de datos de encuesta
let encuesta = [
    { sexo: "M", edad: 30, altura: 160 },
    { sexo: "H", edad: 20, altura: 175 },
    { sexo: "M", edad: 40, altura: 155 },
    { sexo: "H", edad: 15, altura: 180 },
    { sexo: "H", edad: 25, altura: 170 },
    { sexo: "M", edad: 32, altura: 163 },
    { sexo: "H", edad: 28, altura: 171 },
    { sexo: "M", edad: 42, altura: 159 },
    { sexo: "H", edad: 18, altura: 188 },
    { sexo: "M", edad: 29, altura: 172 },
    { sexo: "M", edad: 36, altura: 160 },
    { sexo: "H", edad: 23, altura: 175 },
    { sexo: "M", edad: 46, altura: 157 },
    { sexo: "m", edad: 19, altura: 186 },
    { sexo: "H", edad: 27, altura: 177 },
    { sexo: "M", edad: 33, altura: 165 },
    { sexo: "m", edad: 24, altura: 173 },
    { sexo: "M", edad: 45, altura: 158 },
    { sexo: "H", edad: 21, altura: 189 },
    { sexo: "M", edad: 17, altura: 171 }
];
  
    // Calcular estadísticas
calcularEstadisticas(encuesta);

    // Función para calcular estadísticas
function calcularEstadisticas(encuesta) {
    let totalMujeres = 0;
    let mujeresMayores25 = 0;
    let totalHombres = 0;
    let hombresMenores18 = 0;
    let sumaEdadMujeres = 0;
    let cantidadMujeres = 0;
    let sumaAlturaHombres = 0;
    let cantidadHombres = 0;
    let menorEdad = encuesta[0].edad;
    let mayorAltura = encuesta[0].altura;
  
    for (let i = 0; i < encuesta.length; i++) {
      const persona = encuesta[i];
  
      if (persona.sexo === "M") {
        totalMujeres++;
  
        if (persona.edad > 25) {
          mujeresMayores25++;
        }
  
        sumaEdadMujeres += persona.edad;
        cantidadMujeres++;
      }
  
      if (persona.sexo === "H") {
        totalHombres++;
  
        if (persona.edad < 18) {
          hombresMenores18++;
        }
  
        sumaAlturaHombres += persona.altura;
        cantidadHombres++;
      }
  
      if (persona.edad < menorEdad) {
        menorEdad = persona.edad;
      }
  
      if (persona.altura > mayorAltura) {
        mayorAltura = persona.altura;
      }
    }
  
    let porcentajeMujeresMayores25 = (mujeresMayores25 / totalMujeres) * 100;
    let porcentajeHombresMenores18 = (hombresMenores18 / totalHombres) * 100;
    let promedioEdadMujeres = sumaEdadMujeres / cantidadMujeres;
    let promedioAlturaHombres = sumaAlturaHombres / cantidadHombres;
  
    console.log("Porcentaje de mujeres mayores a 25 años: " + porcentajeMujeresMayores25.toFixed(2) + "%");
    console.log("Porcentaje de hombres menores de 18 años: " + porcentajeHombresMenores18.toFixed(2) + "%");
    console.log("Promedio de edad de las mujeres: " + promedioEdadMujeres.toFixed(2));
    console.log("Promedio de altura de los hombres: " + promedioAlturaHombres.toFixed(2));
    console.log("Menor edad ingresada: " + menorEdad);
    console.log("Mayor altura ingresada: " + mayorAltura);
  }
  

  
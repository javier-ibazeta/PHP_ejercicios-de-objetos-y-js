const libro = {
    titulo: "El Doberman",
    autor: "Valeria Rossi",
    añoPublicacion: 2018,
    obtenerInformacion: function() {
      console.log(`El libro "${this.titulo}", escrito por ${this.autor}, fue publicado en ${this.añoPublicacion}.`);
    }
  };
  
  console.log(libro.titulo); // El Doberman
  console.log(libro.autor); // Valera Rossi
  libro.obtenerInformacion(); // El libro "El Doberman", escrito por Valeria Rossi, fue publicado en 2018.
  
function Tienda(nombre, direccion) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.productos = [];
    this.agregarProducto = function(nombreProducto, precio) {
      this.productos.push({ nombre: nombreProducto, precio: precio });
    };
    this.mostrarProductos = function() {
      console.log(`Productos en la tienda "${this.nombre}":`);
      for (let i = 0; i < this.productos.length; i++) {
        console.log(`${i + 1}. ${this.productos[i].nombre} - Precio: $${this.productos[i].precio}`);
      }
    };
  }
  
  const miTienda = new Tienda("SuperTienda", "Calle Principal 123");
  console.log(miTienda.nombre); // SuperTienda
  console.log(miTienda.direccion); // Calle Principal 123
  miTienda.agregarProducto("Camiseta", 20);
  miTienda.agregarProducto("Pantalón", 30);
  miTienda.agregarProducto("Zapatos", 50);
  miTienda.mostrarProductos();
  
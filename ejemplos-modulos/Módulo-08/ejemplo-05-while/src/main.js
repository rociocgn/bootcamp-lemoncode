const carrito = [ 
  { 
tipoProducto: "Camiseta", 
precio: 19.99, 
  }, 
  { 
tipoProducto: "Pantalones", 
precio: 34.99, 
  }, 
  { 
tipoProducto: "Jersey", 
precio: 44.99, 
  }, 
  { 
tipoProducto: "Vaqueros", 
precio: 79.99, 
  }, 
  { 
tipoProducto: "Polo", 
precio: 44.95, 
  }, 
]; 

i = 0;
while (i < carrito.length) {
  const prenda = carrito[i];
  console.log(`Producto: ${prenda.tipoProducto}, Precio: ${prenda.precio}`);
  i++;
}

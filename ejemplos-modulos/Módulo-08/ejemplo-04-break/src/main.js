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

const sonLosGastosDeEnvioGratis = () => {
  let total = 0;

  for (let i = 0; i < carrito.length; i++) {
    total += carrito[i].precio;
    if (total > 100) {
      console.log("Vamos a parar el array porque ya hemos superado los 100 euros");
      break;
    }
  }

  return total > 100;
};

console.log(sonLosGastosDeEnvioGratis());

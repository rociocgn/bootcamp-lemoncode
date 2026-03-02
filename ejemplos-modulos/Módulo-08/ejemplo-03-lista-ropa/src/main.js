const ropa = [ 
  { 
foto: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/onlineshop/images/image-1.jpg", 
tipoProducto: "Camisa", 
precio: 25, 
  }, 
  { 
foto: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/onlineshop/images/image-2.jpg", 
tipoProducto: "Camiseta", 
precio: 22.99, 
  }, 
  { 
foto: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/onlineshop/images/image-3.jpg", 
tipoProducto: "Vestido", 
precio: 34.99, 
  },  
  { 
foto: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/onlineshop/images/image-4.jpg", 
tipoProducto: "Vaqueros", 
precio: 79.99, 
  }, 
  { 
foto: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/onlineshop/images/image-5.jpg", 
tipoProducto: "Polo", 
precio: 44.95, 
  }, 
  { 
foto: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/onlineshop/images/image-6.jpg", 
tipoProducto: "Camisa", 
precio: 44.99, 
  }, 
];

const muestraPrenda = (prenda) => { 
const div = document.getElementById("lista-ropa"); 
const imagen = document.createElement("img"); 
const tipoProducto = document.createElement("p"); 
const precio = document.createElement("p");
const cardDiv = document.createElement("div");

  imagen.src = prenda.foto; 
  tipoProducto.textContent = prenda.tipoProducto; 
  precio.textContent = `${prenda.precio} €`;
  cardDiv.setAttribute("class", "card"); 

  div.appendChild(cardDiv);
  cardDiv.appendChild(imagen); 
  cardDiv.appendChild(tipoProducto); 
  cardDiv.appendChild(precio); 
};  

const muestraColeccionDePrendas = () => { 
for (let i = 0; i < ropa.length; i++) { 
const prenda = ropa[i]; 
    muestraPrenda(prenda); 
  } 
}; 
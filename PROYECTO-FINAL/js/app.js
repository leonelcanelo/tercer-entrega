
function swalFiremessage(title= " ", text= "", icon="") {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
    })
    
}
  Swal.fire({ 
    title: "LEY:24.788",
    text: "Prohibido la venta de alcohol a menores de 18 años, desea entrar?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, soy mayor!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Bienvenido!!",
        text: "Gracias por Elegirnos!!",
        icon: "success"
      });
    }
  });


function verificarEdad(){   
    let edad = parseInt(prompt('Ingrese su edad:'));
      if (edad < 18) {
      alert(`Prohibido la venta de bebidas alcohólicas a menores de 18 años`);
      } else if (edad >= 18) {
      alert(`Bienvenido!!!`);
  }
  }
  //////////////// carrito de compras////////
  
///crear bebidas y utilizar arri:



function crearBebida(nombre = "", precio = "", descripcion = "", imagen) {
  this.nombre = nombre;
  this.precio = precio;
  this.descripcion = descripcion;
  this.imagen = imagen;
}

// array de bebidas
const bebidas = [];

// Agregar bevidas al arrai
bebidas.push(new crearBebida("Cerveza", 5.99, "Una cerveza artesanal elaborada con ingredientes de alta calidad", "imagen1.jpg"));
bebidas.push(new crearBebida("Vino Tinto", 7.99, "Un vino tinto de alta calidad elaborado con uvas seleccionadas", "imagen2.jpg"));
bebidas.push(new crearBebida("Refresco de Frutas", 3.99, "Un refresco de frutas frescas y naturales", "imagen3.jpg"));
bebidas.push(new crearBebida("vodka", 3.99, "saborisado manzana", "imagen3.jpg"));
bebidas.push(new crearBebida("",  " ", "imagen3.jpg"));
bebidas.push(new crearBebida("fernet", 6.55 , " ", "imagen3.jpg"));

// información de las bebidas
for (let i = 0; i < bebidas.length; i++) {
  console.log(`Bebida ${i + 1}:`);
  console.log(`Nombre: ${bebidas[i].nombre}`);
  console.log(`Precio: $${bebidas[i].precio}`);
  console.log(`Descripción: ${bebidas[i].descripcion}`);
  console.log(`Imagen: ${bebidas[i].imagen}`);
  console.log(`------------------------`);
}

bebidas.forEach(function(bebida, index) {
  console.log(`Bebida ${index + 1}:`);
  console.log(`Nombre: ${bebida.nombre}`);
  console.log(`Precio: $${bebida.precio}`);
  console.log(`Descripción: ${bebida.descripcion}`);
  console.log(`Imagen: ${bebida.imagen}`);
  console.log(`------------------------`);
});

const nombresBebidas = bebidas.map(function(bebida) {
  return bebida.nombre;
});
console.log(nombresBebidas);



function mostrarBebidas(bebidas) {
const contenedorBebidas = document.getElementById("contenedor-bebidas");
contenedorBebidas.innerHTML=  "";
}
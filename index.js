const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const formulario = document.getElementById("formulario");
const contenedorPizza = document.getElementById("contenedor-pizza");

const ultimaPizza = localStorage.getItem("ultimaPizza");
if (ultimaPizza) {
  const pizzaEncontrada = JSON.parse(ultimaPizza);
  contenedorPizza.innerHTML = `
    <h2>${pizzaEncontrada.nombre}</h2>
    <img src="${pizzaEncontrada.imagen}" alt="${pizzaEncontrada.nombre}">
    <p>Precio: $${pizzaEncontrada.precio}</p>
    <p>Ingredientes: ${pizzaEncontrada.ingredientes.join(", ")}</p>
  `;
}

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); // Evitamos que se recargue la página
  const idPizza = document.getElementById("NombresPizzas").value;

  if (idPizza === "") {
    contenedorPizza.innerHTML = "Error: Debes ingresar un ID";
  } else if (!/^\d+$/.test(idPizza)) {
    contenedorPizza.innerHTML = "Error: Debes ingresar un número válido";
  } else {
    const pizzaEncontrada = pizzas.find(
      (pizza) => pizza.id === parseInt(idPizza)
    );

    if (pizzaEncontrada) {
      contenedorPizza.innerHTML = `
        <h2>${pizzaEncontrada.nombre}</h2>
        <img src="${pizzaEncontrada.imagen}" alt="${pizzaEncontrada.nombre}">
        <p>Precio: $${pizzaEncontrada.precio}</p>
        <p>Ingredientes: ${pizzaEncontrada.ingredientes.join(", ")}</p>
      `;

      localStorage.setItem("ultimaPizza", JSON.stringify(pizzaEncontrada));
    } else {
      contenedorPizza.innerHTML =
        "Lo sentimos, no encontramos la pizza con ese ID. ¿Quieres ver nuestro menú completo?";
    }
  }
});

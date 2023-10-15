// Declaramos el array para almacenar los clientes
// Añado algunos clientes para empezar

const clientes = [
  {
    nombre_mascota: "Neko",
    especie: "Gato",
    edad: 13,
    sexo: "macho",
    nombre_dueno: "Rosa López",
  },
  {
    nombre_mascota: "Lucas",
    especie: "Perro",
    edad: 2,
    sexo: "macho",
    nombre_dueno: "Lidia Lozano",
  },
  {
    nombre_mascota: "Gamora",
    especie: "Gato",
    edad: 5,
    sexo: "hembra",
    nombre_dueno: "Estefania Algora",
  },
];

// En esta clase se construyen las Mascotas

class Mascota {
  constructor(especie, nombre_mascota, edad, sexo, nombre_dueno) {
    this.nombre_mascota = nombre_mascota;
    this.especie = especie;
    this.edad = edad;
    this.sexo = sexo;
    this.nombre_dueno = nombre_dueno;
  }

  confirmacion() {
    const confirmacionElement = document.getElementById("confirmacion");
    let mensaje_confirmacion = `Gracias ${this.nombre_dueno} por registrar a ${this.nombre_mascota}`;
    confirmacionElement.className = "listado_clientes";
    console.log(
      `Gracias ${this.nombre_dueno} por registrar a ${this.nombre_mascota},`
    );

    if (this.sexo.toLowerCase() === "macho") {
      mensaje_confirmacion += `<br> ${this.especie} macho de ${this.edad} años`;
      confirmacionElement.innerHTML = mensaje_confirmacion;
      confirmacionElement.className = "listado_clientes";
      console.log(
        `☺️ Nuevo registro: ${this.especie} macho de ${this.edad} años`
      );
    } else {
      mensaje_confirmacion += `<br> ${this.especie} hembra de ${this.edad} años`;
      confirmacionElement.innerHTML = mensaje_confirmacion;
      console.log(
        `☺️ Nuevo registro: ${this.especie} hembra de ${this.edad} años`
      );
    }

    switch (this.especie.toLowerCase()) {
      case "gato":
        console.log(
          "Recuerda: Los gatitos tienen que entrar por la puerta número 2"
        );
        break;
      case "perro":
        console.log("Los perritos accederán por la puerta número 1");
    }
  }
}

// En esta función se le pedirán al usuario los datos y se devolverá una confirmación.

function nuevoCliente() {
  especie = prompt("¿Es tu mascota perro o gato?");
  nombre_mascota = prompt("¿Cómo se llama tu mascota?");
  edad = parseInt(
    prompt("¿Qué edad tiene? (En años. Si tiene menos de un año escribe 1)")
  );
  while (edad < 1) {
    alert("La edad debe ser mayor a cero");
    edad = parseInt(prompt("¿Qué edad tiene?"));
  }
  sexo = prompt("¿Es macho o hembra?");
  nombre_dueno = prompt("Por último, ¿Cuál es tu nombre?");

  const mascota = new Mascota(
    especie,
    nombre_mascota,
    edad,
    sexo,
    nombre_dueno
  );
  clientes.push(mascota); // Agrega el cliente al array de clientes
  mascota.confirmacion();

  return mascota;
}

// Esta función muestra en consola los clientes registrados:

function mostrarClientesRegistrados() {
  const listadoClientesElement = document.getElementById("listado_clientes");
  listadoClientesElement.innerHTML = "";

  console.log("Clientes Registrados:");
  clientes.forEach((cliente, index) => {
    mensaje_listado = `Cliente ${index + 1}: ${cliente.nombre_mascota} (${
      cliente.especie
    } de ${cliente.edad} años). Propietario ${cliente.nombre_dueno}`;
    listadoClientesElement.innerHTML += mensaje_listado + "<br>";
    console.log(mensaje_listado);
  });
}

// Declaro el array vacío

const perros = [];

// Esta función filtra del array para mostrar el total de perros.

function totalAnimales() {
  const perrosEncontrados = clientes.filter((item) => {
    return item.especie.toLowerCase() === "perro";
  });

  const gatosEncontrados = clientes.filter((item) => {
    return item.especie.toLowerCase() === "gato";
  });

  const totalClientesElement = document.getElementById("listado_clientes");

  const mensaje_clientes = `Actualmente hay un total de ${perrosEncontrados.length} perros y ${gatosEncontrados.length} gatos.`;
  totalClientesElement.innerHTML += mensaje_clientes;
  totalClientesElement.className = "listado_clientes";
  console.log(mensaje_clientes);
}

// Con esta función se ejecutan dos funciones cuando el usuario
// pulsa el botón "Ver clientes"

function ejecutarFunciones() {
  mostrarClientesRegistrados();
  totalAnimales();
}

// Esta función busca el nombre de la mascota cuando el usuario
// pulsa el botón "Buscar por nombre"

const cliente_encontrado = "";

function buscarCliente() {
  nombre_buscar = prompt("Por favor escribe el nombre de tu mascota:");

  // Convertimos el nombre en minúsculas:
  nombre_buscar_minus = nombre_buscar.toLowerCase();

  const cliente_encontrado = clientes.find((item) => {
    return item.nombre_mascota.toLowerCase() === nombre_buscar_minus;
  });

  const resultadoElement = document.getElementById("resultado");

  if (cliente_encontrado) {
    const mensaje = `${nombre_buscar} sí está registrad@`;
    resultadoElement.innerHTML = mensaje;
    resultadoElement.className = "resultado-verde";
    console.log(mensaje);
  } else {
    const mensaje = `${nombre_buscar} NO está registrad@`;
    resultadoElement.innerHTML = mensaje;
    resultadoElement.className = "resultado-amarillo";
    console.log(mensaje);
  }
}

// Damos una variable al botón "comenzar": y al botón "Ver clientes":

const botonNuevoRegistro = document.getElementById("nuevo_registro");
const botonMostrarClientes = document.getElementById("mostrar_clientes");
const botonBuscarCliente = document.getElementById("buscar_cliente");

// Llamamos a las funciones
// sólo cuando el usuario hace click en el botón:

botonNuevoRegistro.addEventListener("click", nuevoCliente);
botonMostrarClientes.addEventListener("click", ejecutarFunciones);
botonBuscarCliente.addEventListener("click", buscarCliente);
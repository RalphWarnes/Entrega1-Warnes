let saldo = 100000.0;

class Product {
  constructor(id, nombre, precio, stock, categoria) {
    this.id = parseInt(id);
    this.name = nombre;
    this.price = parseFloat(precio);
    this.stock = parseInt(stock);
    this.category = categoria;
  }

  comprar() {
    if (chekearSaldo(this.price)) {
      saldo = saldo - this.price;
      this.stock = this.stock - 1;
      alert(`Compra Exitosa!
          x1 ${this.name}, $${this.price}
          Saldo restante $${saldo}`);
    } else {
      alert("saldo insuficiente.");
    }
  }
}

let producto1 = new Product(
  1,
  "Audient Sono",
  89129.0,
  3,
  "Interfaces de Audio"
);
let producto2 = new Product(
  2,
  "Audient ID4 mk2",
  80300.0,
  3,
  "Interfaces de Audio"
);
let producto3 = new Product(
  3,
  "Audient ID14 mk2",
  115500.0,
  3,
  "Interfaces de Audio"
);
let producto4 = new Product(
  4,
  "Black Lion Revolution 2x2",
  89400.0,
  3,
  "Interfaces de Audio"
);
let producto5 = new Product(
  5,
  "EVO By Audient EVO 8",
  79200.0,
  3,
  "Interfaces de Audio"
);
let producto6 = new Product(
  6,
  "Lynx Studio Technology Hilo USB",
  1157200.0,
  3,
  "Interfaces de Audio"
);
let producto7 = new Product(7, "Aston Spirit", 1157200.0, 3, "microfonos");
let producto8 = new Product(8, "Warm Audio WA251", 1157200.0, 3, "microfonos");
let producto9 = new Product(
  9,
  "Soyuz 023 Bomblet Deluxe",
  1157200.0,
  3,
  "microfonos"
);
let producto10 = new Product(
  10,
  "Avantone Audio CK-1",
  1157200.0,
  3,
  "microfonos"
);
let producto11 = new Product(11, "Soyuz 013 FET", 1157200.0, 3, "microfonos");
let producto12 = new Product(12, "Sony MDR7506", 60500.0, 3, "auriculares");
let producto13 = new Product(
  12,
  "Avantone Audio Mixphones MP1",
  88000.0,
  3,
  "auriculares"
);
let producto14 = new Product(
  12,
  "512 AUDIO Academy",
  45100.0,
  3,
  "auriculares"
);
let producto15 = new Product(
  12,
  "Ultrasone Signature Studio",
  156200.0,
  3,
  "auriculares"
);

let productos = [];
productos.push(producto1);
productos.push(producto2);
productos.push(producto3);
productos.push(producto4);
productos.push(producto5);
productos.push(producto6);
productos.push(producto7);
productos.push(producto8);
productos.push(producto9);
productos.push(producto10);
productos.push(producto11);
productos.push(producto12);
productos.push(producto13);
productos.push(producto14);
productos.push(producto15);

let producto = new Product("Auricular", 10, 3);

let opcionElegida;
let opcion2;

// CICLO PRINCIPAL PARA NAVEGAR ENTRE LAS DISTINTAS FUNCIONES
do {
  let opcionElegida = prompt(`BIENVENIDOS A |EMPIRE SOUNDS|
  1. Comprar
  2. Cargar Saldo.
  3. Retirar Saldo.
  4. Salir.
  `);

  if (opcionElegida === "1") {
    menuCompra();
  }
  if (opcionElegida == "2") {
    menuCargarSaldo();
  }
  if (opcionElegida == "3") {
    menuRetirarSaldo();
  }

  if (opcionElegida == "4") {
    alert(`Gracias por elegirnos!`);
    break;
  }
} while (opcionElegida != "4");

//MENU Y LOGICA PARA LA COMPRA DE PRODUCTOS
function menuCompra() {
  do {
    let textoFinal = "";
    productos.forEach((product) => {
      if (product.stock > 0) {
        let proudtoTexto = `
            ${product.id}. ${product.name} Stock: ${product.stock} - $${product.price} `;
        textoFinal = textoFinal + proudtoTexto;
      }
    });

    let opcion2 = prompt(` 
            |EMPIRE SOUNDS|
           Tu saldo es de $${saldo}
           Seleciona tu producto.
           
           ${textoFinal}
        
           E. Volver al MENU PRINCIPAL.
   `);

    if (opcion2 != "E") {
      let productElegido = productos.find((product) => product.id == opcion2);
      productElegido.comprar();
    }

    if (opcion2 == "E") {
      break;
    }
  } while (opcion2 != "E");
}

//CORROBORA QUE EL VALOR INGRESADO SEA VALIDO
function chekearSaldo(precio) {
  1;

  if (saldo < precio) {
    return false;
  }
  return true;
}

//MENU Y LOGICA PARA CARGA DE SALDO//
function menuCargarSaldo() {
  let saldoAIngresar = mostrarMenuCargarSaldo();
  cargarSaldo(saldoAIngresar);
}

function mostrarMenuCargarSaldo() {
  let saldoIngresado = parseInt(
    prompt(`|EMPIRE SOUNDS|
      Ingrese el monto
  Saldo Actual: $${saldo} 
  `),
    10
  );
  return saldoIngresado;
}

function cargarSaldo(saldoAcargar) {
  if (saldoAcargar > 0) {
    saldo = saldo + saldoAcargar;
    alert(`|EMPIRE SOUNDS|
      Transacción Exitosa
      Saldo ingresado: $${saldoAcargar}
      Saldo Total: $${saldo}`);
  } else {
    alert(`
      El monto que ingreso es invalido.
      `);
  }
}

//MENU Y LOGICA PARA RETIRO DE SALDO//
function menuRetirarSaldo() {
  saldoARetirar = mostrarMenuRetirarSaldo();
  retirarSaldo(saldoARetirar);
}

function mostrarMenuRetirarSaldo() {
  let saldoRetirado = parseInt(
    prompt(`|EMPIRE SOUNDS|
      Ingrese el monto a retirar
  Saldo Actual: $${saldo} 
  `),
    10
  );
  return saldoRetirado;
}

function retirarSaldo(saldoARetirar) {
  if (saldoARetirar > 0) {
    if (saldoARetirar <= saldo) {
      saldo = saldo - saldoARetirar;
      alert(`|EMPIRE SOUNDS|
        Saldo Retirado: $${saldoARetirar}
        Saldo Total: $${saldo}
        `);
    } else {
      alert(`|EMPIRE SOUNDS|
        Su saldo es insuficiente. `);
    }
  } else {
    alert(`|EMPIRE SOUNDS|
      El monto que ingreso es invalido. `);
  }
}

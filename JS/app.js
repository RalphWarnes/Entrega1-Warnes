class Product {
  constructor(id, nombre, precio, stock, categoria) {
    this.id = parseInt(id);
    this.name = nombre;
    this.price = parseFloat(precio);
    this.stock = parseInt(stock);
    this.category = categoria;
  }

  comprarProducto() {
    console.log(`${this.name} comprado - ${this.price}`);
  }
}

let productos = [
  {
    id: 1,
    name: "Audient Sono",
    price: 89129.0,
    stock: 3,
    category: "Interfaces de Audio",
  },
  {
    id: 2,
    name: "Audient ID4 mk2",
    price: 80300.0,
    stock: 2,
    category: "Interfaces de Audio",
  },
  {
    id: 3,
    name: "Audient ID14 mk2",
    price: 115500.0,
    stock: 3,
    category: "Interfaces de Audio",
  },
  {
    id: 4,
    name: "Black Lion Revolution 2x2",
    price: 89400.0,
    stock: 3,
    category: "Interfaces de Audio",
  },
  {
    id: 5,
    name: "EVO By Audient EVO 8",
    price: 79200.0,
    stock: 3,
    category: "Interfaces de Audio",
  },
  {
    id: 6,
    name: "Lynx Studio Technology Hilo USB",
    price: 1157200.0,
    stock: 3,
    category: "Interfaces de Audio",
  },
  {
    id: 7,
    name: "Aston Spirit",
    price: 111701.0,
    stock: 3,
    category: "microfonos",
  },
  {
    id: 8,
    name: "Warm Audio WA251",
    price: 325600.0,
    stock: 3,
    category: "microfonos",
  },
  {
    id: 9,
    name: "Soyuz 023 Bomblet Deluxe",
    price: 646800.0,
    stock: 3,
    category: "microfonos",
  },
  {
    id: 10,
    name: "Avantone Audio CK-1",
    price: 63800.0,
    stock: 3,
    category: "microfonos",
  },
  {
    id: 11,
    name: "Soyuz 013 FET",
    price: 277200.0,
    stock: 3,
    category: "microfonos",
  },
  {
    id: 12,
    name: "Telefunken M60",
    price: 297000.0,
    stock: 3,
    category: "microfonos",
  },
  {
    id: 13,
    name: "Sony MDR7506",
    price: 60500.0,
    stock: 3,
    category: "auriculares",
  },
  {
    id: 14,
    name: "Avantone Audio Mixphones MP1",
    price: 88000.0,
    stock: 3,
    category: "auriculares",
  },
  {
    id: 15,
    name: "512 AUDIO Academy",
    price: 45100.0,
    stock: 3,
    category: "auriculares",
  },
  {
    id: 16,
    name: "Ultrasone Signature Studio",
    price: 156200.0,
    stock: 3,
    category: "auriculares",
  },
];

let producto = new Product("Auricular", 10, 3);

console.log(producto.price);

//const producto1 = "Auricular";
//const producto2 = "tecaldo midi";
//const producto3 = "Interfaz";
//const producto4 = "Microfono";

//let producto1Precio = 10;
//let producto2Precio = 15;
//let producto3Precio = 20;
//let producto4Precio = 25;

let saldo = 2000000;
let opcionElegida;
let opcion2;
let opcion3;

// CICLO PRINCIPAL PARA NAVEGAR ENTRE LAS DISTINTAS FUNCIONES
do {
  let opcionElegida = prompt(`BIENVENIDOS A |EMPIRE SOUNDS|
  1. Comprar
  2. Cargar Saldo.
  3. Retirar Saldo.
  4. Salir.
  `);

  if (opcionElegida == "1") {
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
    let precioProductos = productos.forEach((product) => {
      objProduct = new Product(
        product.id,
        product.name,
        product.price,
        product.stock,
        product.category
      );
      let proudtoTexto = `
      ${objProduct.id}. ${objProduct.name} - $${objProduct.price}`;

      textoFinal = textoFinal + proudtoTexto;
    });

    let opcion2 = prompt(` 
    |EMPIRE SOUNDS|
   Tu saldo es de $${saldo}
   Seleciona tu producto.
   
   ${textoFinal}

   E. Volver al MENU PRINCIPAL.
   `);

    if (opcion2 != "E") {
      productElegido = productos.find((prduct) => prduct.id == opcion2);
      objProduct = new Product(
        productElegido.id,
        productElegido.name,
        productElegido.price,
        productElegido.stock,
        productElegido.category
      );

      objProduct.comprarProducto();
    }
  } while (opcion2 != "E");
}

function comprarProducto(nombre, precio) {
  //calculo para actualizar el saldo luego de una compra x
  if (chekearSaldo(saldo, precio)) {
    saldo = saldo - precio;
    alert(`Compra Exitosa!
          x1 ${nombre}, $${precio}
          Saldo restante $${saldo}`);
  } else {
    alert("saldo insuficiente.");
  }
}

//CORROBORA QUE EL VALOR INGRESADO SEA VALIDO
function chekearSaldo(saldo, precio) {
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

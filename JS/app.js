const producto1 = "Auricular";
const producto2 = "tecaldo midi";
const producto3 = "Interfaz";
const producto4 = "Microfono";

let producto1Precio = 10;
let producto2Precio = 15;
let producto3Precio = 20;
let producto4Precio = 25;

let saldo = 50;
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
    let opcion2 = prompt(` 
    |EMPIRE SOUNDS|
   Tu saldo es de $${saldo}
   Seleciona tu producto.
   
   1.  ${producto1} |$${producto1Precio}
   2.  ${producto2} |$${producto2Precio}
   3.  ${producto3} |$${producto3Precio}
   4.  ${producto4} |$${producto4Precio}
   5. Volver al MENU PRINCIPAL.
   `);

    if (opcion2 == "1") {
      comprarProducto(producto1, producto1Precio);
    } else if (opcion2 == "2") {
      comprarProducto(producto2, producto2Precio);
    } else if (opcion2 == "3") {
      comprarProducto(producto3, producto3Precio);
    } else if (opcion2 == "4") {
      comprarProducto(producto4, producto4Precio);
    } else if (opcion2 == "5") {
      break;
    } else {
      alert("Opcion Invalida");
    }
  } while (opcion2 != "5");
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

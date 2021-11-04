/* variable cuentas hecha global para consultar desde varias funciones */

let cuentaSeleccionada = "";
let cuentas = [
  { nombre: "Mali", saldo: 200, password: "helloworld" },
  { nombre: "Gera", saldo: 290, password: "l33t" },
  { nombre: "Maui", saldo: 67, password: "123" },
];

seleccionarCuenta();
mostraMenu();

function seleccionarCuenta() {
  let cuentas = [
    { nombre: "Mali", saldo: 200, password: "helloworld" },
    { nombre: "Gera", saldo: 290, password: "l33t" },
    { nombre: "Maui", saldo: 67, password: "123" },
  ];

  console.log("********************ATM********************");
  console.log("1-Seleccionar Cuenta");
  console.log("Por favor, seleccione una cuenta:");
  cuentas.forEach((cuenta) => {
    console.log(cuenta.nombre);
  });

  console.log("********************ATM********************");
  cuentaSeleccionada = prompt("Ingrese el nombre de la cuenta");
  let cuenta = cuentas.filter(
    (cuenta) => cuenta.nombre.toLowerCase() == cuentaSeleccionada.toLowerCase()
  );
  if (cuenta.length > 0) {
    let password = prompt("Ingrese su contraseña");
    while (password != cuenta[0].password) {
      password = prompt("Contraseña Incorrecta. Ingrese su contraseña:");
    }
  } else {
    console.log("Error. Cuenta no registrada");
  }

  //this.mostrarMenu();
}

function consultarSaldo() {
  console.log("Consulta tu Saldo");
  let cuenta = cuentas.filter(
    (cuenta) => cuenta.nombre.toLowerCase() == cuentaSeleccionada.toLowerCase()
  );
  alert("Su Saldo es " + cuenta[0].saldo);
}
function ingresarMonto() {
  console.log("Ingrese el Monto");
}
function retirarMonto() {
  console.log("Retirar Monto");
}
function mostraMenu() {
  let menuSeleccionado = prompt(
    "Ingrese la operacion que desea realizar\n1- Consultar Saldo\n2- Ingresar Monto\n3- Retirar Monto"
  );

  if (menuSeleccionado == 1) {
    consultarSaldo();
  } else if (menuSeleccionado == 2) {
    ingresarMonto();
  } else if (menuSeleccionado == 3) {
    retirarMonto();
  }
}

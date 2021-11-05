/* variable cuentas hecha global para consultar desde varias funciones */

let cuentaSeleccionada = "";
let cuentas = [
  { nombre: "Mali", saldo: 200, password: "helloworld" },
  { nombre: "Gera", saldo: 290, password: "l33t" },
  { nombre: "Maui", saldo: 67, password: "123" },
];

const consultarSaldo = (cuenta) => {
  console.log("Consulta tu Saldo");
  alert("Su Saldo es " + cuenta.saldo);
};

const ingresarMonto = (cuenta) => {
  let monto = parseInt(prompt("Ingrese el monto"))
  if (cuenta.saldo + monto > 990 ){
    alert("Error la cuenta no puede tener mas de $990");
  }else{
    cuenta.saldo += monto;
    alert("Monto " + monto + " ingresado exitosamente. Su saldo actual es " + cuenta.saldo);
  }
};

const retirarMonto = (cuenta) => {
  let monto = parseInt(prompt("Ingrese el monto"))
  if (cuenta.saldo - monto < 10 ){
    alert("Error la cuenta no puede tener menos de $10");
  }else{
    cuenta.saldo -= monto;
    alert("Monto " + monto + " retirado exitosamente. Su saldo actual es " + cuenta.saldo);
  }
};

const mostrarMenu = (cuenta) => {
  let menuSeleccionado = prompt(
    "Ingrese la operacion que desea realizar\n1- Consultar Saldo\n2- Ingresar Monto\n3- Retirar Monto"
  );

  if (menuSeleccionado == 1) {
    consultarSaldo(cuenta);
  } else if (menuSeleccionado == 2) {
    ingresarMonto(cuenta);
  } else if (menuSeleccionado == 3) {
    retirarMonto(cuenta);
  }
};

const seleccionarCuenta = () => {
 /*  let text_cuentas = "";
  cuentas.forEach((cuenta) => {
    text_cuentas += cuenta.nombre + "\n";
  });
  let cuentaSeleccionada = prompt(
    "1-Seleccionar Cuenta\nPor favor, ingrese una cuenta\n" + text_cuentas
  ); */
  let cuentaSeleccionada =  document.getElementById("nombreCuenta").value;
  let password = document.getElementById('password').value;
  let cuenta = cuentas.filter(
    (cuenta) => cuenta.nombre.toLowerCase() == cuentaSeleccionada.toLowerCase()
  );
  if (cuenta.length > 0) {
    /* let password = prompt("Ingrese su contraseña"); */
    if(password != cuenta[0].password) {
      window.alert("Contraseña Incorrecta. Ingrese su contraseña");
      //password = prompt("Contraseña Incorrecta. Ingrese su contraseña:");
    }
    //mostrarMenu(cuenta[0]);
  } else {
    Alert("Error. Cuenta no registrada");
  }
}

/*seleccionarCuenta();*/
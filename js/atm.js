/* variable cuentas hecha global para consultar desde varias funciones */
let cuentas = [
  { nombre: "Mali", saldo: 200, password: "helloworld" },
  { nombre: "Gera", saldo: 290, password: "l33t" },
  { nombre: "Maui", saldo: 67, password: "123" },
];
let cuentaObjeto;
const consultarSaldo = () => {
  document.getElementById("mostrarMenu").style.display = 'none';
  document.getElementById("consultarSaldo").style.display = 'block';
  let divConsultarSaldoText = document.getElementById("saldo_texto");
  divConsultarSaldoText.innerHTML = `<h4>Consulta de Saldo</h4>
    <h5> Su saldo actual es igual a <strong>$${cuentaObjeto.saldo}</strong></>`;
  //console.log("Consulta tu Saldo");
  //alert("Su Saldo es " + cuenta.saldo);
};

const ingresarMonto = () => {
  document.getElementById("mostrarMenu").style.display = "none";
  document.getElementById("ingresarMonto").style.display = "block";
};

const retirarMonto = (cuenta) => {
  let monto = parseInt(prompt("Ingrese el monto"));
  if (cuenta.saldo - monto < 10) {
    alert("Error la cuenta no puede tener menos de $10");
  } else {
    cuenta.saldo -= monto;
    alert(
      "Monto " +
        monto +
        " retirado exitosamente. Su saldo actual es " +
        cuenta.saldo
    );
  }
};

const mostrarMenu = (cuenta) => {
  document.getElementById("seleccionarCuenta").style.display = 'none';
  document.getElementById("mostrarMenu").style.display = 'block';
  /* let menuSeleccionado = prompt(
    "Ingrese la operacion que desea realizar\n1- Consultar Saldo\n2- Ingresar Monto\n3- Retirar Monto"
  );

  if (menuSeleccionado == 1) {
    consultarSaldo(cuenta);
  } else if (menuSeleccionado == 2) {
    ingresarMonto(cuenta);
  } else if (menuSeleccionado == 3) {
    retirarMonto(cuenta);
  } */
};

const seleccionarCuenta = () => {
  /*  let text_cuentas = "";
  cuentas.forEach((cuenta) => {
    text_cuentas += cuenta.nombre + "\n";
  });
  let cuentaSeleccionada = prompt(
    "1-Seleccionar Cuenta\nPor favor, ingrese una cuenta\n" + text_cuentas
  ); */
  document.getElementById("seleccionarCuenta").style.display = 'block';
  let cuentaSeleccionada = document.getElementById("nombreCuenta").value;
  let cuenta = cuentas.filter(
    (cuenta) => cuenta.nombre.toLowerCase() == cuentaSeleccionada.toLowerCase()
  );
  let password = document.getElementById("password").value;
  if (cuenta.length > 0) {
    cuentaObjeto = cuenta[0];
    /* let password = prompt("Ingrese su contraseña"); */
    if (password != cuentaObjeto.password) {
      window.alert("Contraseña Incorrecta. Ingrese su contraseña");
      //password = prompt("Contraseña Incorrecta. Ingrese su contraseña:");
    }else{
      mostrarMenu();
    }

    //mostrarMenu(cuenta[0]);
  } else {
    window.alert("Error. Cuenta no registrada");
  }
};

const salir = () => {
  document.getElementById("mostrarMenu").style.display = 'none';
  document.getElementById("seleccionarCuenta").style.display = 'block';
  document.getElementById("nombreCuenta").value = "";
  document.getElementById("password").value="";
}

const volver = () => {
  document.getElementById("consultarSaldo").style.display = 'none';
  document.getElementById("ingresarMonto").style.display = 'none';
  document.getElementById("mostrarMenu").style.display = 'block';
}
/*seleccionarCuenta();*/

document
  .getElementById("confirmarIngresarMonto")
  .addEventListener("submit", function (evt) {
    evt.preventDefault();
    let inputmontoIngresado = document.getElementById(
      "inlineFormInputGroupIngresarMonto"
    );
    document.getElementById("inputMontoIngresado").style.display = "none";
    let monto = parseInt(inputmontoIngresado.value);
    inputmontoIngresado.disabled = true;
    cuentaObjeto.saldo += monto;
    let divmensajeIngresarMonto = document.getElementById("saldoIngresarMonto");
    divmensajeIngresarMonto.innerHTML = `<h5> Monto ingresado exitosamente. Su saldo actual es <strong>$${cuentaObjeto.saldo}</strong></>`;
    divmensajeIngresarMonto.style.display = "block";
    
    document.getElementById("confirmarBoton").style.display = "none";
    document.getElementById("volverBoton").style.display = "block";
    inlineFormInputGroupIngresarMonto.style.display = "none";

    
  });







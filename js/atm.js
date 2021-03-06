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
};

const ingresarMonto = () => {
  document.getElementById("mostrarMenu").style.display = "none";
  document.getElementById("ingresarMonto").style.display = "block";
  const getMaxCuenta = (monto) => {
    console.log(cuentaObjeto);
    let saldo_actual = cuentaObjeto.saldo + monto;
    let monto_permitido = 990 - saldo_actual;
    if (monto_permitido > 0){
      return monto_permitido;
    }else{
      return 0;
    }
  };
  let inputMontoIngresar = document.getElementById("inlineFormInputGroupIngresarMonto");
  inputMontoIngresar.setAttribute("max", getMaxCuenta(inputMontoIngresar.value));
  
};

const retirarMonto = () => {
  document.getElementById("mostrarMenu").style.display = "none";
  document.getElementById("retirarMonto").style.display = "block";
  const getMaxCuenta = (monto) => {
    console.log(cuentaObjeto);
    let saldo_actual = cuentaObjeto.saldo - monto;
    let monto_permitido = saldo_actual - 10;
    if (monto_permitido > 0){
      return monto_permitido;
    }else{
      return 0;
    }
  };
  let inputMontoRetirado = document.getElementById("inlineFormInputGroupRetirarMonto");
  inputMontoRetirado.setAttribute("max", getMaxCuenta(inputMontoRetirado.value));
};

const mostrarMenu = (cuenta) => {
  document.getElementById("seleccionarCuenta").style.display = 'none';
  document.getElementById("mostrarMenu").style.display = 'block';
};

const seleccionarCuenta = () => {
  document.getElementById("seleccionarCuenta").style.display = 'block';
  let cuentaSeleccionada = document.getElementById("nombreCuenta").value;
  let cuenta = cuentas.filter(
    (cuenta) => cuenta.nombre.toLowerCase() == cuentaSeleccionada.toLowerCase()
  );
  let password = document.getElementById("password").value;
  if (cuenta.length > 0) {
    cuentaObjeto = cuenta[0];
    if (password != cuentaObjeto.password) {
      window.alert("Contrase??a Incorrecta. Ingrese su contrase??a");
    }else{
      mostrarMenu();
    }
  } else {
    window.alert("Error. Cuenta no registrada");
  }
};

/* Se actualiza el valor max de input ingresar monto*/
const salir = () => {
  document.getElementById("mostrarMenu").style.display = 'none';
  document.getElementById("seleccionarCuenta").style.display = 'block';
  document.getElementById("nombreCuenta").value = "";
  document.getElementById("password").value="";
}

const volver = () => {
  document.getElementById("consultarSaldo").style.display = 'none';
  document.getElementById("ingresarMonto").style.display = 'none';
  document.getElementById("saldoIngresarMonto").style.display = 'none';
  document.getElementById("inputMontoIngresado").removeAttribute("style");
  document.getElementById("inlineFormInputGroupIngresarMonto").style.display = "inline-block";
  document.getElementById("inlineFormInputGroupIngresarMonto").disabled = false;
  document.getElementById("confirmarBoton").removeAttribute("style");
  document.getElementById("retirarMonto").style.display = 'none';
  document.getElementById("saldoRetirarMonto").style.display = 'none';
  document.getElementById("inputMontoRetirado").removeAttribute("style");
  document.getElementById("inlineFormInputGroupRetirarMonto").style.display = "inline-block";
  document.getElementById("inlineFormInputGroupRetirarMonto").disabled = false;
  document.getElementById("confirmarRetirarBoton").removeAttribute("style");
  document.getElementById("mostrarMenu").style.display = 'block';
}

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


  document
  .getElementById("confirmarRetirarMonto")
  .addEventListener("submit", function (evt) {
    evt.preventDefault();
    let inputmontoRetirado = document.getElementById(
      "inlineFormInputGroupRetirarMonto"
    );
    document.getElementById("inputMontoRetirado").style.display = "none";
    let monto = parseInt(inputmontoRetirado.value);
    inputmontoRetirado.disabled = true;
    cuentaObjeto.saldo -= monto;
    let divmensajeRetirarMonto = document.getElementById("saldoRetirarMonto");
    divmensajeRetirarMonto.innerHTML = `<h5> Monto retirado exitosamente. Su saldo actual es <strong>$${cuentaObjeto.saldo}</strong></>`;
    divmensajeRetirarMonto.style.display = "block";
    
    document.getElementById("confirmarRetirarBoton").style.display = "none";
    document.getElementById("volverRetirarBoton").style.display = "block";
    inlineFormInputGroupRetirarMonto.style.display = "none";  
  });










//cambiamos el titulo de forma dinámica
//let titulo = document.querySelector('h1');//lo que esta dentro del parentesis es el parametro que espera
//titulo.innerHTML = 'Juego del número secreto';//titulo es el objeto

//let parrafo = document.querySelector("p"); //con el querySelector dice selecciona el elemento p
//parrafo.innerHTML = "Indica un número del 1 al 10";

/*Botones que le permiten enviar acciones(eventos) al sistema 
 Eventos = click, muevo el cursor, pasar por encima, ..etc*/
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//FUNCION
//
function asignarTextoElemento(elemento, texto) {
  //le pasamos parametros a la función
  let elementoHTML = document.querySelector(elemento); //lo que esta dentro del parentesis es el parametro que espera
  elementoHTML.innerHTML = texto; //titulo es el objeto
  return;
}

function verificarIntento() {
  let numeroDeUSuario = parseInt(document.getElementById("valorUsuario").value); //obtener el elemento por el id
  console.log(intentos);
  //console.log(typeof(numeroDeUSuario));
  console.log(numeroSecreto);
  //console.log(typeof(numeroSecreto));
  //console.log(numeroDeUSuario);
  //console.log(numeroDeUSuario === numeroSecreto);//El tercer = es para decirle que tienen que ser igual en valor y tipo de dato
  if (numeroDeUSuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el número en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled"); //con el getElementById vamos a llamar al boton que tiene el id=reiniciar y vamos a remover el atributo disabled para activar el boton
  } else {
    //El usuario no acerto
    if (numeroDeUSuario > numeroSecreto) {
      asignarTextoElemento("p", "El número secreto es menor");
    } else {
      asignarTextoElemento("p", "El número secreto es mayor");
    }
    intentos++;
    limpiarCaja(); //llamamos a la función para limpiar la caja
  }
  return;
}
//Vamos a crear una función para que se limpie el campo cuando no acertamos
function limpiarCaja() {
  //para minimizar la linea de codigo podemos poner
  document.querySelector("#valorUsuario").value = "";

  //let valorCaja = document.querySelector('#valorUsuario');
  //valorCaja.value = '';//le decimos que deje el campo vacio
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  //si ya sorteamos todos los números
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p', 'Ya se sorteraron todos los números posibles');
  } else {
    
  
  //si el número generado esta incluido en la lista
  if (listaNumerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();
  } else {
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
  }
}
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  //limpiar caja
  limpiarCaja();
  //indicar mensaje de intervalo de números
  //generar el número aleatorio
  //inicializar el número de intentos
  condicionesIniciales();

  //Deshabilitar el boton de nuevo juego
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
  //le decimos que fije el atributo disabled , true
}

condicionesIniciales();
/*HOISTING: Hace el movimiento de las variables al inicio del programa */

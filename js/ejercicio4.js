//4- Crear una web con un reloj que muestre la siguiente información:
function obtenerFechaHora(){
    let fechaActual = new Date();

    let diaSemanas = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
    ];
    let mesesAnio = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    
    let parrafoFecha = document.querySelector("#fecha");
    let parrafoHora = document.querySelector("#hora");
    parrafoFecha.innerHTML = `${
      diaSemanas[fechaActual.getDay()]
    } ${fechaActual.getDate()} de ${
      mesesAnio[fechaActual.getMonth()]
    } del ${fechaActual.getFullYear()}`;
    
    let hora = fechaActual.getHours(),
      minutos = fechaActual.getMinutes(),
      segundos =fechaActual.getSeconds();
    
      if(segundos < 10){
        segundos = '0' + segundos
      }
      if(minutos < 10){
        minutos = '0' + minutos
      }
      if(hora < 10){
        hora = '0' + hora
      }
    
    parrafoHora.innerHTML = `${hora}:${minutos}:${segundos} `;
    
}

function cambiarColor(color){
    let section = document.querySelector('.fs-1');
    section.className= 'fs-1 '+ color;
}

setInterval ( obtenerFechaHora , 1000 ) ;


// La fecha y hora a la que estamos contando
var countDownDate = new Date("Jul 17, 2021 22:55:00").getTime();

// Actualiza el conteo cada segundo
var x = setInterval(function() {

  // Obtiene la fecha y hora actual (de tu compu)
  var now = new Date().getTime();
    
  // Calcula la diferencia entre la hora actual y la hora a contar
  var distance = countDownDate - now;
    
  // Calculo por dias, horas, minutos y segundos
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Muestra el resultado con "demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // Escribe un texto  cuando el contador haya acabado
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Acabó el ciclo ;_;";
  }
}, 1000);

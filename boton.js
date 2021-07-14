//obtener el boton
var mybutton = document.getElementById("myBtn");

// Cuando el usuario baja 20px, se mostrará el boton automáticamente
window.onscroll = function() {scrollFunction()};

//si queremos aumentar, estos 20 los podemos cambiar por otros valores
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// cuando el usuario da click en el boton, se va para arriba
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
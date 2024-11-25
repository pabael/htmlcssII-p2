/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

document.addEventListener("DOMContentLoaded", function() {
  function cargarContenido(url) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        document.getElementById("content").innerHTML = data;
        window.scrollTo(0, 0);
      })
      .catch(error => console.error('Error al cargar el contenido:', error));
  }

  //Al inicio cargar página principal
  cargarContenido("./views/home.html");
  document.getElementById("header").classList.remove("alt-color");


  //Carga la página que ha sido clicada en el header
  document.querySelectorAll("header nav ul li a").forEach(enlace => {
    enlace.addEventListener("click", function(event) {
      document.querySelectorAll("header nav ul li a").forEach(link => {
        link.classList.remove("active");
      });

      enlace.classList.add("active");
      document.getElementById("header").classList.add("alt-color");

      event.preventDefault(); 
      cargarContenido(enlace.getAttribute("href"));
    });
  });
  
  //Al clicar en el icono de la cabecera, carga la página principal
  document.getElementById("logo").addEventListener("click", function(event) {
    document.querySelectorAll("header nav ul li a").forEach(link => {
      link.classList.remove("active");
    });
    document.getElementById("header").classList.remove("alt-color");

    event.preventDefault();
    cargarContenido(event.target.getAttribute("href"));
  });

});



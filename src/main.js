import "./style.css";

console.log("nutricionista Pamela");


//CONTROL DEL NAVBAR
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
navLinks.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});


// Importamos y Mapeamos en buttonId a los (modulos) o secciones
// De esta manera tenemos el promise all que hace los 3 pedidos a los import y los maneja el navegador todos a la vez
const [home, servicios, about, contact, ebook] = await Promise.all([
  import('./homemodule.js'),
  import('./serviciosmodule.js'),
  import('./aboutmodule.js'),
  import('./contactmodule.js'),
  import('./ebookmodule.js')
]);
//Luego los mapeamos (aunque no me gusta tener que usar 2 veces el nombre del modulo y la redundancia de poner home.home..)
const containers = {
  homeBtn: home.createHomeHeader,
  serviciosBtn: servicios.createServiciosContainer,
  aboutBtn: about.createAboutContainer,
  contactBtn: contact.createContactContainer,
  ebookBtn: ebook.createEbookContainer,
};
const buttonURLs = {
  homeBtn: "",
  serviciosBtn: "programa",
  aboutBtn: "sobre-pamela",
  contactBtn: "contacto",
  ebookBtn: "ebook"
};


const navButtons = document.querySelectorAll('nav button');
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
          handleButtonClick(button.id);

          window.scrollTo({
            top: 0,
            behavior: 'auto'
          });

    });
});  
// el updatehistory es para checkear cuando hacen click añadirlo al historial de navegacion del usuario
function handleButtonClick(buttonId, updateHistory = true) {
  const divContent = document.getElementById("content");
  //asigno la url segun a cada boton segun seccion
  const url = import.meta.env.BASE_URL + buttonURLs[buttonId];
  // limpiar contenido previo
  divContent.innerHTML = ""; 
  // Agregar el contenido correspondiente llamando al js segun buttonId
  if (containers[buttonId]) {
    divContent.appendChild(containers[buttonId]());
  } else {
    console.error(`Seccion "${buttonId}" not found`);
    return;
  }
  // Cambiar URL
  if ((updateHistory) && (url && url !== window.location.pathname)){
    history.pushState({ section: buttonId }, "", url);
    console.log(history);
  }
}
//popstate es para manejar el boton de atras y adelante del navegador
window.addEventListener("popstate", (event) => {
  if (event.state && event.state.section) {
    // aca actualizamos el contenido y no hacemos pushState (para no pushear el estado atras o delante y arruinar el historia)
    handleButtonClick(event.state.section, false);
  } else {
    // si no hay nada cargamos home
    handleButtonClick("homeBtn", false);
  }
});



// Función que se ejecuta al cargar la página para activar el botón correcto y cargar el contenido.
(() => {
  const path = window.location.pathname.replace(import.meta.env.BASE_URL, '');  // Obtener la URL sin la base
  let buttonId = null;

  // Verificar qué botón corresponde a la URL actual
  for (const [btnId, url] of Object.entries(buttonURLs)) {
    if (path === url) {
      buttonId = btnId;
      break;
    }
  }

  // Si se encuentra el botón, cargarlo, si no, cargar la página de inicio
  if (buttonId) {
    handleButtonClick(buttonId, false);  // Cargar el contenido para ese botón sin actualizar el historial
  } else {
    handleButtonClick("homeBtn", false); // Cargar la página de inicio si no se encuentra coincidencia
  }

  // Activar el botón correspondiente en el navbar
  document.querySelectorAll('nav button').forEach(button => {
    button.classList.toggle('active', button.id === buttonId);
  });
})();

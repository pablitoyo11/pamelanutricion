//contacto
import { createformularioContainer } from "./formulariomodule.js";
function createContactContainer() {
  // Contenedor principal de la sección Contacto
  const formularioContainer = document.createElement("div");
    formularioContainer.className = "formulario-container";
    // Título principal de Contacto
    const formularioTitle = document.createElement("h2");
    formularioTitle.className = "formulario-title";
    formularioTitle.innerText = "Completa el formulario para iniciar el programa de nutrición personalizado";
    formularioContainer.appendChild(formularioTitle);


    // Formulario de contacto importado
    const contactForm = createformularioContainer();
    formularioContainer.appendChild(contactForm);

    // Estilos específicos para Contacto (elemento <style>)
    const style = document.createElement("style");
    style.innerHTML = `
    .formulario-title {
      padding: 10px;
      color: white;
      text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
      text-align: center;
      }
    `;
    formularioContainer.appendChild(style);
  return formularioContainer;
};
export {createContactContainer}

    
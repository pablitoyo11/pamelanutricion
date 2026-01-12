//contacto
import { createformularioContainer } from "./formulariomodule.js";
function createContactContainer() {
  // Contenedor principal de la sección Contacto
  const formularioContainer = document.createElement("div");
    formularioContainer.className = "formulario-container";
    // Título principal de Contacto
    const formularioTitle = document.createElement("h2");
    formularioTitle.innerText = "Contacto";
    formularioContainer.appendChild(formularioTitle);


    // Formulario de contacto importado
    const contactForm = createformularioContainer();
    formularioContainer.appendChild(contactForm);

    // Estilos específicos para Contacto (elemento <style>)
    const style = document.createElement("style");
    style.innerHTML = `
    `;
    formularioContainer.appendChild(style);
  return formularioContainer;
};
export {createContactContainer}

    
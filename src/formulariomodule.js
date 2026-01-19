// formulario
function createformularioContainer() {
  const formularioContainer = document.createElement("div");
  formularioContainer.className = "formulario-container";


  // Formulario
  const form = document.createElement("form");
  form.className = "formulario-form";

  //  Sección: ¿Quién sos? (radio) 
const grupoQuienSos = document.createElement("div");
grupoQuienSos.className = "checkbox-group"; // podemos mantener la clase para estilos
grupoQuienSos.innerHTML = `
  <p class="checkbox-group-label">¿Quién sos?</p>
  <label class="checkbox-option"><input type="radio" name="quienSos" value="Jugador de fútbol"> Jugador de fútbol</label>
  <label class="checkbox-option"><input type="radio" name="quienSos" value="Padre / Madre de un jugador"> Padre / Madre de un jugador</label>
  <label class="checkbox-option"><input type="radio" name="quienSos" value="Ambos"> Ambos</label>
`;
  form.appendChild(grupoQuienSos);

  //  Sección: Edad 
const grupoEdad = document.createElement("div");
grupoEdad.className = "checkbox-group";
grupoEdad.innerHTML = `
  <p class="checkbox-group-label">¿Qué edad tiene el jugador?</p>
  <label class="checkbox-option"><input type="radio" name="edadJugador" value="Menos de 12"> Menos de 12</label>
  <label class="checkbox-option"><input type="radio" name="edadJugador" value="12 – 14"> 12 – 14</label>
  <label class="checkbox-option"><input type="radio" name="edadJugador" value="15 – 17"> 15 – 17</label>
  <label class="checkbox-option"><input type="radio" name="edadJugador" value="18 – 21"> 18 – 21</label>
  <label class="checkbox-option"><input type="radio" name="edadJugador" value="Más de 21"> Más de 21</label>
`;
  form.appendChild(grupoEdad);

  //  Sección: Nivel 
  const grupoNivel = document.createElement("div");
  grupoNivel.className = "checkbox-group";
  grupoNivel.innerHTML = `
    <p class="checkbox-group-label">¿En qué nivel juega actualmente?</p>
    <label class="checkbox-option"><input type="checkbox"> Club recreativo / amateur</label>
    <label class="checkbox-option"><input type="checkbox"> Inferiores de club</label>
    <label class="checkbox-option"><input type="checkbox"> Competitivo federado</label>
    <label class="checkbox-option"><input type="checkbox"> Alto rendimiento / proyección profesional</label>
  `;
  form.appendChild(grupoNivel);

  //  Sección: Qué mejorar 
  const grupoMejorar = document.createElement("div");
  grupoMejorar.className = "checkbox-group";
  grupoMejorar.innerHTML = `
    <p class="checkbox-group-label">¿Qué te gustaría mejorar principalmente con la nutrición? (Podés elegir más de una)</p>
    <label class="checkbox-option"><input type="checkbox"> Rendimiento en partidos</label>
    <label class="checkbox-option"><input type="checkbox"> Masa muscular y fuerza</label>
    <label class="checkbox-option"><input type="checkbox"> Resistencia y energía</label>
    <label class="checkbox-option"><input type="checkbox"> Recuperación post partido</label>
    <label class="checkbox-option"><input type="checkbox"> Ordenar la alimentación diaria</label>
    <label class="checkbox-option"><input type="checkbox"> Potenciar el crecimiento</label>
    <label class="checkbox-option"><input type="checkbox"> Cuidar el futuro deportivo</label>
  `;
  form.appendChild(grupoMejorar);

  //  Sección: Preocupaciones 
  const grupoPreocup = document.createElement("div");
  grupoPreocup.className = "checkbox-group";
  grupoPreocup.innerHTML = `
    <p class="checkbox-group-label">Hoy, ¿qué es lo que más te preocupa?</p>
    <label class="checkbox-option"><input type="checkbox"> No rendir como podría</label>
    <label class="checkbox-option"><input type="checkbox"> Comer mal o desordenado</label>
    <label class="checkbox-option"><input type="checkbox"> Cansarme rápido</label>
    <label class="checkbox-option"><input type="checkbox"> No subir de masa muscular</label>
    <label class="checkbox-option"><input type="checkbox"> Siento que tengo talento pero no se como acompañarlo con la alimentación</label>
    <label class="checkbox-option"><input type="checkbox"> No sé si estoy haciendo las cosas bien</label>
  `;
  form.appendChild(grupoPreocup);

  //  Campos de texto 
  const nombreInput = document.createElement("input");
  nombreInput.type = "text";
  nombreInput.placeholder = "Nombre";
  nombreInput.required = true;
  nombreInput.className = "formulario-input";
  form.appendChild(nombreInput);

  const whatsappInput = document.createElement("input");
  whatsappInput.type = "text";
  whatsappInput.placeholder = "WhatsApp";
  whatsappInput.required = true;
  whatsappInput.className = "formulario-input";
  form.appendChild(whatsappInput);

  const emailInput = document.createElement("input");
  emailInput.type = "text";
  emailInput.placeholder = "Email (opcional)";
  emailInput.className = "formulario-input";
  form.appendChild(emailInput);

  //  Botón de envío 
  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.innerText = "Quiero dar el siguiente paso";
  submitBtn.className = "formulario-submit-btn seccion-btn";
  form.appendChild(submitBtn);

  formularioContainer.appendChild(form);

  //  Estilos 
  const style = document.createElement("style");
  style.innerHTML = `
    .formulario-form { display: flex; flex-direction: column; gap: 15px; max-width: 700px; margin: 0 auto; font-family: Arial, sans-serif; }
    .checkbox-group { background: #f9f9f9; padding: 15px 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(34,201,201,0.1); }
    .checkbox-group-label { font-weight: bold; margin-bottom: 10px; }
    .checkbox-option { display: block; margin-bottom: 5px; cursor: pointer; }
    .checkbox-option input { margin-right: 8px; }
    .formulario-input { width: 100%; padding: 10px 0px; border-radius: 5px; border: 1px solid #ccc; font-size: 16px; }
  `;
  formularioContainer.appendChild(style);

// Manejo del envío del formulario hacia WhatsApp 
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener valores del formulario
    const nombre = nombreInput.value;
    const whatsapp = whatsappInput.value;
    const email = emailInput.value || 'No proporcionado';
    
    // Obtener radio buttons seleccionados
    const quienSos = form.querySelector('input[name="quienSos"]:checked');
    const edadJugador = form.querySelector('input[name="edadJugador"]:checked');
    
    // Obtener checkboxes seleccionados
    const niveles = Array.from(form.querySelectorAll('input[type="checkbox"]:checked')).filter(cb => {
      // Identificar checkboxes de nivel por su contexto
      const parentText = cb.closest('.checkbox-group').querySelector('.checkbox-group-label').textContent;
      return parentText.includes('¿En qué nivel juega actualmente?');
    }).map(cb => {
      // Obtener el texto del label
      const label = cb.closest('label').textContent.trim();
      return label;
    });
    
    const mejorar = Array.from(form.querySelectorAll('input[type="checkbox"]:checked')).filter(cb => {
      const parentText = cb.closest('.checkbox-group').querySelector('.checkbox-group-label').textContent;
      return parentText.includes('¿Qué te gustaría mejorar principalmente con la nutrición?');
    }).map(cb => {
      const label = cb.closest('label').textContent.trim();
      return label;
    });
    
    const preocupaciones = Array.from(form.querySelectorAll('input[type="checkbox"]:checked')).filter(cb => {
      const parentText = cb.closest('.checkbox-group').querySelector('.checkbox-group-label').textContent;
      return parentText.includes('¿qué es lo que más te preocupa?');
    }).map(cb => {
      const label = cb.closest('label').textContent.trim();
      return label;
    });
    
    // Mensaje para WhatsApp
    let mensaje = `¡Hola! Me interesa recibir información sobre nutrición deportiva.%0A%0A`;
    mensaje += `*Datos del formulario:*%0A`;
    mensaje += `👤 *Nombre:* ${nombre}%0A`;
    mensaje += `📱 *WhatsApp:* ${whatsapp}%0A`;
    mensaje += `📧 *Email:* ${email}%0A%0A`;
    
    mensaje += `*¿Quién sos?* ${quienSos ? quienSos.nextSibling.textContent.trim() : 'No seleccionado'}%0A`;
    mensaje += `*Edad del jugador:* ${edadJugador ? edadJugador.nextSibling.textContent.trim() : 'No seleccionado'}%0A%0A`;
    
    mensaje += `*Nivel actual:* ${niveles.length > 0 ? niveles.join(', ') : 'No seleccionado'}%0A%0A`;
    mensaje += `*Me gustaría mejorar:* ${mejorar.length > 0 ? mejorar.join(', ') : 'No seleccionado'}%0A%0A`;
    mensaje += `*Preocupaciones:* ${preocupaciones.length > 0 ? preocupaciones.join(', ') : 'No seleccionado'}%0A%0A`;
    
    mensaje += `Me gustaría recibir más información sobre sus servicios. ¡Gracias!`;
    
    // Formato: número con código de país sin "+" ni espacios ni guiones -- Ejemplo 5491112345678 (54 + 9 + 11 1234 5678)
    const numeroWhatsApp = "5491112345678";
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
    
    // Abrir WhatsApp en una nueva ventana
    window.open(urlWhatsApp, '_blank');
    
    //Resetear el formulario
    form.reset();
  });
  return formularioContainer;
}

export { createformularioContainer };

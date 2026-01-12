// formulario
function createformularioContainer() {
  const formularioContainer = document.createElement("div");
  formularioContainer.className = "formulario-container";


  // Formulario
  const form = document.createElement("form");
  form.className = "formulario-form";

  // --- Sección: ¿Quién sos? (radio) ---
const grupoQuienSos = document.createElement("div");
grupoQuienSos.className = "checkbox-group"; // podemos mantener la clase para estilos
grupoQuienSos.innerHTML = `
  <p class="checkbox-group-label">¿Quién sos?</p>
  <label class="checkbox-option"><input type="radio" name="quienSos" value="Jugador de fútbol"> Jugador de fútbol</label>
  <label class="checkbox-option"><input type="radio" name="quienSos" value="Padre / Madre de un jugador"> Padre / Madre de un jugador</label>
  <label class="checkbox-option"><input type="radio" name="quienSos" value="Ambos"> Ambos</label>
`;
  form.appendChild(grupoQuienSos);

  // --- Sección: Edad ---
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

  // --- Sección: Nivel ---
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

  // --- Sección: Qué mejorar ---
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

  // --- Sección: Preocupaciones ---
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

  // --- Campos de texto ---
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

  // --- Botón de envío ---
  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.innerText = "Quiero dar el siguiente paso";
  submitBtn.className = "formulario-submit-btn seccion-btn";
  form.appendChild(submitBtn);

  formularioContainer.appendChild(form);

  // --- Estilos ---
  const style = document.createElement("style");
  style.innerHTML = `
    h2 { color: rgb(84,169,255); text-align: center; }
    h3 { color: rgb(86,169,252); text-align: center; margin-bottom: 20px; }
    .formulario-form { display: flex; flex-direction: column; gap: 15px; max-width: 700px; margin: 0 auto; font-family: Arial, sans-serif; }
    .checkbox-group { background: #f9f9f9; padding: 15px 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(34,201,201,0.1); }
    .checkbox-group-label { font-weight: bold; margin-bottom: 10px; }
    .checkbox-option { display: block; margin-bottom: 5px; cursor: pointer; }
    .checkbox-option input { margin-right: 8px; }
    .formulario-input { width: 100%; padding: 10px 0px; border-radius: 5px; border: 1px solid #ccc; font-size: 16px; }
  `;
  formularioContainer.appendChild(style);

  return formularioContainer;
}

export { createformularioContainer };

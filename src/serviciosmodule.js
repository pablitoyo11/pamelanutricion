// seccion PROGRAMA FUTBOLISTAS

import {crearContenedorTestimoniosProgramaNutricion} from "./testimoniosprogramanutricionmodule.js";

function createServiciosProgramaNutricion() {

    //  CONTENEDOR PRINCIPAL 
    const programaContainer = document.createElement("div");
    programaContainer.className = "programa-container";

    //  COLUMNA IZQUIERDA 
    const leftColumn = document.createElement("div");
    leftColumn.className = "programa-left";
    programaContainer.appendChild(leftColumn);

    // Imagen
    const programaImg = document.createElement("img");
    programaImg.className = "programa-img";
    programaImg.src = "./public/imagenes/pamela-bustorf-nutricionista-futbol-03.jpg";
    leftColumn.appendChild(programaImg);

    // Beneficios
    const beneficiosContainer = document.createElement("div");
    beneficiosContainer.className = "beneficios-container";
    beneficiosContainer.innerHTML = `
        <div class="beneficios-programa">
            <h3>PERSONALIZACIÓN</h3>
            <p>Análisis detallado de tu situación actual, estrategias y herramientas para lograr objetivos.</p>
        </div>

        <div class="beneficios-programa">
            <h3>SEGUIMIENTO SEMANAL</h3>
            <p>Evaluación de progresos y ajuste de estrategias según sea necesario.</p>
        </div>

        <div class="beneficios-programa">
            <h3>SOPORTE DIARIO</h3>
            <p>Resolución de dudas e inconvenientes para que siempre estés informado y motivado.</p>
        </div>
    `;
    leftColumn.appendChild(beneficiosContainer);


    //  COLUMNA DERECHA 
    const rightColumn = document.createElement("div");
    rightColumn.className = "programa-right";
    programaContainer.appendChild(rightColumn);

    // Título
    const title = document.createElement("h1");
    title.className = "programa-title";
    title.innerText = "Es un programa para futbolistas con objetivos claros";
    rightColumn.appendChild(title);

    // Texto
    const textBottom = document.createElement("div");
    textBottom.className = "programa-textos";
    textBottom.innerHTML = `
        <p>Para el futbolista que busca la excelencia: Potencia tu rendimiento y adquiere un plus en tu rendimiento logrando cuerpo más eficiente. Marca la diferencia en cada partido.</p>
        <p>Deja de improvisar, empieza a dominar: Si estás cansado de probar métodos que no funcionan, es hora de tener un plan claro para tu "entrenamiento invisible" y desatar tu verdadero potencial.</p>
        <p>Asegura tu futuro profesional: Termina la temporada en tu máximo nivel físico y mental. Conviértete en el jugador que todos los equipos quieren fichar y asegura el mejor contrato.</p>
        <p>Que la pretemporada no te cueste el doble: Aprende a gestionar las vacaciones de forma inteligente para volver más fuerte que nunca, ganando la ventaja desde el primer día y sin regalar tu puesto.</p>
    `;
    rightColumn.appendChild(textBottom);


    // CTA texto
    const ctaText = document.createElement("p");
    ctaText.className = "programa-cta";
    ctaText.innerHTML = `
      <p>Invierte en tu cuerpo, da el siguiente paso hacia tu mejor versión.</p>
      <p>Mejora tu nutrición y eleva tu nivel.</p>
    `;
    rightColumn.appendChild(ctaText);

    // CTA botón
    const ctaBtn = document.createElement("button");
    ctaBtn.className = "programa-btn seccion-btn";
    ctaBtn.innerText = "QUIERO MEJORAR MI RENDIMIENTO";
    rightColumn.appendChild(ctaBtn);

    //  ESTILOS 
    const style = document.createElement("style");
    style.innerHTML = `
      .programa-container {
        display: flex;
        gap: 60px;
        padding: 60px 40px;
        margin: 20px 0px;
        background: white;
        border-radius: 20px;
        font-family: Arial, sans-serif;
        align-items: flex-start;
        justify-content: center;
      }

      /* COLUMNA IZQUIERDA */
      .programa-left {
          width: 300px;
          display: flex;
          flex-direction: column;
          gap: 25px;
      }

      /* Imagen mismo ancho visual que los cuadros */
      .programa-img {
          width: 100%;
          aspect-ratio: 4 / 3.5;
          object-fit: cover;
          border-radius: 14px;
      }

      /* Contenedor beneficios */
      .beneficios-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
      }

      /* Cuadros verdes iguales */
      .beneficios-programa {
          background: #1b7f3b;
          color: #fff;
          padding: 20px;
          border-radius: 14px;
          min-height: 120px;
          display: flex;
          flex-direction: column;
          justify-content: center;
      }

      .beneficios-programa h3 {
          margin-bottom: 10px;
          font-size: 16px;
          letter-spacing: 0.5px;
      }

      /* COLUMNA DERECHA */
      .programa-right {
        display: flex; 
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        max-width: 550px;
      }

      .programa-title {
          color: #1b7f3b;
          margin: 30px auto;
          text-align: center;
          font-size: 32px;
          line-height: 1.5;
      }

      .programa-textos p {
          margin: 20px 0px;
          font-size: 16px;
          line-height: 1.1;
          max-width: 650px; 
      }

      /* CTA */
      .programa-cta {
          font-weight: bold;
          color: #1b7f3b;
          margin: 35px 0;
          font-size: 22px;
          max-width: 650px;
      }

      .programa-btn {
          max-width: 340px;
          padding: 15px 30px;
          margin: 20px auto;
          font-weight: bold;
      }
    `;

    programaContainer.appendChild(style);
    return programaContainer;
}


function createServiciosContainer() {
  const serviciosContainer = document.createElement("div");
  serviciosContainer.className = "servicios-page-container";
  // appendchild cada seccion en orden
  // añadir seccion programa de nutricion
  serviciosContainer.appendChild(createServiciosProgramaNutricion());
  // añadir modulo contenedor de testimonios
  serviciosContainer.appendChild(crearContenedorTestimoniosProgramaNutricion());
    const style = document.createElement("style");
    style.innerHTML = `
    .servicios-page-container {
        padding: 10px;
        max-width: 1100px;
        margin: 10px auto;
    } 
    `;
  serviciosContainer.appendChild(style);
  
  return serviciosContainer;
}  

export { createServiciosContainer };

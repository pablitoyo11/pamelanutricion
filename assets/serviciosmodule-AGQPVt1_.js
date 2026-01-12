import{c as l}from"./testimoniosprogramanutricionmodule-C-v69GHr.js";function d(){const e=document.createElement("div");e.className="programa-container";const a=document.createElement("div");a.className="programa-left",e.appendChild(a);const t=document.createElement("img");t.className="programa-img",t.src="/pamelanutricion/imagenes/pamela-bustorf-nutricionista-futbol-03.jpg",a.appendChild(t);const i=document.createElement("div");i.className="beneficios-container",i.innerHTML=`
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
    `,a.appendChild(i);const n=document.createElement("div");n.className="programa-right",e.appendChild(n);const r=document.createElement("h1");r.className="programa-title",r.innerText="Es un programa para futbolistas con objetivos claros",n.appendChild(r);const o=document.createElement("div");o.className="programa-textos",o.innerHTML=`
        <p>Para el futbolista que busca la excelencia: Potencia tu rendimiento y adquiere un plus en tu rendimiento logrando cuerpo más eficiente. Marca la diferencia en cada partido.</p>
        <p>Deja de improvisar, empieza a dominar: Si estás cansado de probar métodos que no funcionan, es hora de tener un plan claro para tu "entrenamiento invisible" y desatar tu verdadero potencial.</p>
        <p>Asegura tu futuro profesional: Termina la temporada en tu máximo nivel físico y mental. Conviértete en el jugador que todos los equipos quieren fichar y asegura el mejor contrato.</p>
        <p>Que la pretemporada no te cueste el doble: Aprende a gestionar las vacaciones de forma inteligente para volver más fuerte que nunca, ganando la ventaja desde el primer día y sin regalar tu puesto.</p>
    `,n.appendChild(o);const s=document.createElement("p");s.className="programa-cta",s.innerHTML=`
      <p>Invierte en tu cuerpo, da el siguiente paso hacia tu mejor versión.</p>
      <p>Mejora tu nutrición y eleva tu nivel.</p>
    `,n.appendChild(s);const p=document.createElement("button");p.className="programa-btn seccion-btn",p.innerText="QUIERO MEJORAR MI RENDIMIENTO",n.appendChild(p);const c=document.createElement("style");return c.innerHTML=`
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
    `,e.appendChild(c),e}function u(){const e=document.createElement("div");e.className="servicios-page-container",e.appendChild(d()),e.appendChild(l());const a=document.createElement("style");return a.innerHTML=`
    .servicios-page-container {
        padding: 10px;
        max-width: 1100px;
        margin: 10px auto;
    } 
    `,e.appendChild(a),e}export{u as createServiciosContainer};

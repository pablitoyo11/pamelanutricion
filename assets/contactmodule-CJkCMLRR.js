function b(){const o=document.createElement("div");o.className="formulario-container";const e=document.createElement("form");e.className="formulario-form";const l=document.createElement("div");l.className="checkbox-group",l.innerHTML=`
  <p class="checkbox-group-label">¿Quién sos?</p>
  <label class="checkbox-option"><input type="radio" name="quienSos" value="Jugador de fútbol"> Jugador de fútbol</label>
  <label class="checkbox-option"><input type="radio" name="quienSos" value="Padre / Madre de un jugador"> Padre / Madre de un jugador</label>
  <label class="checkbox-option"><input type="radio" name="quienSos" value="Ambos"> Ambos</label>
`,e.appendChild(l);const a=document.createElement("div");a.className="checkbox-group",a.innerHTML=`
  <p class="checkbox-group-label">¿Qué edad tiene el jugador?</p>
  <label class="checkbox-option"><input type="radio" name="edadJugador" value="Menos de 12"> Menos de 12</label>
  <label class="checkbox-option"><input type="radio" name="edadJugador" value="12 – 14"> 12 – 14</label>
  <label class="checkbox-option"><input type="radio" name="edadJugador" value="15 – 17"> 15 – 17</label>
  <label class="checkbox-option"><input type="radio" name="edadJugador" value="18 – 21"> 18 – 21</label>
  <label class="checkbox-option"><input type="radio" name="edadJugador" value="Más de 21"> Más de 21</label>
`,e.appendChild(a);const p=document.createElement("div");p.className="checkbox-group",p.innerHTML=`
    <p class="checkbox-group-label">¿En qué nivel juega actualmente?</p>
    <label class="checkbox-option"><input type="checkbox"> Club recreativo / amateur</label>
    <label class="checkbox-option"><input type="checkbox"> Inferiores de club</label>
    <label class="checkbox-option"><input type="checkbox"> Competitivo federado</label>
    <label class="checkbox-option"><input type="checkbox"> Alto rendimiento / proyección profesional</label>
  `,e.appendChild(p);const r=document.createElement("div");r.className="checkbox-group",r.innerHTML=`
    <p class="checkbox-group-label">¿Qué te gustaría mejorar principalmente con la nutrición? (Podés elegir más de una)</p>
    <label class="checkbox-option"><input type="checkbox"> Rendimiento en partidos</label>
    <label class="checkbox-option"><input type="checkbox"> Masa muscular y fuerza</label>
    <label class="checkbox-option"><input type="checkbox"> Resistencia y energía</label>
    <label class="checkbox-option"><input type="checkbox"> Recuperación post partido</label>
    <label class="checkbox-option"><input type="checkbox"> Ordenar la alimentación diaria</label>
    <label class="checkbox-option"><input type="checkbox"> Potenciar el crecimiento</label>
    <label class="checkbox-option"><input type="checkbox"> Cuidar el futuro deportivo</label>
  `,e.appendChild(r);const s=document.createElement("div");s.className="checkbox-group",s.innerHTML=`
    <p class="checkbox-group-label">Hoy, ¿qué es lo que más te preocupa?</p>
    <label class="checkbox-option"><input type="checkbox"> No rendir como podría</label>
    <label class="checkbox-option"><input type="checkbox"> Comer mal o desordenado</label>
    <label class="checkbox-option"><input type="checkbox"> Cansarme rápido</label>
    <label class="checkbox-option"><input type="checkbox"> No subir de masa muscular</label>
    <label class="checkbox-option"><input type="checkbox"> Siento que tengo talento pero no se como acompañarlo con la alimentación</label>
    <label class="checkbox-option"><input type="checkbox"> No sé si estoy haciendo las cosas bien</label>
  `,e.appendChild(s);const c=document.createElement("input");c.type="text",c.placeholder="Nombre",c.required=!0,c.className="formulario-input",e.appendChild(c);const t=document.createElement("input");t.type="text",t.placeholder="WhatsApp",t.required=!0,t.className="formulario-input",e.appendChild(t);const n=document.createElement("input");n.type="text",n.placeholder="Email (opcional)",n.className="formulario-input",e.appendChild(n);const i=document.createElement("button");i.type="submit",i.innerText="Quiero dar el siguiente paso",i.className="formulario-submit-btn seccion-btn",e.appendChild(i),o.appendChild(e);const u=document.createElement("style");return u.innerHTML=`
    h2 { color: rgb(84,169,255); text-align: center; }
    h3 { color: rgb(86,169,252); text-align: center; margin-bottom: 20px; }
    .formulario-form { display: flex; flex-direction: column; gap: 15px; max-width: 700px; margin: 0 auto; font-family: Arial, sans-serif; }
    .checkbox-group { background: #f9f9f9; padding: 15px 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(34,201,201,0.1); }
    .checkbox-group-label { font-weight: bold; margin-bottom: 10px; }
    .checkbox-option { display: block; margin-bottom: 5px; cursor: pointer; }
    .checkbox-option input { margin-right: 8px; }
    .formulario-input { width: 100%; padding: 10px 0px; border-radius: 5px; border: 1px solid #ccc; font-size: 16px; }
  `,o.appendChild(u),o}function d(){const o=document.createElement("div");o.className="formulario-container";const e=document.createElement("h2");e.innerText="Contacto",o.appendChild(e);const l=b();o.appendChild(l);const a=document.createElement("style");return a.innerHTML=`
    `,o.appendChild(a),o}export{d as createContactContainer};

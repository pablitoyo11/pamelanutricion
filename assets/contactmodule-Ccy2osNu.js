function q(){const a=document.createElement("div");a.className="formulario-container";const e=document.createElement("form");e.className="formulario-form";const r=document.createElement("div");r.className="checkbox-group",r.innerHTML=`
  <p class="checkbox-group-label">¿Quién sos?</p>
  <label class="checkbox-option"><input type="radio" name="quienSos" value="Jugador de fútbol"> Jugador de fútbol</label>
  <label class="checkbox-option"><input type="radio" name="quienSos" value="Padre / Madre de un jugador"> Padre / Madre de un jugador</label>
  <label class="checkbox-option"><input type="radio" name="quienSos" value="Ambos"> Ambos</label>
`,e.appendChild(r);const n=document.createElement("div");n.className="checkbox-group",n.innerHTML=`
  <p class="checkbox-group-label">¿Qué edad tiene el jugador?</p>
  <label class="checkbox-option"><input type="radio" name="edadJugador" value="Menos de 12"> Menos de 12</label>
  <label class="checkbox-option"><input type="radio" name="edadJugador" value="12 – 14"> 12 – 14</label>
  <label class="checkbox-option"><input type="radio" name="edadJugador" value="15 – 17"> 15 – 17</label>
  <label class="checkbox-option"><input type="radio" name="edadJugador" value="18 – 21"> 18 – 21</label>
  <label class="checkbox-option"><input type="radio" name="edadJugador" value="Más de 21"> Más de 21</label>
`,e.appendChild(n);const u=document.createElement("div");u.className="checkbox-group",u.innerHTML=`
    <p class="checkbox-group-label">¿En qué nivel juega actualmente?</p>
    <label class="checkbox-option"><input type="checkbox"> Club recreativo / amateur</label>
    <label class="checkbox-option"><input type="checkbox"> Inferiores de club</label>
    <label class="checkbox-option"><input type="checkbox"> Competitivo federado</label>
    <label class="checkbox-option"><input type="checkbox"> Alto rendimiento / proyección profesional</label>
  `,e.appendChild(u);const d=document.createElement("div");d.className="checkbox-group",d.innerHTML=`
    <p class="checkbox-group-label">¿Qué te gustaría mejorar principalmente con la nutrición? (Podés elegir más de una)</p>
    <label class="checkbox-option"><input type="checkbox"> Rendimiento en partidos</label>
    <label class="checkbox-option"><input type="checkbox"> Masa muscular y fuerza</label>
    <label class="checkbox-option"><input type="checkbox"> Resistencia y energía</label>
    <label class="checkbox-option"><input type="checkbox"> Recuperación post partido</label>
    <label class="checkbox-option"><input type="checkbox"> Ordenar la alimentación diaria</label>
    <label class="checkbox-option"><input type="checkbox"> Potenciar el crecimiento</label>
    <label class="checkbox-option"><input type="checkbox"> Cuidar el futuro deportivo</label>
  `,e.appendChild(d);const b=document.createElement("div");b.className="checkbox-group",b.innerHTML=`
    <p class="checkbox-group-label">Hoy, ¿qué es lo que más te preocupa?</p>
    <label class="checkbox-option"><input type="checkbox"> No rendir como podría</label>
    <label class="checkbox-option"><input type="checkbox"> Comer mal o desordenado</label>
    <label class="checkbox-option"><input type="checkbox"> Cansarme rápido</label>
    <label class="checkbox-option"><input type="checkbox"> No subir de masa muscular</label>
    <label class="checkbox-option"><input type="checkbox"> Siento que tengo talento pero no se como acompañarlo con la alimentación</label>
    <label class="checkbox-option"><input type="checkbox"> No sé si estoy haciendo las cosas bien</label>
  `,e.appendChild(b);const l=document.createElement("input");l.type="text",l.placeholder="Nombre",l.required=!0,l.className="formulario-input",e.appendChild(l);const c=document.createElement("input");c.type="text",c.placeholder="WhatsApp",c.required=!0,c.className="formulario-input",e.appendChild(c);const i=document.createElement("input");i.type="text",i.placeholder="Email (opcional)",i.className="formulario-input",e.appendChild(i);const s=document.createElement("button");s.type="submit",s.innerText="Quiero dar el siguiente paso",s.className="formulario-submit-btn seccion-btn",e.appendChild(s),a.appendChild(e);const m=document.createElement("style");return m.innerHTML=`
    .formulario-form { display: flex; flex-direction: column; gap: 15px; max-width: 700px; margin: 0 auto; font-family: Arial, sans-serif; font-weight: 700; }
    .checkbox-group { background: #f9f9f9; padding: 15px 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(34,201,201,0.1); }
    .checkbox-group-label { font-weight: 800; margin-bottom: 10px; }
    .checkbox-option { display: block; margin-bottom: 5px; cursor: pointer; }
    .checkbox-option input { margin-right: 8px; }
    .formulario-input { width: 100%; padding: 10px 0px; border-radius: 5px; border: 1px solid #ccc; font-size: 16px; }
  `,a.appendChild(m),e.addEventListener("submit",function(f){f.preventDefault();const C=l.value,A=c.value,v=i.value||"No proporcionado",x=e.querySelector('input[name="quienSos"]:checked'),h=e.querySelector('input[name="edadJugador"]:checked'),k=Array.from(e.querySelectorAll('input[type="checkbox"]:checked')).filter(t=>t.closest(".checkbox-group").querySelector(".checkbox-group-label").textContent.includes("¿En qué nivel juega actualmente?")).map(t=>t.closest("label").textContent.trim()),g=Array.from(e.querySelectorAll('input[type="checkbox"]:checked')).filter(t=>t.closest(".checkbox-group").querySelector(".checkbox-group-label").textContent.includes("¿Qué te gustaría mejorar principalmente con la nutrición?")).map(t=>t.closest("label").textContent.trim()),y=Array.from(e.querySelectorAll('input[type="checkbox"]:checked')).filter(t=>t.closest(".checkbox-group").querySelector(".checkbox-group-label").textContent.includes("¿qué es lo que más te preocupa?")).map(t=>t.closest("label").textContent.trim());let o="¡Hola! Me interesa recibir información sobre nutrición deportiva.%0A%0A";o+="*Datos del formulario:*%0A",o+=`👤 *Nombre:* ${C}%0A`,o+=`📱 *WhatsApp:* ${A}%0A`,o+=`📧 *Email:* ${v}%0A%0A`,o+=`*¿Quién sos?* ${x?x.nextSibling.textContent.trim():"No seleccionado"}%0A`,o+=`*Edad del jugador:* ${h?h.nextSibling.textContent.trim():"No seleccionado"}%0A%0A`,o+=`*Nivel actual:* ${k.length>0?k.join(", "):"No seleccionado"}%0A%0A`,o+=`*Me gustaría mejorar:* ${g.length>0?g.join(", "):"No seleccionado"}%0A%0A`,o+=`*Preocupaciones:* ${y.length>0?y.join(", "):"No seleccionado"}%0A%0A`,o+="Me gustaría recibir más información sobre sus servicios. ¡Gracias!";const N=`https://wa.me/5492235921092?text=${o}`;window.open(N,"_blank"),e.reset()}),a}function M(){const a=document.createElement("div");a.className="formulario-container";const e=document.createElement("h2");e.className="formulario-title",e.innerText="Completa el formulario para iniciar el programa de nutrición personalizado",a.appendChild(e);const r=q();a.appendChild(r);const n=document.createElement("style");return n.innerHTML=`
    .formulario-title {
      padding: 10px;
      color: white;
      text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
      text-align: center;
      }
    `,a.appendChild(n),a}export{M as createContactContainer};

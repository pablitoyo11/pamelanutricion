function h(){const n=document.createElement("div");n.className="contenedor-testimonios";const u={title:"",personas:[{nombre:"Santiago",edad:"13",declaracion:"Antes, mi rendimiento estaba estancado y me lesionaba con frecuencia. Ahora desde que estoy con Pamela mi velocidad y resistencia mejoraron. De ser suplente, ahora soy titular. Las molestias desaparecieron y mi confianza es mejor. Este programa me hizo entrenar más inteligentemente.",imagen:"/pamelanutricion/imagenes/testimonio-santiago.jpg"},{nombre:"Joaquín",edad:"13",declaracion:"Quería avanzar pero no encontraba el camino, hasta que comencé en el programa. Luego de unos meses mi rendimiento mejoró muchisimo, me siento super acompañado y estoy cada día mejor.",imagen:"/pamelanutricion/imagenes/testimonio-joaquin.jpg"},{nombre:"Mamá de Ignacio",edad:"12",declaracion:"Quería avanzar pero no encontraba el camino, hasta que comencé en el programa. Luego de unos meses mi rendimiento mejoró muchisimo, me siento super acompañado y estoy cada día mejor.",imagen:"/pamelanutricion/imagenes/testimonio-ignacio.jpg"}]};function g(p){const o=document.createElement("div");o.className="seccion-testimonios";const s=document.createElement("span");s.className="section-title",s.textContent=p.title,o.appendChild(s);const r=document.createElement("ul");return r.className="ul-list-personas",o.appendChild(r),p.personas.forEach(a=>{const e=document.createElement("li");e.className="li-de-testimonio";const t=document.createElement("img");t.src=a.imagen,t.setAttribute("height",150),t.className="imagen-persona",e.appendChild(t);const c=document.createElement("p");c.className="declaracion-persona",c.textContent=a.declaracion,e.appendChild(c),r.appendChild(e);const i=document.createElement("div");i.className="informacion-persona";const m=document.createElement("span");m.className="nombre-persona",m.textContent=a.nombre,i.appendChild(m);const d=document.createElement("p");d.className="edad-persona",d.textContent=a.edad,i.appendChild(d),e.appendChild(i)}),o}n.appendChild(g(u));const l=document.createElement("style");return l.innerHTML=`
.seccion-testimonios {
  border-radius: 10px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  background-color: white;
  font-family: Arial, sans-serif;
}

.ul-list-personas {
  list-style-type: none;
  color: white;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 10px;
  flex-wrap: no-wrap;
  width: 100%;
  justify-content: center;
}

.li-de-testimonio {
  background-color: #2e7d32;
  color: white;
  flex: 1 1 300px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  border-radius: 4px;
  align-items: stretch;
  max-width: 350px;
  overflow: hidden;
  position: relative; 
  padding: 0;
}

.imagen-persona {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 4px 4px 0 0;
  margin-bottom: 0;
  border: none;
  display: block;
}


.informacion-persona {
  display: flex;
  gap : 12px;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 6px 12px;
  border-top: 1px solid rgba(255,255,255,0.08);
}

.nombre-persona {
  font-weight: bold;
  font-size: 1.1em;
  margin: 0;
}

.edad-persona {
  font-style: italic;
  opacity: 0.85;
  font-size: 0.9em;
  margin: 0;
}

.declaracion-persona {
  font-size: 1em;
  color: white;
  margin: 8px 12px;
  padding: 0;
  line-height: 1.4;
  flex: 1 1 auto; 
}


  `,n.appendChild(l),n}export{h as c};

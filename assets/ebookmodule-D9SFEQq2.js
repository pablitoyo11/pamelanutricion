function m(){const e=document.createElement("section");e.className="testimonios-section";const t=document.createElement("h2");t.className="testimonios-titulo",t.textContent="Lo que dicen quienes ya leyeron el libro",e.appendChild(t);const a=document.createElement("p");a.className="testimonios-subtitulo",a.textContent="Padres y jugadores que decidieron tomar la nutrición en serio. Esto es lo que pasó después de leer el libro:",e.appendChild(a),[{texto:"Antes comía sin pensar y llegaba cansado a los partidos. Después de leer el libro entendí qué comer antes y después de entrenar. Hoy me siento con más energía y recupero mucho mejor.",autor:"Mateo, 16 años | Inferiores del club Atlanta"},{texto:"Es claro, fácil de entender y aplicado al fútbol. No es solo teoría: te dice exactamente qué hacer. Lo recomiendo a cualquier jugador que quiera rendir más.",autor:"Lucas, 14 años | Liga de Banfield"},{texto:"Como mamá siempre tuve dudas sobre qué debía comer mi hijo. Este libro me dio tranquilidad y una guía clara para acompañarlo en su crecimiento deportivo.",autor:"Carolina, mamá de Santino (jugador de Racing)"},{texto:"Es una inversión mínima para todo lo que aporta. Nos ayudó a ordenar la alimentación en casa. Planear la comida con la escuela y los entrenamientos. ya no improvisamos.",autor:"Fernanda, mamá de Manuel (jugador de Argentinos del Sud)"}].forEach(o=>{const n=document.createElement("div");n.className="testimonial";const s=document.createElement("p");s.className="testimonial-estrellas",s.textContent="⭐⭐⭐⭐⭐",n.appendChild(s);const r=document.createElement("p");r.className="testimonial-texto",r.textContent=o.texto,n.appendChild(r);const c=document.createElement("p");c.className="testimonial-autor",c.textContent=`— ${o.autor}`,n.appendChild(c),e.appendChild(n)});const i=document.createElement("style");return i.innerHTML=`
    .testimonios-section {
      max-width: 800px;
      margin: 20px;
      padding: 2rem;
      font-family: Arial, sans-serif;
      background-color: #f8f8f8;
      border-radius: 10px;
    }
    .testimonios-titulo {
      text-align: center;
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }
    .testimonios-subtitulo {
      text-align: center;
      font-size: 1.1rem;
      margin-bottom: 2rem;
      color: #555;
    }
    .testimonial {
      background-color: #fff;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    }
    .testimonial-estrellas {
      font-size: 1.2rem;
      color: gold;
      margin-bottom: 0.5rem;
    }
    .testimonial-texto {
      font-size: 1rem;
      margin-bottom: 0.5rem;
      color: #333;
    }
    .testimonial-autor {
      font-weight: bold;
      color: #000;
      font-size: 0.95rem;
    }
    `,e.appendChild(i),document.body.appendChild(e),e}function d(){const e=document.createElement("div");e.className="ebook-container";const t=document.createElement("img");t.className="ebook-img",t.src="/pamelanutricion/imagenes/ebook-nutricion-para-campeones-01.jpg",t.alt="Ebook Nutrición para Campeones",e.appendChild(t);const a=document.createElement("h1");a.className="ebook-title",a.innerText="Nutrición para Campeones",e.appendChild(a);const l=document.createElement("h2");l.className="ebook-subtitle",l.innerText="La guía definitiva para padres y jóvenes futbolistas",e.appendChild(l);const i=document.createElement("p");i.className="ebook-description",i.innerHTML=`
      <span class="tituloDescription">SOBRE EL CONTENIDO DEL LIBRO</span>
      Este libro reúne todos los recursos esenciales para el “entrenamiento invisible”, ese que marca la diferencia entre los que solo sueñan y los que realmente llegan lejos. Con estrategias de alimentación, hidratación y recuperación diseñadas para jóvenes futbolistas. Tu hijo podrá transformar su talento en rendimiento y dar pasos firmes hacia el éxito deportivo.
      Haz que cada entrenamiento cuente y ayúdalo a convertirse en un verdadero campeón.
      <span class="lineaFinal">¡Transforma su talento ahora!</span>
    `,e.appendChild(i);const o=document.createElement("a");o.href="https://hotmart.com/es/marketplace/productos/nutricion-para-campeones",o.target="_blank",o.className="ebook-comprar-btn seccion-btn";const n=document.createElement("span");n.innerText="COMPRAR LIBRO",o.appendChild(n),e.appendChild(o),e.appendChild(m());const s=o.cloneNode(!0);e.appendChild(s);const r=document.createElement("style");return r.innerHTML=`
        .ebook-container {display: flex;flex-direction: column;align-items: center;padding: 15px;margin: 0px;min-height: 100vh;background: linear-gradient(to bottom,rgba(0, 0, 0, 0) 0%,rgba(108, 179, 104, 0.8) 300px,rgba(108, 179, 104, 0.8) 100%);}
        .ebook-img { display:block; height: clamp(200px, 30vw, 350px); border-radius:5%; box-shadow: 0 0 30px 10px rgba(255, 233, 38, 0.38); margin:20px;}
        .ebook-title { font-size: 30px; color:rgba(0, 0, 0, 1); text-align:center }
        .ebook-subtitle { font-size: 25px; color:rgba(0, 0, 0, 1); text-align:center }        
        .ebook-description { width:80%; font-family: 'Times New Roman', Times, serif; font-size: 20px; text-align: center; color:rgba(27, 27, 27, 1); margin:20px; }
        .ebook-description .tituloDescription {font-weight: bold; font-size: 1.1em; display: block; margin-bottom: 0.5rem;} 
        .ebook-description .lineaFinal {font-weight: bold; font-size: 1.1em; display: block; color: #000000ff; font-weight: bold; margin-top: 0.5rem;}
        .ebook-comprar-btn { width:80%; min-width: 170px; max-width: 300px; font-weight: bold; text-align: center; display: block;}
        @media (max-width: 720px) {
          .ebook-container{
            padding:5px;
          }
          .testimonios-section{
          margin:5px;
          padding: 5px;
          }
        }
    `,e.appendChild(r),e}export{d as createEbookContainer};

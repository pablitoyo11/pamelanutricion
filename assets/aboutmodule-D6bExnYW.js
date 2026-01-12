function d(){const e=document.createElement("section");e.className="about-hero";const t=document.createElement("img");t.src="/pamelanutricion/imagenes/pamela-bustorf-nutricionista-futbol-01.jpg",t.alt="Pamela Bustorf, nutricionista deportiva",t.className="about-hero-img",e.appendChild(t);const a=document.createElement("div");a.className="about-hero-info";const n=document.createElement("h2");n.className="about-subtitle",n.innerText="NUTRICIONISTA DEPORTIVA",a.appendChild(n);const o=document.createElement("h1");o.innerText="Pamela Bustorf",a.appendChild(o);const i=document.createElement("p");i.className="about-hero-description",i.innerText="Especialista jóvenes futbolistas y optimización del rendimiento.",a.appendChild(i),e.appendChild(a);const r=document.createElement("style");return r.innerHTML=`
    .about-hero {
      width: 100%;
      position: relative;
      height: 100vh;
      overflow: hidden;
    }

    .about-hero-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .about-hero-info {
      position: absolute;
      top: 3%;
      left: 6%;
      max-width: 520px;
      background: rgba(255, 255, 255, 0.75);
      padding: 20px 30px;
      border-radius: 6px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    }

    .about-subtitle {
      font-size: 12px;
      line-height: 1.6;
      letter-spacing: 2px;
      color: #333;
      text-transform: uppercase;
      display: block;
    }
    
    .about-hero-description{
      color: #249128ff;
    }

    .about-hero-info h1 {
      font-size: 54px;
      line-height: 1.1;
      color: #1e1e1e;
      font-family: "Georgia", serif;
    }

    @media (max-width: 720px) {
      .about-hero-info {
        top: 0%;
        left: 0%;
        max-width: 100%;
        width: 100%;
        text-align: center;
        background: rgba(255, 255, 255, 0.75);
        padding: 20px 30px;
        border-radius: 6px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.15);
      }
    }
  `,e.appendChild(r),e}function l(){const e=document.createElement("section");e.className="about-more",e.id="sobre-mi";const t=document.createElement("div");t.className="about-more-top";const a=document.createElement("h2");a.innerText="MÁS SOBRE PAMELA",t.appendChild(a);const n=document.createElement("span");n.className="about-more-line",t.appendChild(n);const o=document.createElement("p");o.innerText="Soy Nutricionista deportiva con más de 15 años de experiencia asesorando a deportistas de alto rendimiento en la mejora de su alimentación y su desempeño físico. Apasionada por el fútbol, he dedicado mi carrera a diseñar estrategias alimentarias que potencien la recuperación, la energía y el bienestar de los jugadores.",t.appendChild(o),e.appendChild(t);const i=document.createElement("div");i.className="about-more-bottom";const r=document.createElement("img");r.className="about-more-images",r.src="/pamelanutricion/imagenes/pamela-bustorf-nutricionista-futbol-02.jpg",r.alt="Pamela Bustorf, nutricionista deportiva",i.appendChild(r);const s=document.createElement("div");s.className="about-more-text-bottom",s.innerHTML=`
    <p>Mi misión es acompañarte en tu camino hacia el profesionalismo, ayudándote a alcanzar tu mejor versión dentro y fuera de la cancha.</p>
    <p>Como nutricionista especializada en fútbol, trabajo junto a vos y tu familia para que cada decisión —desde la alimentación hasta los hábitos diarios— potencien tu rendimiento y te acerquen a tus metas.</p>
    <p>Con un enfoque personalizado, te brindo las herramientas necesarias para que construyas una mentalidad fuerte, un cuerpo preparado y una base sólida para tu futuro deportivo.</p>
  `,i.appendChild(s),e.appendChild(i);const c=document.createElement("style");return c.innerHTML=`
    .about-more {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #ffffffff;
      padding: 0px;
      margin: 0px;
      text-align: center;
    }

    .about-more-top {
    background: #dbdbdbff;
    width: 100%;
    display: flex;
    padding: 60px 20px;
    flex-direction: column;
    align-items: center;
    }

    .about-more-top > *{
      max-width: 900px;
      padding: 0;
    }

    .about-more-top h2 {
      font-size: 25px;
      font-weight: 700;
      letter-spacing: 2px;
      padding: 12px;
      color: #000;
    }

    .about-more-line {
      display: block;
      width: 2px;
      height: 40px;
      background: #4caf50;
      margin: 12px;
    }

    .about-more-top p {
      color: #4caf50;
      font-size: 20px;
      font-weight: 500;
      line-height: 1.5;
      padding: 10px;
    }

    .about-more-bottom {
      display: flex;
      flex-direction: row;
      align-items: center;
      max-width: 1000px;
      margin: 0 auto;
    }

    .about-more-images {
      display: flex;
      justify-content: center;
      border-radius: 10px;
      margin: 15px;
      height: 400px;
    }

    .about-more-text-bottom {
      margin: 0 auto;
      color: #4caf50;
      font-size: 18px;
      line-height: 2;
      font-weight: 400;
      text-align: left;
      margin: 10px;
    }

    @media (max-width: 720px) {
      .about-more-images {
      display: flex;
      justify-content: center;
      border-radius: 10px;
      margin: 15px;
      height: 400px;
      }

      .about-more-bottom {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 1000px;
      margin: 0 auto;
      }


    }
  `,e.appendChild(c),e}function p(){const e=document.createElement("div");e.className="about-btns";const t=document.createElement("button");t.innerText="Programa de nutrición! Vamos!",t.className="btn-vamos-al-programa seccion-btn",t.addEventListener("click",()=>{const o=document.getElementById("serviciosBtn");o?o.click():console.warn("El botón de navegación 'serviciosBtn' no existe")});const a=document.createElement("button");a.innerText="Quiero el ebook!",a.className="btn-ver-ebook seccion-btn",a.addEventListener("click",()=>{const o=document.getElementById("ebookBtn");o?o.click():console.warn("El botón de navegación 'ebookBtn' no existe")}),e.appendChild(t),e.appendChild(a);const n=document.createElement("style");return n.innerHTML=`
    .about-btns {
      width: 100%;
      padding: 15px;
      background: white;
      display: flex;
      justify-content: space-evenly;
      align-items: stretch;
      gap: 20px;
    }

    .btn-vamos-al-programa,
    .btn-ver-ebook {
      max-width: 300px;
      flex: 1;
    }
    @media (max-width: 720px) {
      .about-btns{
      padding:0px;
      }
    }
  `,e.appendChild(n),e}function m(){const e=document.createElement("div");return e.className="about-page-container",e.appendChild(d()),e.appendChild(l()),e.appendChild(p()),e}export{m as createAboutContainer,p as createBotonesContainer};

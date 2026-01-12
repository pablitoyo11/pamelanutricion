// ABOUT
// Sección Hero de About
function createAboutHeroContainer() {
  const aboutContainer = document.createElement("section");
  aboutContainer.className = "about-hero";

  const aboutHeroImg = document.createElement("img");
  aboutHeroImg.src = "./public/imagenes/pamela-bustorf-nutricionista-futbol-01.jpg";
  aboutHeroImg.alt = "Pamela Bustorf, nutricionista deportiva";
  aboutHeroImg.className = "about-hero-img";
  aboutContainer.appendChild(aboutHeroImg);

  // Texto overlay
  const aboutHeroInfo = document.createElement("div");
  aboutHeroInfo.className = "about-hero-info";

  const aboutSubtitle = document.createElement("h2");
  aboutSubtitle.className = "about-subtitle";
  aboutSubtitle.innerText = "NUTRICIONISTA DEPORTIVA";
  aboutHeroInfo.appendChild(aboutSubtitle);

  const aboutTitle = document.createElement("h1");
  aboutTitle.innerText = "Pamela Bustorf";
  aboutHeroInfo.appendChild(aboutTitle);

  const aboutHeroDescription = document.createElement("p");
  aboutHeroDescription.className = "about-hero-description";
  aboutHeroDescription.innerText = "Especialista jóvenes futbolistas y optimización del rendimiento.";
  aboutHeroInfo.appendChild(aboutHeroDescription);

  aboutContainer.appendChild(aboutHeroInfo);

  // Estilos
  const style = document.createElement("style");
  style.innerHTML = `
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
  `;
  aboutContainer.appendChild(style);
  return aboutContainer;
}

function createAboutMoreContainer() {
  // Seccion Más sobre mí (parte superior y parte inferior + estilos)
  const section = document.createElement("section");
  section.className = "about-more";
  section.id = "sobre-mi";

  // PARTE SUPERIOR
  const top = document.createElement("div");
  top.className = "about-more-top";

  const title = document.createElement("h2");
  title.innerText = "MÁS SOBRE PAMELA";
  top.appendChild(title);

  const line = document.createElement("span");
  line.className = "about-more-line";
  top.appendChild(line);

  const description = document.createElement("p");
  description.innerText =
    "Soy Nutricionista deportiva con más de 15 años de experiencia asesorando a deportistas de alto rendimiento en la mejora de su alimentación y su desempeño físico. Apasionada por el fútbol, he dedicado mi carrera a diseñar estrategias alimentarias que potencien la recuperación, la energía y el bienestar de los jugadores.";
  top.appendChild(description);

  section.appendChild(top);

  // PARTE INFERIOR
  const bottom = document.createElement("div");
  bottom.className = "about-more-bottom";


  const img = document.createElement("img");
  img.className = "about-more-images";
  img.src = "./public/imagenes/pamela-bustorf-nutricionista-futbol-02.jpg";
  img.alt = "Pamela Bustorf, nutricionista deportiva";
  bottom.appendChild(img);


  const textBottom = document.createElement("div");
  textBottom.className = "about-more-text-bottom";

  textBottom.innerHTML = `
    <p>Mi misión es acompañarte en tu camino hacia el profesionalismo, ayudándote a alcanzar tu mejor versión dentro y fuera de la cancha.</p>
    <p>Como nutricionista especializada en fútbol, trabajo junto a vos y tu familia para que cada decisión —desde la alimentación hasta los hábitos diarios— potencien tu rendimiento y te acerquen a tus metas.</p>
    <p>Con un enfoque personalizado, te brindo las herramientas necesarias para que construyas una mentalidad fuerte, un cuerpo preparado y una base sólida para tu futuro deportivo.</p>
  `;
  bottom.appendChild(textBottom);

  section.appendChild(bottom);

  // Styles
  const style = document.createElement("style");
  style.innerHTML = `
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
  `;

  section.appendChild(style);

  return section;
}

// botones programa de nutricion y ebook
function createBotonesContainer() {
  // Contenedor principal de botones
  const botonesContainer = document.createElement("div");
  botonesContainer.className = "about-btns";

  // Botón "Vamos al programa"
  const botonPrograma = document.createElement("button");
  botonPrograma.innerText = "Programa de nutrición! Vamos!";
  botonPrograma.className = "btn-vamos-al-programa seccion-btn";
  // emula click en el nav button
  botonPrograma.addEventListener("click", () => {
    const serviciosBtn = document.getElementById("serviciosBtn");
    if (serviciosBtn) {
      serviciosBtn.click();
    } else {
      console.warn("El botón de navegación 'serviciosBtn' no existe");
    }
  });

  // Botón "Quiero ver el ebook"
  const botonEbook = document.createElement("button");
  botonEbook.innerText = "Quiero el ebook!";
  botonEbook.className = "btn-ver-ebook seccion-btn";
  // emula click en el nav button
  botonEbook.addEventListener("click", () => {
    const navEbookBtn = document.getElementById("ebookBtn");
    if (navEbookBtn) {
      navEbookBtn.click();
    } else {
      console.warn("El botón de navegación 'ebookBtn' no existe");
    }
  });

  // Agregar botones al contenedor
  botonesContainer.appendChild(botonPrograma);
  botonesContainer.appendChild(botonEbook);

  // Estilos
  const style = document.createElement("style");
  style.innerHTML = `
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
  `;
  botonesContainer.appendChild(style);

  return botonesContainer;
};

export { createBotonesContainer };


function createAboutContainer() {
  const aboutPageContainer = document.createElement("div");
  aboutPageContainer.className = "about-page-container";
  // appendchild cada seccion en orden
  // añadir hero about
  aboutPageContainer.appendChild(createAboutHeroContainer());
  // añadir more about
  aboutPageContainer.appendChild(createAboutMoreContainer());
  // añadir botones
  aboutPageContainer.appendChild(createBotonesContainer());

  return aboutPageContainer;
}  

export { createAboutContainer };

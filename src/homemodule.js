import { crearContenedorTestimoniosProgramaNutricion } 
from "./testimoniosprogramanutricionmodule.js";

function createHomeHeader() {

    // LAYOUT FLEX
    const homeLayout = document.createElement("div");
    homeLayout.className = "home-layout";

    // HOME LEFT (PRESENTACION PAMELA Y TESTIMONIOS)
    const homeLeft = document.createElement("div");
    homeLeft.className = "home-left";

    // PRESENTACIÓN PAMELA
    const pamelaSection = document.createElement("div");
    pamelaSection.className = "presentacion-pamela";

    const pamelaImg = document.createElement("img");
    pamelaImg.src = import.meta.env.BASE_URL + "imagenes/pamela-bustorf-nutricionista-futbol-02.jpg";
    pamelaImg.alt = "Pamela Bustorf";
    pamelaImg.className = "pamela-img";
    pamelaSection.appendChild(pamelaImg); 

    const pamelaInfo = document.createElement("div");
    pamelaInfo.className = "pamela-info";
    pamelaSection.appendChild(pamelaInfo); 
    homeLeft.appendChild(pamelaSection); 

    const pamelaName = document.createElement("h2");
    pamelaName.innerText = "Pamela Bustorf";
    pamelaInfo.appendChild(pamelaName); 

    const pamelaRole = document.createElement("p");
    pamelaRole.className = "pamela-role";
    pamelaRole.innerText = "Lic. en Nutrición · Especialista en fútbol";
    pamelaInfo.appendChild(pamelaRole); 

    const pamelaQuote = document.createElement("blockquote");
    pamelaQuote.innerText = "“Juntos potenciamos tu sueño de ser futbolista de elite”";
    pamelaInfo.appendChild(pamelaQuote); 

    const pamelaText = document.createElement("p");
    pamelaText.innerText = "Acompaño a futbolistas y familias en el desarrollo de hábitos que potencian el rendimiento, la energía y la salud, dentro y fuera de la cancha.";
    pamelaInfo.appendChild(pamelaText); 

    // BOTONES
    const botonesContainer = document.createElement("div");
    botonesContainer.className = "pamela-buttons";
    pamelaInfo.appendChild(botonesContainer);

    // Botón "Más sobre Pamela"
    const btnSobrePamela = document.createElement("button");
    btnSobrePamela.innerText = "Más sobre Pamela";
    btnSobrePamela.className = "btn-pamela";
    btnSobrePamela.addEventListener("click", () => {
        const aboutBtn = document.getElementById("aboutBtn");
        if (aboutBtn) {
            aboutBtn.click();
        } else {
            console.warn("El botón de navegación 'aboutBtn' no existe");
        }
    });
    botonesContainer.appendChild(btnSobrePamela);

    // Botón "Programa de nutrición"
    const btnPrograma = document.createElement("button");
    btnPrograma.innerText = "Programa de nutrición";
    btnPrograma.className = "btn-pamela";
    btnPrograma.addEventListener("click", () => {
        const serviciosBtn = document.getElementById("serviciosBtn");
        if (serviciosBtn) {
            serviciosBtn.click();
        } else {
            console.warn("El botón de navegación 'serviciosBtn' no existe");
        }
    });
    botonesContainer.appendChild(btnPrograma);

    // TESTIMONIOS (IMPORTADO)
    const testimonios = crearContenedorTestimoniosProgramaNutricion();
    homeLeft.appendChild(testimonios); 

    // PANEL LATERAL DERECHO (CARDS PROMOCIONALES)
    const panelLateral = document.createElement("aside");
    panelLateral.className = "panel-lateral";

    // EBOOK
    const cardEbook = document.createElement("a");
    cardEbook.className = "panel-card";
    cardEbook.style.backgroundImage = `url('${import.meta.env.BASE_URL}imagenes/promocional-ebook.jpg')`;

    const ebookTitle = document.createElement("h3");
    ebookTitle.innerText = "Nutrición para campeones";
    cardEbook.appendChild(ebookTitle); 

    const ebookText = document.createElement("p");
    ebookText.innerText = "Guía práctica para jóvenes futbolistas";
    cardEbook.appendChild(ebookText); 

    cardEbook.addEventListener("click", () => {
        const navEbookBtn = document.getElementById("ebookBtn");
        if (navEbookBtn) {
            navEbookBtn.click();
        } else {
            console.warn("El botón de navegación 'ebookBtn' no existe");
        }
    });

    panelLateral.appendChild(cardEbook); 

    // PROGRAMA
    const cardPrograma = document.createElement("a");
    cardPrograma.className = "panel-card programa-card";
    cardPrograma.style.backgroundImage = `url('${import.meta.env.BASE_URL}imagenes/promocional-programa.jpg')`;

    const programaTitle = document.createElement("h3");
    programaTitle.innerText = "Programa personalizado";
    cardPrograma.appendChild(programaTitle); 

    const programaText = document.createElement("p");
    programaText.innerText = "Plan adaptado a tu edad y objetivos";
    cardPrograma.appendChild(programaText); 
    
    cardPrograma.addEventListener("click", () => {
        const serviciosBtn = document.getElementById("serviciosBtn");
        if (serviciosBtn) {
            serviciosBtn.click();
        } else {
            console.warn("El botón de navegación 'serviciosBtn' no existe");
        }
    });

    panelLateral.appendChild(cardPrograma); 

    // GUÍA PADRES
    const cardGuia = document.createElement("a");
    cardGuia.className = "panel-card";
    cardGuia.style.backgroundImage = `url('${import.meta.env.BASE_URL}imagenes/promocional-guia-para-padres.jpg')`;
    cardGuia.href = "https://www.canva.com/design/DAG09WVUiY8/nTcSeXkEZWJTvwHWa09qSg/view?utlId=hb1967e48eb";
    cardGuia.target = "_blank";

    const guiaTitle = document.createElement("h3");
    guiaTitle.innerText = "¡Gratis!";
    cardGuia.appendChild(guiaTitle); 

    const guiaText = document.createElement("p");
    guiaText.innerText = "Guía para padres de futbolistas";
    cardGuia.appendChild(guiaText); 

    panelLateral.appendChild(cardGuia); 

    // FINAL HOME LAYOUT
    homeLayout.appendChild(homeLeft); 
    homeLayout.appendChild(panelLateral); 

    // ESTILOS
    const style = document.createElement("style");
    style.innerHTML = `
    .home-layout {
        padding: 10px;
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        gap: 20px;
        align-items: stretch;
    }
    
    .home-left {
        flex: 3;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    
    /* PRESENTACIÓN PAMELA */
    .presentacion-pamela {
        display: flex;
        gap: 20px;
        background: #fff;
        padding: 30px;
        border-radius: 10px;
    }
    
    .pamela-img {
        width: 40%;
        border-radius: 10px;
        object-fit: cover;
    }
    
    .pamela-info {
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .pamela-info h2 {
        text-align: center;
        margin: 15px;
        color: #1b7f3b;
        font-size: 2em;
    }
    
    .pamela-role {
        text-align: center;
        font-weight: bold;
        margin: 5px 0 10px;
        font-size: 1.2em;
    }
    
    .pamela-info blockquote {
        margin: 10px 0;
        color: #1b7f3b;
        font-weight: bold;
        font-size: 1.2em;
    }
    
    .pamela-info p {
        font-size: 1.1em;
    }
    
    /* BOTONES PAMELA */
    .pamela-buttons {
        display: flex;
        gap: 15px;
        justify-content: space-around;
        margin: 15px;
    }
    
    .btn-pamela {
        padding: 15px 25px;
        border: none;
        border-radius: 8px;
        background-color: #1b7f3b;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.2s ease;
    }
    
    .btn-pamela:hover {
        background-color: #145a2b;
    }
    
    /* PANEL LATERAL */
    .panel-lateral {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    
    .panel-card {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    
        background-color: #fff;
        padding: 15px;
        border-radius: 10px;
        text-align: center;
        flex: 1;
    
        text-decoration: none;
        color: inherit;
    
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        position: relative;
        overflow: hidden;
    }
    
    .panel-card h3, .panel-card p {
        font-weight: 700;
        text-shadow: 
            0px 0px 2px #000000,
            0px 0px 4px #000000;
    }
    
    .panel-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 15px rgba(0,0,0,0.1);
    }
    
    /* MEDIA QUERIES */
    @media (max-width: 768px) {
        .home-layout {
            flex-direction: column;
        }
    
        .presentacion-pamela {
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
    
        .pamela-img {
            width: 170px;
        }
    
        .pamela-info {
            width: 100%;
        }
    
        .pamela-info h2 {
            font-size: 1.8em;
        }
    
        .pamela-role, .pamela-info blockquote, .pamela-info p {
            font-size: 1.1em;
        }
    
        .pamela-buttons {
            flex-direction: column;
            gap: 10px;
        }
    }
    `;

    homeLayout.appendChild(style); 

    return homeLayout;
}

export { createHomeHeader };

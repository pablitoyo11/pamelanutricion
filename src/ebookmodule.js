// seccion EBOOK

// importamos la funcion del modulo que genera los testimonios del libro
import { crearContenedorTestimoniosLibro } from './testimonioslibromodule.js';

function createEbookContainer() {

    // Contenedor principal de la sección ebook
    const ebookContainer = document.createElement("div");
    ebookContainer.className = "ebook-container";

    const ebookImg = document.createElement("img");
    ebookImg.className = "ebook-img";
    ebookImg.src = './public/imagenes/ebook-nutricion-para-campeones-01.jpg';
    ebookContainer.appendChild(ebookImg);

    // Título principal del ebook
    const ebookTitle = document.createElement("h1");
    ebookTitle.innerText = "Nutrición para Campeones";
    ebookContainer.appendChild(ebookTitle);

    // Subtitulo del ebook
    const ebookSubtitle = document.createElement("h2");
    ebookSubtitle.innerText = "La guía definitiva para padres y jóvenes futbolistas";
    ebookContainer.appendChild(ebookSubtitle);

    // Descripción intro del ebook 
    const ebookDescription = document.createElement("p");
    ebookDescription.className = "ebook-description";
    ebookDescription.innerHTML = `
      <span class="tituloDescription">SOBRE EL CONTENIDO DEL LIBRO</span>
      Este libro reúne todos los recursos esenciales para el “entrenamiento invisible”, ese que marca la diferencia entre los que solo sueñan y los que realmente llegan lejos. Con estrategias de alimentación, hidratación y recuperación diseñadas para jóvenes futbolistas. Tu hijo podrá transformar su talento en rendimiento y dar pasos firmes hacia el éxito deportivo.
      Haz que cada entrenamiento cuente y ayúdalo a convertirse en un verdadero campeón.
      <span class="lineaFinal">¡Transforma su talento ahora!</span>
    `;
    ebookContainer.appendChild(ebookDescription);
    const ebookComprarBtn = document.createElement("button");
    ebookComprarBtn.className = "ebook-comprar-btn seccion-btn";
    ebookComprarBtn.innerText = "COMPRAR LIBRO";
    ebookContainer.appendChild(ebookComprarBtn);

    // Agregamos la seccion de testimonios del libro importada del modulo   
    ebookContainer.appendChild(crearContenedorTestimoniosLibro());

    // clonar el boton de comprar para ponerlo abajo de los testimonios
    const comprarBtnClon = ebookComprarBtn.cloneNode(true);
    ebookContainer.appendChild(comprarBtnClon);


    // Estilos específicos para la seccion ebook
    const style = document.createElement("style");
    style.innerHTML = `
        .ebook-container {display: flex;flex-direction: column;align-items: center;padding: 15px;margin: 0px;min-height: 100vh;background: linear-gradient(to bottom,rgba(0, 0, 0, 0) 0%,rgba(108, 179, 104, 0.8) 300px,rgba(108, 179, 104, 0.8) 100%);}
        .ebook-img { display:block; height: clamp(200px, 30vw, 350px); border-radius:5%; box-shadow: 0 0 30px 10px rgba(255, 233, 38, 0.38); margin:20px;}
        h1 { font-size: 30px; color:rgba(0, 0, 0, 1); text-align:center }
        h2 { font-size: 25px; color:rgba(0, 0, 0, 1); text-align:center }        
        .ebook-description { width:80%; font-family: 'Times New Roman', Times, serif; font-size: 20px; text-align: center; color:rgba(27, 27, 27, 1); margin:20px; }
        .ebook-description .tituloDescription {font-weight: bold; font-size: 1.1em; display: block; margin-bottom: 0.5rem;} 
        .ebook-description .lineaFinal {font-weight: bold; font-size: 1.1em; display: block; color: #000000ff; font-weight: bold; margin-top: 0.5rem;}
        .ebook-comprar-btn { width:80%; min-width: 170px; max-width: 300px; font-weight: bold;}
        @media (max-width: 720px) {
          .ebook-container{
            padding:5px;
          }
          .testimonios-section{
          margin:5px;
          padding: 5px;
          }
        }
    `;
    ebookContainer.appendChild(style);
  return ebookContainer;
}
export {createEbookContainer}
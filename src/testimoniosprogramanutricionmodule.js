// TESTIMONIOS DEL PROGRAMA DE NUTRICION
function crearContenedorTestimoniosProgramaNutricion() {
  // Contenedor principal de la sección Testimonios
  const contenedorTestimonios = document.createElement("div");
  contenedorTestimonios.className = "contenedor-testimonios";

  const testimoniosDePersonas = {
    title: "", /* vacio para colocarle titulo en un futuro */
    personas: [
      {
        nombre: "Santiago",
        edad: "13",
        declaracion: "Antes, mi rendimiento estaba estancado y me lesionaba con frecuencia. Ahora desde que estoy con Pamela mi velocidad y resistencia mejoraron. De ser suplente, ahora soy titular. Las molestias desaparecieron y mi confianza es mejor. Este programa me hizo entrenar más inteligentemente.",
        imagen: import.meta.env.BASE_URL + "imagenes/testimonio-santiago.jpg",
      },
      {
        nombre: "Joaquín",
        edad: "13",
        declaracion:
          "Quería avanzar pero no encontraba el camino, hasta que comencé en el programa. Luego de unos meses mi rendimiento mejoró muchisimo, me siento super acompañado y estoy cada día mejor.",
        imagen: import.meta.env.BASE_URL + "imagenes/testimonio-joaquin.jpg",
      },
      {
        nombre: "Mamá de Ignacio",
        edad: "12",
        declaracion:
          "Quería avanzar pero no encontraba el camino, hasta que comencé en el programa. Luego de unos meses mi rendimiento mejoró muchisimo, me siento super acompañado y estoy cada día mejor.",
        imagen: import.meta.env.BASE_URL + "imagenes/testimonio-ignacio.jpg",
      },
    ],
  };

  // Contenedor grande de la sección de los testimonios
  function crearSeccionTestimonios(sectionToAdd) {
    const seccionTestimonios = document.createElement("div");
    seccionTestimonios.className = "seccion-testimonios";

    // Título de la sección de los testimonios (el titulo esta en el objeto de personas)
    const sectionTitle = document.createElement("span");
    sectionTitle.className = "section-title";
    sectionTitle.textContent = sectionToAdd.title;
    seccionTestimonios.appendChild(sectionTitle);

    // Lista de personas de la sección (ul)
    const ulListPersonas = document.createElement("ul");
    ulListPersonas.className = "ul-list-personas";
    seccionTestimonios.appendChild(ulListPersonas);
    //Funcion para crear la seccion de testimonios invidivuales ( se repite por cada objeto)
    sectionToAdd.personas.forEach((persona) => {
      // Contenedor de cada persona del menú (li)
      const liDeTestimonio = document.createElement("li");
      liDeTestimonio.className = "li-de-testimonio";

      // Imagen de la persona (thumbnail)
      const imagenPersona = document.createElement("img");
      imagenPersona.src = persona.imagen;
      imagenPersona.setAttribute("height", 150);
      imagenPersona.className = "imagen-persona";
      liDeTestimonio.appendChild(imagenPersona);

      // Declaracion de la persona (texto abajo)
      const declaracionPersona = document.createElement("p");
      declaracionPersona.className = "declaracion-persona";
      declaracionPersona.textContent = persona.declaracion;
      liDeTestimonio.appendChild(declaracionPersona);

      ulListPersonas.appendChild(liDeTestimonio);

      // Contenedor de nombre y edad de la persona
      const informacionPersona = document.createElement("div");
      informacionPersona.className = "informacion-persona";

      const nombrePersona = document.createElement("span");
      nombrePersona.className = "nombre-persona";
      nombrePersona.textContent = persona.nombre;
      informacionPersona.appendChild(nombrePersona);

      const edadPersona = document.createElement("p");
      edadPersona.className = "edad-persona";
      edadPersona.textContent = persona.edad;
      informacionPersona.appendChild(edadPersona);

      liDeTestimonio.appendChild(informacionPersona);
    });

    return seccionTestimonios;
  }

  contenedorTestimonios.appendChild(
    crearSeccionTestimonios(testimoniosDePersonas)
  );

  // Estilos específicos para Menú (elemento <style>)
  const style = document.createElement("style");
  style.innerHTML = `
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

@media (max-width: 720px) {
  .seccion-testimonios {
    flex-direction: column;
    padding: 15px;
  }

  .ul-list-personas {
    flex-direction: column;
    align-items: center;
  }

  .li-de-testimonio {
    flex: 1 1 100%;
    max-width: 100%;
    display: flex;
    flex-direction: row;
    padding: 0;
  }

  .imagen-persona {
    width: 150px; 
    object-fit: cover;
  }

  .informacion-persona {
    flex-direction: column;
    padding: 10px;
    justify-content: center;
  }

  .declaracion-persona {
    font-size: 0.9em;
    padding: 10px;
    margin: 10px;
    line-height: 1.5;
  }

  @media (max-width: 530px) {
    .li-de-testimonio {
      flex-direction: column;
      align-items: center;
    }
    .imagen-persona {
      width: 100%;}
  }
  .informacion-persona {
    flex-direction: row;
    padding: 10px;
    justify-content: center;
  }

}

  `;
  contenedorTestimonios.appendChild(style);

  return contenedorTestimonios;
}

export {crearContenedorTestimoniosProgramaNutricion}
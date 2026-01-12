// TESTIMONIOS DEL LIBRO
function crearContenedorTestimoniosLibro() {
    // Crear el elemento padre de la sección
    const testimoniosSection = document.createElement('section');
    testimoniosSection.className = 'testimonios-section';

    // Título de la sección
    const titulo = document.createElement('h2');
    titulo.className = 'testimonios-titulo';
    titulo.textContent = 'Lo que dicen quienes ya leyeron el libro';
    testimoniosSection.appendChild(titulo);

    // Subtítulo
    const subtitulo = document.createElement('p');
    subtitulo.className = 'testimonios-subtitulo';
    subtitulo.textContent = 'Padres y jugadores que decidieron tomar la nutrición en serio. Esto es lo que pasó después de leer el libro:';
    testimoniosSection.appendChild(subtitulo);

    // Array de testimonios
    const testimonios = [
      {
        texto: 'Antes comía sin pensar y llegaba cansado a los partidos. Después de leer el libro entendí qué comer antes y después de entrenar. Hoy me siento con más energía y recupero mucho mejor.',
        autor: 'Mateo, 16 años | Inferiores del club Atlanta'
      },
      {
        texto: 'Es claro, fácil de entender y aplicado al fútbol. No es solo teoría: te dice exactamente qué hacer. Lo recomiendo a cualquier jugador que quiera rendir más.',
        autor: 'Lucas, 14 años | Liga de Banfield'
      },
      {
        texto: 'Como mamá siempre tuve dudas sobre qué debía comer mi hijo. Este libro me dio tranquilidad y una guía clara para acompañarlo en su crecimiento deportivo.',
        autor: 'Carolina, mamá de Santino (jugador de Racing)'
      },
      {
        texto: 'Es una inversión mínima para todo lo que aporta. Nos ayudó a ordenar la alimentación en casa. Planear la comida con la escuela y los entrenamientos. ya no improvisamos.',
        autor: 'Fernanda, mamá de Manuel (jugador de Argentinos del Sud)'
      }
    ];

    // Crear cada testimonio
    testimonios.forEach(item => {
      const testimonialDiv = document.createElement('div');
      testimonialDiv.className = 'testimonial';

      const estrellas = document.createElement('p');
      estrellas.className = 'testimonial-estrellas';
      estrellas.textContent = '⭐⭐⭐⭐⭐';
      testimonialDiv.appendChild(estrellas);

      const texto = document.createElement('p');
      texto.className = 'testimonial-texto';
      texto.textContent = item.texto;
      testimonialDiv.appendChild(texto);

      const autor = document.createElement('p');
      autor.className = 'testimonial-autor';
      autor.textContent = `— ${item.autor}`;
      testimonialDiv.appendChild(autor);

      testimoniosSection.appendChild(testimonialDiv);
    });

    // Crear estilos
    const style = document.createElement('style');
    style.innerHTML = `
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
    `;

    // Añadir estilos al padre
    testimoniosSection.appendChild(style);

    // Finalmente agregar la sección al body
    document.body.appendChild(testimoniosSection);

    return testimoniosSection;
}

export {crearContenedorTestimoniosLibro}

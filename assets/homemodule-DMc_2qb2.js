import{c as w}from"./testimoniosprogramanutricionmodule-C-v69GHr.js";function B(){const l=document.createElement("div");l.className="home-layout";const c=document.createElement("div");c.className="home-left";const r=document.createElement("div");r.className="presentacion-pamela";const d=document.createElement("img");d.src="/pamelanutricion/imagenes/pamela-bustorf-nutricionista-futbol-02.jpg",d.alt="Pamela Bustorf",d.className="pamela-img",r.appendChild(d);const a=document.createElement("div");a.className="pamela-info",r.appendChild(a),c.appendChild(r);const x=document.createElement("h2");x.innerText="Pamela Bustorf",a.appendChild(x);const u=document.createElement("p");u.className="pamela-role",u.innerText="Lic. en Nutrición · Especialista en fútbol",a.appendChild(u);const f=document.createElement("blockquote");f.innerText="“Juntos potenciamos tu sueño de ser futbolista de elite”",a.appendChild(f);const g=document.createElement("p");g.innerText="Acompaño a futbolistas y familias en el desarrollo de hábitos que potencian el rendimiento, la energía y la salud, dentro y fuera de la cancha.",a.appendChild(g);const p=document.createElement("div");p.className="pamela-buttons",a.appendChild(p);const s=document.createElement("button");s.innerText="Más sobre Pamela",s.className="btn-pamela",s.addEventListener("click",()=>{const e=document.getElementById("aboutBtn");e?e.click():console.warn("El botón de navegación 'aboutBtn' no existe")}),p.appendChild(s);const m=document.createElement("button");m.innerText="Programa de nutrición",m.className="btn-pamela",m.addEventListener("click",()=>{const e=document.getElementById("serviciosBtn");e?e.click():console.warn("El botón de navegación 'serviciosBtn' no existe")}),p.appendChild(m);const T=w();c.appendChild(T);const i=document.createElement("aside");i.className="panel-lateral";const t=document.createElement("a");t.className="panel-card",t.style.backgroundImage="url('/pamelanutricion/imagenes/promocional-ebook.jpg')";const b=document.createElement("h3");b.innerText="Nutrición para campeones",t.appendChild(b);const h=document.createElement("p");h.innerText="Guía práctica para jóvenes futbolistas",t.appendChild(h),t.addEventListener("click",()=>{const e=document.getElementById("ebookBtn");e?e.click():console.warn("El botón de navegación 'ebookBtn' no existe")}),i.appendChild(t);const o=document.createElement("a");o.className="panel-card programa-card",o.style.backgroundImage="url('/pamelanutricion/imagenes/promocional-programa.jpg')";const E=document.createElement("h3");E.innerText="Programa personalizado",o.appendChild(E);const k=document.createElement("p");k.innerText="Plan adaptado a tu edad y objetivos",o.appendChild(k),o.addEventListener("click",()=>{const e=document.getElementById("serviciosBtn");e?e.click():console.warn("El botón de navegación 'serviciosBtn' no existe")}),i.appendChild(o);const n=document.createElement("a");n.className="panel-card",n.style.backgroundImage="url('/pamelanutricion/imagenes/promocional-guia-para-padres.jpg')",n.href="https://www.canva.com/design/DAG09WVUiY8/nTcSeXkEZWJTvwHWa09qSg/view?utlId=hb1967e48eb",n.target="_blank";const v=document.createElement("h3");v.innerText="¡Gratis!",n.appendChild(v);const y=document.createElement("p");y.innerText="Guía para padres de futbolistas",n.appendChild(y),i.appendChild(n),l.appendChild(c),l.appendChild(i);const C=document.createElement("style");return C.innerHTML=`
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
    `,l.appendChild(C),l}export{B as createHomeHeader};

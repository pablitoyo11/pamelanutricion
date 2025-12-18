const homeContainer = document.createElement("div");
const homeTitle = document.createElement("h2");
homeTitle.innerText = "Welcome To The Best Restaurant In Town"
homeContainer.appendChild(homeTitle);
const homeSubtitle = document.createElement("h3");
homeSubtitle.innerText = "This good looking viking is our permanent guest, he eats here everyday!"
homeContainer.appendChild(homeSubtitle);

const homeImg = document.createElement('img');
homeImg.src = require('./asset/resource/odin.jpeg');
homeImg.setAttribute("height", 150);
homeImg.setAttribute("class", "homeImg");
homeContainer.appendChild(homeImg);

const homeDescription = document.createElement('div');
homeDescription.setAttribute("class","homeDescription");
homeDescription.innerHTML = `
    <p>At our restaurant, Odin is a regular, enjoying hearty meals of roasted meats and golden apples. The staff serve him with great reverence, and the ale never runs dry. Every meal he enjoys reminds us that even gods appreciate life’s simple joys.</p>
    <p>Locals often visit, hoping for a chance to see the Allfather and receive his blessing. It’s a place where both mortals and gods come together in shared abundance.</p>
`;
homeContainer.appendChild(homeDescription)

const style = document.createElement('style');
style.innerHTML = `

    h2 {
        color: #ffcc00; /* Yellowish color for title */
        font-size: 2rem; /* Larger size for the main title */
        margin-bottom: 10px;
        text-align: center
    }
    
    h3 {
        color: #ffd700; /* Lighter yellow for subtitle */
        font-size: 1.5rem; /* Subtitle size */
        margin-bottom: 15px;
        text-align: center
    }
    
    .homeImg {
        display: block; /* Ensures it's treated as a block element */
        margin-left: auto;
        margin-right: auto;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin-top: 20px;
    }

    
    .homeDescription {
        color: #e0e0e0; /* Light gray color for description text */
        font-size: 1.1rem;
        margin-top: 20px;
        line-height: 1.6;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10px;
    }    
`

homeContainer.appendChild(style);

export const homeContainerGeneratedModule = homeContainer;




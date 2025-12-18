import "./styles.css";

console.log("restaurant")

const divContent = document.getElementById("content");
const pDivContent = document.createElement("p");
pDivContent.innerText = "PARA ADDED WITH JS"
divContent.appendChild(pDivContent);

const imgDivContent = document.createElement("img");
imgDivContent.src = "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg";
imgDivContent.setAttribute("height", 50);
divContent.appendChild(imgDivContent);

async function loadMenuModule() {
    const { menuContainerGeneratedModule } = await import('./menumodule.js');
    const divContent = document.getElementById("content");
    divContent.innerHTML = '';
    divContent.appendChild(menuContainerGeneratedModule);
}

async function loadHomeModule() {
    const { homeContainerGeneratedModule } = await import('./homemodule.js');
    const divContent = document.getElementById("content");
    divContent.innerHTML = '';
    divContent.appendChild(homeContainerGeneratedModule);
}

async function loadAboutModule() {
    const { aboutContainerGeneratedModule } = await import('./aboutmodule.js');
    const divContent = document.getElementById("content");
    divContent.innerHTML = '';
    divContent.appendChild(aboutContainerGeneratedModule);
}

const navButtons = document.querySelectorAll('nav button');
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            handleButtonClick(button.id);
    });
});

function handleButtonClick(buttonId) {
    switch (buttonId) {
        case 'homeBtn':
            console.log("Home...");
            loadHomeModule();

            break;
        case 'menuBtn':
            console.log("Menu...");
            loadMenuModule();
            
            break;
        case 'aboutBtn':
            console.log("About...");
            loadAboutModule();
            
            break;
        default:
            console.log('Unknown button clicked');
            break;
    }
}

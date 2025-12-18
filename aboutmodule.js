const aboutContainer = document.createElement("div");

const aboutTitle = document.createElement("h2");
aboutTitle.innerText = "Welcome To The Best Restaurant In Town";
aboutContainer.appendChild(aboutTitle);

const aboutSubtitle = document.createElement("h3");
aboutSubtitle.innerText = "This good-looking Viking is our permanent guest, he eats here every day!";
aboutContainer.appendChild(aboutSubtitle);

const aboutImg = document.createElement('img');
aboutImg.src = require('./asset/resource/pablomu.jpeg');
aboutImg.setAttribute("height", 150);
aboutImg.setAttribute("class", "aboutImg");
aboutContainer.appendChild(aboutImg);

const aboutDescription = document.createElement('div');
aboutDescription.setAttribute("class", "aboutDescription");
aboutDescription.innerHTML = `
    <p>Hi, I'm Pablomu, the proud owner of the Best Restaurant in Town. It’s an honor to have Odin, the mighty Allfather, as our regular guest. He eats here every day, enjoying our hearty Viking-inspired meals that fuel both warriors and gods!</p>
    <p>At our restaurant, we’re all about good food, great company, and a little bit of Viking adventure. Every dish we serve is made with the same care and passion that Odin himself would appreciate.</p>
`;

aboutContainer.appendChild(aboutDescription);

const style = document.createElement('style');
style.innerHTML = `

    .aboutImg {
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 50%;
        border: 4px solid #000;
        margin-top: 20px;
        margin-bottom: 20px;
        box-shadow: 0 0 50px rgba(77, 255, 246, 0.3);
    }

    .aboutDescription {
        font-family: 'Arial', sans-serif;
        line-height: 1.6;
        color: #333;
        background-color: #f9f9f9;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(34, 201, 201, 0.1);
    }

    h2 {
        color:rgb(84, 169, 255);
        text-align: center;
    }

    h3 {
        color:rgb(86, 169, 252);
        text-align: center;
    }
`;

aboutContainer.appendChild(style);


export const aboutContainerGeneratedModule = aboutContainer;

const menuContainer = document.createElement("div");
const menuTitle = document.createElement("h2");
menuTitle.innerText = "Best Resutaurant In Town Menu"
menuContainer.appendChild(menuTitle);
const menuSubtitle = document.createElement("h3");
menuSubtitle.innerText = "Gourmet Dining Experience - A Viking Feast for the Gods"
menuContainer.appendChild(menuSubtitle);

const sweetsDrinksSection = (
	{title: 'Norse Sweets & Drinks',
	items: [
		{ Name: "Cake", Description: "chocolate cake", Price: "16,50", ImgUrl: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"},
		{ Name: "Odin’s Drug", Description: "honey Beer", Price: "9,97", ImgUrl: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"}
	]
	}
);

const extraSection = (
	{title: 'special extra list',
	items: [
		{ Name: "extra", Description: "super extra special thing", Price: "99,99", ImgUrl: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"},
	]
	}
);


function createMenuSection(sectionToAdd) {
	const menuSection = document.createElement('div');
	menuSection.setAttribute("class", "menuSection");
  
	const sectionTitle = document.createElement('span');
	sectionTitle.setAttribute("class", "sectionTitle");
	sectionTitle.textContent = sectionToAdd.title;
	menuSection.appendChild(sectionTitle);
  
	let itemsList = document.createElement('ul');
	menuSection.appendChild(itemsList);
  
	sectionToAdd.items.forEach(item => {
	  const menuItem = document.createElement('li');
	  menuItem.setAttribute("class", "menuItem");
  
	  const itemTextInfo = document.createElement('div');
	  itemTextInfo.setAttribute("class", "itemTextInfo");
  
	  const itemTitle = document.createElement('span');
	  itemTitle.setAttribute("class", "itemTitle");
	  itemTitle.textContent = item.Name;
	  itemTextInfo.appendChild(itemTitle);
  
	  const itemDescription = document.createElement('p');
	  itemDescription.setAttribute("class", "itemDescription");
	  itemDescription.textContent = item.Description;
	  itemTextInfo.appendChild(itemDescription);
  
	  menuItem.appendChild(itemTextInfo); 
  
	  const itemImg = document.createElement('img');
	  itemImg.src = item.ImgUrl;
	  itemImg.setAttribute("height", 60);
	  itemImg.setAttribute("class", "itemImg");
	  menuItem.appendChild(itemImg);
  
	  // Price
	  const itemPrice = document.createElement('p');
	  itemPrice.setAttribute("class", "itemPrice");
	  itemPrice.textContent = item.Price;
	  menuItem.appendChild(itemPrice);
  
	  itemsList.appendChild(menuItem);
	});
  
	return menuSection;
  };
//let menuSection = createMenuSection(sweetsDrinksSection)
menuContainer.appendChild(createMenuSection(sweetsDrinksSection));
menuContainer.appendChild(createMenuSection(extraSection));



const style = document.createElement('style');
style.innerHTML = `

	.menuItem {
	  	display: flex;
	  	align-items: flex-start; /* Aligns all children (title, description, image) at the top */
	  	padding: 10px 0;
	  	border-bottom: 1px solid #ddd; /* Optional, for separating items */
	  	justify-content: space-between; /* Space between elements */
	}
  
  
	.itemTextInfo {
	  	display: flex;
	  	flex-direction: column; /* Stack title and description vertically */
	  	margin-right: 10px; /* Space between content and image */
	}
  
	.itemTitle {
	 	font-weight: bold;
	 	margin-bottom: 5px; /* Space between title and description */
	}
  
	.itemDescription {
	 	font-style: italic;
	  	color: #555;
	}
	
	.itemImg {
	   	display: block;
		margin-left: auto;
		margin-right: 5px;
		border: 2px solid #000;
		margin-top: 20px;
		margin-bottom: 20px;
	}

	.itemPrice {
		font-size: 1.2em;
		margin-top: auto;
		margin-left: 10px;
		color: green;
		width: 50px;
	}

	.menuSection {
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

menuContainer.appendChild(style);



export const menuContainerGeneratedModule = menuContainer;




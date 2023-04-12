const menuSection = document.getElementById('menu');
// menuSection.innerHTML = "Javascript!" --> changes text 

function displayMenuItems(menuItems) {
  menuSection.innerHTML = ''; //clears what's inside (Loading Menu...) so we can input data(menu) from API
  menuItems.map(dish => {
    const div = document.createElement('div');
    const title = document.createElement('h2'); //create h2
    const titleText = document.createTextNode(dish.title); //create title text
    title.appendChild(titleText);// sticks title text of whatever dish it's looping on inside h2
    div.appendChild(title); //stick the h2 into the div
    const description = document.createElement('p'); //create p
    const descriptionText = document.createTextNode(dish.description); //create the text for inside the p
    description.appendChild(descriptionText); //puts text inside p
    div.appendChild(description); 
    menuSection.appendChild(div)
  })
}

async function getMenuItems () {
  const response = await fetch('https://codice-boca.web.app/menu') //always has 2 awaits
  const menuItems = await response.json(); //waits for all of the 'chunks' and puts them in a json file
  displayMenuItems(menuItems);
}
getMenuItems()
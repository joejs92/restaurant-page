import Icon from './krabbypatty.jpg';

function component() {
    const element = document.createElement('div');
    
    const title = document.createElement('h1');
    title.textContent = "Menu";
    element.appendChild(title);

    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    const krabbyPatty = document.createElement('h3');
    krabbyPatty.textContent = "Krabby Patty";
    element.appendChild(krabbyPatty);

    const description = document.createElement('p');
    description.textContent = "A scrumptious patty with a secret ingredient.";
    element.appendChild(description);

    const price = document.createElement('p');
    price.textContent = "$4.99";
    element.appendChild(price);

    return element;
  }
  
document.body.appendChild(component());
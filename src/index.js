import Icon from './image.jpeg';

function component() {
    const element = document.createElement('div');
    
    const title = document.createElement('h1');
    title.textContent = "THE KRUSTY KRAB";
    element.appendChild(title);

    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    const someText = document.createElement('p');
    someText.textContent = "The Krusty Krab is the crustiest place on Earth. And remember, the Krusty Krab pizza is the pizza for you and me.";
    element.appendChild(someText);

    return element;
  }

const container = document.querySelector('#content');  
container.appendChild(component());
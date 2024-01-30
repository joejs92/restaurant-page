import Icon from './krabbs.png';

function component() {
    const element = document.createElement('div');
    
    const title = document.createElement('h1');
    title.textContent = "CONTACT US";
    element.appendChild(title);

    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    const name = document.createElement('p');
    name.textContent = "Eugene Krabbs";
    element.appendChild(name);

    const phone = document.createElement('p');
    phone.textContent = "Phone: (123)-555-3226";
    element.appendChild(phone);

    const email = document.createElement('p');
    email.textContent = "Email: ekrabbs@krustykrab.com";
    element.appendChild(email);

    return element;
  }
  
document.body.appendChild(component());
import "./Header.css"
import Data from "../Data";

const printHeader = () => {
    const { name, address, avatar, aboutMe, gitHub, linkedIn } = Data;
  
    const header = document.createElement('header');
  
    const img = document.createElement('img');
    img.src = avatar;
    img.alt = 'Avatar';
    img.classList.add('avatar')
  
    const myName = document.createElement('h1');
    myName.textContent = name;
    myName.classList.add('name')
  
    const myAdress = document.createElement('p');
    myAdress.textContent = address;

    const myGitHub = document.createElement('a');
    myGitHub.textContent = 'GitHub';
    myGitHub.href = gitHub;
    myGitHub.setAttribute('target', '_blank');

    const myLinkedIn = document.createElement('a');
    myLinkedIn.textContent = 'LinkedIn';
    myLinkedIn.href = linkedIn;
    myLinkedIn.setAttribute('target', '_blank');

    const myAbout = document.createElement('p');
    myAbout.textContent = aboutMe;

    header.appendChild(img);
    header.appendChild(myName);
    header.appendChild(myAdress);
    header.appendChild(myGitHub);
    header.appendChild(myLinkedIn);
    header.appendChild(myAbout);
  
    header.classList.add('header');
  
    return header;
  };
  
  export default printHeader;
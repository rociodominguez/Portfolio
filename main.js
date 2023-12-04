import "./style.css"
import printHeader from './components/Header/Header';
import printProjects from './components/Projects/Projects';
import printContactForm from './components/Contact/Contact';
import handleFormSubmit from './components/Contact/Form';
import printNavbar from "./components/Navbar/Navbar";
import infoWrapper from "./components/Info/Info";

const appContainer = document.getElementById('app');

appContainer.appendChild(printNavbar());
appContainer.appendChild(printHeader());
appContainer.appendChild(printProjects());
appContainer.appendChild(infoWrapper())
appContainer.appendChild(printContactForm());
appContainer.appendChild(handleFormSubmit());
import "./style.css"
import printHeader from './components/Header/Header';
import printProjects from './components/Projects/Projects';
import printJobs from './components/Work/Work';
import printEducation from './components/Education/Education';
import printContactForm from './components/Contact/Contact';
import handleFormSubmit from './components/Contact/Form';
import printNavbar from "./components/Navbar/Navbar";

const appContainer = document.getElementById('app');

appContainer.appendChild(printNavbar());
appContainer.appendChild(printHeader());
appContainer.appendChild(printProjects());
appContainer.appendChild(printJobs())
appContainer.appendChild(printEducation());
appContainer.appendChild(printContactForm());
appContainer.appendChild(handleFormSubmit());
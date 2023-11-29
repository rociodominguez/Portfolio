import "./Education.css";
import Data from "../Data";

const printEducation = () => {
    const educationContainer = document.createElement('div');
    educationContainer.classList.add('education-container');
    educationContainer.setAttribute('id', 'education');

    const educationTitle = document.createElement('h2');
    educationTitle.textContent = 'Formación académica';
    educationContainer.appendChild(educationTitle);

    Data.education.forEach((certificate) => {
        const educationElement = document.createElement('div');
        educationElement.classList.add('certificate');

        const educationDegree = document.createElement('h3');
        educationDegree.textContent = certificate.degree;

        const educationUniversity = document.createElement('p');
        educationUniversity.textContent = certificate.university;

        const educationYear = document.createElement('p');
        educationYear.textContent = certificate.graduationYear;

        educationElement.appendChild(educationDegree);
        educationElement.appendChild(educationUniversity);
        educationElement.appendChild(educationYear);
        educationContainer.appendChild(educationElement);
    });

    return educationContainer;
}

export default printEducation;
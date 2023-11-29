import "./Work.css";
import Data from "../Data";

const printJobs = () => {
    const jobsContainer = document.createElement('div');
    jobsContainer.classList.add('work-container');

    const jobsTitle = document.createElement('h2');
    jobsTitle.textContent = 'Experiencia laboral';
    jobsContainer.appendChild(jobsTitle);

    Data.workExperience.forEach((job) => {
        const jobElement = document.createElement('div');
        jobElement.classList.add('job');
        jobElement.setAttribute('id', 'jobs');

        const jobsPosition = document.createElement('h3');
        jobsPosition.textContent = job.position;

        const jobsCompany = document.createElement('p');
        jobsCompany.textContent = job.company;

        const jobsStartDate = document.createElement('p');
        jobsStartDate.textContent = job.startDate;

        const jobsEndDate = document.createElement('p');
        jobsEndDate.textContent = job.endDate;

        const jobsDesciption = document.createElement('p');
        jobsDesciption.textContent = job.description;

        jobElement.appendChild(jobsPosition);
        jobElement.appendChild(jobsCompany);
        jobElement.appendChild(jobsStartDate);
        jobElement.appendChild(jobsEndDate);
        jobElement.appendChild(jobsDesciption);
        jobsContainer.appendChild(jobElement);
    });

    return jobsContainer;
}

export default printJobs;
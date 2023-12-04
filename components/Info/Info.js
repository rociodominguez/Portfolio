import printJobs from "../Work/Work";
import printEducation from "../Education/Education";
import "./Info.css"

const infoWrapper = () => {
    const divInfo = document.createElement('div');
    divInfo.classList.add('div-info');
    divInfo.appendChild(printJobs())
divInfo.appendChild(printEducation());

return divInfo
}

export default infoWrapper;
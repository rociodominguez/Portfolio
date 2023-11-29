import "./Contact.css"

const printContactForm = () => {
    const form = document.createElement('form');
    form.id = 'form';
  
    const fields = [
      { label: 'Nombre', type: 'text' },
      { label: 'Email', type: 'text' },
      { label: 'Mensaje', type: 'text' },
    ];

    const contactTitle = document.createElement('h2');
    contactTitle.textContent = '¡Hablemos!';
    form.appendChild(contactTitle);
  
    fields.forEach((field) => {
      const fieldDiv = document.createElement('div');
      fieldDiv.classList.add('field');
  
      const label = document.createElement('label');
      label.setAttribute('for', field.label);
      label.textContent = field.label;
  
      const input = document.createElement('input');
      input.setAttribute('type', field.type);
      input.setAttribute('name', field.label);
      input.setAttribute('id', field.label);
  
      fieldDiv.appendChild(label);
      fieldDiv.appendChild(input);
  
      form.appendChild(fieldDiv);
    });
  
    const submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('id', 'button');
    submitButton.setAttribute('value', 'Enviar');
  
    form.appendChild(submitButton);
  
    return form;
  };
  
  export default printContactForm;
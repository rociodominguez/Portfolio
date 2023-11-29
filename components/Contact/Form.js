export default function handleFormSubmit() {
  const btn = document.getElementById('button');
  const form = document.getElementById('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_18vj25i';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        alert('Sent!');
      })
      .catch((err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  });
}
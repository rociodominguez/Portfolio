import "./Navbar.css";

const createNavbar = () => {
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');

  const items = [
    { title: 'Proyectos', href: '#projects' },
    { title: 'Experiencia', href: '#jobs' },
    { title: 'Formación', href: '#education' },
    { title: 'Contacto', href: '#form' }
  ];

  items.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = item.title;
    a.href = item.href;

    a.addEventListener('click', () => {
      ul.classList.remove('show');
    });

    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);

  const toggleButton = document.createElement('button');
  toggleButton.classList.add('toggle-button', 'right');

  const img = document.createElement('img');
  img.src = "https://res.cloudinary.com/dfufuprrn/image/upload/v1701367717/toggle_ulmx6y.png";
  img.classList.add('my-toggle');
  toggleButton.appendChild(img);

  toggleButton.addEventListener('click', () => {
    ul.classList.toggle('show');
  });

  nav.appendChild(toggleButton);

  return nav;
};

export default createNavbar;
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
    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  return nav;
};

export default createNavbar;

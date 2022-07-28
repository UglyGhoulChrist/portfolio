const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}


// Получаем объекты ссылок меню и объекты секций
const linkHome = document.getElementById('link_home');
const linkAbout = document.getElementById('link_about');
const linkProject = document.getElementById('link_project');
const linkFooter = document.getElementById('link_footer');

const home = document.getElementById('home');
const about = document.getElementById('about');
const project = document.getElementById('project');
const contact = document.getElementById('contact');
const footer = document.getElementById('footer');

window.addEventListener('scroll', myScroll);

function myScroll() {
  let windowTop = window.pageYOffset;

  let homeHeight = home.scrollHeight;
  let aboutHeight = about.scrollHeight;
  let projectHeight = project.scrollHeight;
  let contactHeight = contact.scrollHeight;

  if (windowTop < homeHeight) {
    linkHome.classList.add('link');
  }
  else {
    linkHome.classList.remove('link');
  }

  if (homeHeight - 5 < windowTop && windowTop < homeHeight + aboutHeight -5) {
    linkAbout.classList.add('link');
  }
  else {
    linkAbout.classList.remove('link');
  }
  if (homeHeight + aboutHeight -5 < windowTop && windowTop < homeHeight + aboutHeight + projectHeight -5) {
    linkProject.classList.add('link');
  }
  else {
    linkProject.classList.remove('link');
  }
  if (homeHeight + aboutHeight + projectHeight -5 < windowTop && windowTop < homeHeight + aboutHeight + projectHeight + contactHeight -5) {
    linkFooter.classList.add('link');
  }
  else {
    linkFooter.classList.remove('link');
  }
}

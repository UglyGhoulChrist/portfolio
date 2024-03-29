window.addEventListener("load", () => {

  // Отображение страницы после полной загрузки
  const body = document.body;
  body.style.opacity = 1;

  // AOS
  AOS.init();

  // Меню - гамбургер
  const hamb = document.querySelector("#hamb");
  const popup = document.querySelector("#popup");
  const menu = document.querySelector("#menu").cloneNode(1);
  // const body = document.body;

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

  // Изменение цвета ссылок меню
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

  linkHome.classList.add('link');

  window.addEventListener('scroll', myScroll);

  function myScroll() {
    if (home.getBoundingClientRect().top <= 0 && -home.getBoundingClientRect().top < home.getBoundingClientRect()['height']) {
      linkHome.classList.add('link');
    }
    else {
      linkHome.classList.remove('link');
    }
    if (about.getBoundingClientRect().top <= 0 && -about.getBoundingClientRect().top < about.getBoundingClientRect()['height']) {
      linkAbout.classList.add('link');
    }
    else {
      linkAbout.classList.remove('link');
    }
    if (project.getBoundingClientRect().top <= 0 && -project.getBoundingClientRect().top < project.getBoundingClientRect()['height']) {
      linkProject.classList.add('link');
    }
    else {
      linkProject.classList.remove('link');
    }
    if (contact.getBoundingClientRect().top <= 0 && -contact.getBoundingClientRect().top < contact.getBoundingClientRect()['height']) {
      linkFooter.classList.add('link');
    }
    else {
      linkFooter.classList.remove('link');
    }
  }

  // Отправка формы в консоль
  // const isCheckboxOrRadio = type => ['checkbox', 'radio'].includes(type);
  // const { form } = document.forms;
  // function getFormValue(event) {
  //   event.preventDefault();
  //   const data = {};
  //   for (let field of form) {
  //     const { name } = field;
  //     if (name) {
  //       const { type, checked, value } = field;
  //       data[name] = isCheckboxOrRadio(type) ? checked : value;
  //     }
  //   }
  //   let today = new Date();
  //   data['send'] = today.toLocaleString();
  //   console.log(data);
  // }
  // form.addEventListener('submit', getFormValue);


  // Повтор введённого кода в блоке с JavaScript
  // const myForm = document.forms.form;
  // const formName = myForm.name;
  // const formEmail = myForm.email;
  // const formMessage = myForm.message;

  // resultName = document.getElementById('resultName');
  // resultName.textContent = formName.placeholder;
  // resultEmail = document.getElementById('resultEmail');
  // resultEmail.textContent = formEmail.placeholder;
  // resultMessage = document.getElementById('resultMessage');
  // resultMessage.textContent = formMessage.placeholder;

  // formName.oninput = function () {
  //   resultName.textContent = formName.value;
  // };
  // formEmail.oninput = function () {
  //   resultEmail.textContent = formEmail.value;
  // };
  // formMessage.oninput = function () {
  //   resultMessage.textContent = formMessage.value;
  // };

  // Попап при нажатии на форму всплывает один раз
  const myForm = document.forms.form;
  const contactPopup = document.querySelector('.contact-popup');

  // При клике на форму всплывает попап и удаляется обработчик события 
  myForm.addEventListener('click', 
    toggleClass, { "once": true, }
    // e.preventDefault();
  );
  // При клике на попап убирается попап и удаляется обработчик события 
  contactPopup.addEventListener('click', 
    toggleClass, { "once": true, }
    // e.preventDefault();
  );

  function toggleClass() {
    contactPopup.classList.toggle('_active-contact-popup');
  };
});

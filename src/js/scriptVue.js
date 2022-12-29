Vue.createApp({
  data() {
    return {
      skillList: [
        {
          name: "Html",
          img: "img/about/html.svg",
          description: "Семантическая разметка кода",
        },
        {
          name: "Css",
          img: "img/about/css.svg",
          description: "Стилизация элементов на странице",
        },
        {
          name: "Sass",
          img: "img/about/sass.svg",
          description: "Быстрое написание стилей",
        },
        {
          name: "Figma",
          img: "img/about/figma.svg",
          description: "Верстка сайта по макету Figma",
        },
        {
          name: "Python",
          img: "img/about/python.svg",
          description: "Язык программирования общего назначения",
        },
        {
          name: "Django",
          img: "img/about/django.svg",
          description: "Фреймворк для веб-приложений на языке Python",
        },
        {
          name: "JavaScript",
          img: "img/about/js.svg",
          description: "Язык программирования для WEB и Mobile",
        },
        {
          name: "React",
          img: "img/about/react.svg",
          description: "JS-библиотека для разработки UI",
        },
      ],
    };
  },
  methods: {},
}).mount("#skill-list");

Vue.createApp({
  data() {
    return {
      aboutText: [
        "Мне 40 лет. Женат, дети.",
        "",
        "Осенью 2021 сильно увлёкся сферой It. Проходил курсы подготовки онлайн университетов, смотрел обучающие видео из интернета, создавал свои небольшие проекты.",
        "Python понравился за простоту написания кода и огромную мощь языка; HTML, CSS и JS - за сразу видимый результат на экране.",
        "Сейчас изучаю Django и React.",
        "Так-же ради интереса пробовал писать программы для Andriod на Kotlin и для Windows на C#, но не зацепило.",
        "",
      ],
    };
  },
  methods: {},
}).mount("#about-text");

// Повтор введённого кода в блоке с JavaScript
Vue.createApp({
  data() {
    return {
      inputName: "",
      inputEmail: "",
      inputMessage: "",
      newDate: new Date().toLocaleDateString(),
    };
  },
}).mount("#contact");

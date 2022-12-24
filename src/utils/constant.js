import avatar from '../images/avatar.jpg';
import jsIcon from '../images/icons8-javascript.svg';
import htmlIcon from '../images/icons8-html-5.svg';
import reactIcon from '../images/icons8-react-native.svg';
import gitIcon from '../images/icons8-git.svg';
import project1Image from '../images/admin-panel.png';
import project2Image from '../images/BB.png';
import telegramIcon from '../images/icons8-telegram-app.svg';
import phoneIcon from '../images/icons8-phone.svg';
import mailIcon from '../images/icons8-mail.svg';

export const AVATAR = avatar;
export const NAME = 'Антон';
export const SURNAME = 'Татаринов';
export const ROLE = 'Frontend-Разработчик (JavaScript/React)';
export const SOCIAL_LINK_GIT = 'https://github.com/Avanire/';
export const SOCIAL_LINK_MAIL = 'mailto:tosha-t@mail.ru';

export const CONTACTS_HEADER = [
    {
        "id": 1,
        "heading": "Город",
        "value": "Омск"
    },
    {
        "id": 2,
        "heading": "Телефон",
        "value": "+7 (965) 978 78 78"
    },
    {
        "id": 3,
        "heading": "Сайт",
        "value": "site.ru"
    },
    {
        "id": 4,
        "heading": "Email",
        "value": "drtony@yandex.ru"
    }
];

export const SKILLS = [
    {
        "id": 1,
        "icon": jsIcon,
        "name": "JavaScript",
        "content": "Понимаю основы JavaScript, стандартов ES5/ES6, браузерных событий и DOM. Написание проектов на JS-Фреймоврке Vue и с помощью библиотеки React. Опыт использования приципов ООП и функционального программирования в собственных проектах. Понимание принципов замыкания, прототипного наследования, асинхронного кода. Есть опыт написания Unit-тестов. Сдан тест «Язык JavaScript» на сайте-учебнике learn.javascript.ru на 95%. Результат оценки навыка JavaScript на LinkedIn - топ 30% из 1.4M человек, кто прошел этот тест. Активно пишу на JS около 1 года.",
        "progress": 75
    },
    {
        "id": 2,
        "icon": htmlIcon,
        "name": "HTML / CSS",
        "content": "Более 1 года работаю с HTML и CSS. Соблюдаю принципы адаптивной и pixel-perfect верстки. Проекты написаны с использованием Flex. Есть опыт работы с Grid, BootStrap, CSS-Modules, препроцессорами CSS (SASS, PostCSS). Во время переобучения в ПАО Сбербанк на Frontend-разработчика в течение 3-х месяцев проводил код-ревью проектов других студентов по HTML/CSS на GitHub. Результат оценки навыка CSS на LinkedIn - топ 15% из 1.2M человек, кто прошел этот тест. ",
        "progress": 85
    },
    {
        "id": 3,
        "icon": reactIcon,
        "name": "React",
        "content": "Опыт написания проектов на React.js с использованием Redux. Использовал в проектах классовые, функциональные компоненты и хуки. Использование JSX, написание редюсеров и селекторов для Redux. Работа с состоянием и props компонентов. В собственных проектах на React реализовывал функционал запросов к серверу (get/post), сортировки, фильтрации, пагинации, CRUD и смены темы. При написании компонентов придерживаюсь принципа «минимального количества компонентов с собственным состоянием» и «максимального количества компонентов, получающих данных только через props». ",
        "progress": 60
    },
    {
        "id": 4,
        "icon": gitIcon,
        "name": "Git",
        "content": "Начиная с 11 января 2021 года размещаю весь код и проекты на GitHub. Загрузка кода происходила исключительно через команды git. В работе использую ОС Linux. Во время переобучения на frontend-разработчика все работы и код-ревью проходили через GitHub. Для каждого задания создавалсь отдельная ветка с последующим pull-request. Понимаю и использую основные команды git. Умею настраивать алиасы для необходимых команд git.",
        "progress": 70
    }
];

export const PROJECT = [
    {
        "id": 1,
        "name": 'Ecom admin-panel',
        "description": 'Панель Администратора интернет-магазина, выполненная с помощью React + Redux. В ходе выполнения реализованы все основные потребности для аналогичных проектов: вывод заказа в список, пагинация, сортировка, фильтрация, модальная форма и смена темы. Возможно редактирование заказа, а также групповое изменение и удаление заказов. ',
        "linkRepository": 'https://github.com/dpolevodin/admin-panel-app',
        "image": project1Image,
        "linkProject": 'https://dpolevodin.github.io/admin-panel-deploy/',
        "techStackIcons": [reactIcon, htmlIcon, gitIcon]
    },
    {
        "id": 2,
        "name": 'Breaking Bad Wiki',
        "description": 'Wiki-приложение, выполненное на React по мотивам сериала «Во все тяжкие». Проект написан на классовых и функциональных компонентах. Для получения данных используется открытый API (https://breakingbadapi.com/). ',
        "linkRepository": 'https://github.com/dpolevodin/breaking_bad_wiki',
        "image": project2Image,
        "linkProject": 'https://dpolevodin.github.io/breaking_bad_wiki_deploy/',
        "techStackIcons": [reactIcon, htmlIcon, gitIcon]
    }
];

export const CONTACTS_FOOTER = [
    {
        "id": 1,
        "name": 't.me/skir000',
        "link": 'https://t.me/skir000',
        "icon": telegramIcon
    },
    {
        "id": 2,
        "name": '+7 965 978 7878',
        "link": 'tel:79659787878',
        "icon": phoneIcon
    },
    {
        "id": 3,
        "name": 'drtony@yandex.ru',
        "link": 'mailto:drtony@yandex.ru',
        "icon": mailIcon
    }
];
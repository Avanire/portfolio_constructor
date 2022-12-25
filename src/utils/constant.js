import avatar from '../images/avatar.jpg';
import jsIcon from '../images/icons8-javascript.svg';
import htmlIcon from '../images/icons8-html-5.svg';
import reactIcon from '../images/icons8-react-native.svg';
import gitIcon from '../images/icons8-git.svg';
import project1Image from '../images/Tenzenis.png';
import project2Image from '../images/ReactBurger.png';
import project3Image from '../images/ReactPizza.png';
import project4Image from '../images/PortfolioConstructor.png';
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
        "value": "Омск",
        "link": ''
    },
    {
        "id": 2,
        "heading": "Телефон",
        "value": "+7 (965) 978 78 78",
        "link": 'tel:79659787878'
    },
    {
        "id": 3,
        "heading": "Сайт",
        "value": "avanire.github.io/portfolio",
        "link": 'https://avanire.github.io/portfolio_constructor/'
    },
    {
        "id": 4,
        "heading": "Email",
        "value": "drtony@yandex.ru",
        "link": 'mailto:drtony@yandex.ru'
    }
];

export const SKILLS = [
    {
        "id": 1,
        "icon": jsIcon,
        "name": "JavaScript",
        "content": "Понимаю основы JavaScript, стандартов ES6, браузерных событий и DOM. Написание проектов с помощью библиотеки React. Опыт использования приципов ООП и функционального программирования в собственных проектах. Понимание принципов замыкания, асинхронного кода. Активно пишу на JS около 1 года.",
        "progress": 75
    },
    {
        "id": 2,
        "icon": htmlIcon,
        "name": "HTML / CSS",
        "content": "Более 4 лет работаю с HTML и CSS. Соблюдаю принципы адаптивной и pixel-perfect верстки. Проекты написаны с использованием Flex. Есть опыт работы с Grid, BootStrap, CSS-Modules, препроцессорами CSS (SASS). Сверстал большое количество адаптивных сайтов. При работе с Личным кабинетов решал не простые задачи по верстке.",
        "progress": 85
    },
    {
        "id": 3,
        "icon": reactIcon,
        "name": "React",
        "content": "Опыт написания проектов на React.js с использованием Redux Toolkit. Использовал в проектах функциональные компоненты и хуки. Использование JSX, написание редюсеров и селекторов для Redux. Работа с состоянием и props компонентов. В собственных проектах на React реализовывал функционал запросов к серверу (get/post), управления состоянием с помощью Redux Toolkit, роутинг и разграничение доступа в приложении (защищенные маршруты), WebSocket'ы.",
        "progress": 60
    },
    {
        "id": 4,
        "icon": gitIcon,
        "name": "Git",
        "content": "Размещаю весь код и проекты на GitHub. Загрузка кода происходила исключительно через команды git. Во время обучения на frontend-разработчика все работы и код-ревью проходили через GitHub. Для каждого задания создавалсь отдельная ветка с последующим pull-request. Понимаю и использую основные команды git.",
        "progress": 70
    }
];

export const PROJECT = [
    {
        "id": 1,
        "name": 'Tenzies Game',
        "description": 'Простая игра в кости, созданная как личный проект в процессе обучения на scrimba.com',
        "linkRepository": 'https://github.com/Avanire/Tenzies-Game',
        "image": project1Image,
        "linkProject": 'https://avanire.github.io/Tenzies-Game/',
        "techStackIcons": [reactIcon, htmlIcon, gitIcon]
    },
    {
        "id": 2,
        "name": 'Приложение бургерной',
        "description": 'Проект бургерной с использованием технологий Redux Toolkit/Effector, Роутингом и разграничением доступа, реализован функционал Drag\'n\'Drop',
        "linkRepository": 'https://github.com/Avanire/react-burger',
        "image": project2Image,
        "linkProject": 'https://avanire.github.io/react-burger/',
        "techStackIcons": [reactIcon, htmlIcon, gitIcon]
    },
    {
        "id": 3,
        "name": 'Конструктор портфолио',
        "description": 'За основу взят дизайн существующего портфолио, переработаны и упакованы в компоненты React. Все настройки контента делаются из 1 файла, приложение способно адаптироваться под новых пользователей и масштабироваться.',
        "linkRepository": 'https://github.com/Avanire/portfolio_constructor',
        "image": project4Image,
        "linkProject": 'https://avanire.github.io/portfolio_constructor/',
        "techStackIcons": [reactIcon, htmlIcon, gitIcon]
    },
    {
        "id": 4,
        "name": 'Интернет-магазин',
        "description": 'Интернет-магазин с корзиной, пагинацией, сортировокой с использованием Redux Toolkit и mockapi в качестве API',
        "linkRepository": 'https://github.com/Avanire/pizza',
        "image": project3Image,
        "linkProject": 'https://avanire.github.io/pizza/',
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

export const ABOUT_TEXT = [
    `В IT сферу пришел в 2015 году в роли SEO специалиста, где начал постепенно знакомится со сферой разработки и программирования. Когда стал руководителем отдела SEO, начал понимать, что сфера разработки меня привлекает больше, чем маркетинга.`,
    `Для первого знакомства с разработкой выбрал язык Java, курсы в JavaRush, бесплатное обучение в местной компании и платные курсы. Я разобрался с методологией ООП и основами языка, что позволило быстрее осваивать другие языки программирования. В итоге я стал разработчиком в компании, где работал, на стеке PHP/JS. В работу входило создание новых сайтов на популярных CMS и поддержка клиентских сайтов.`,
    `В процессе я стал изучать фреймворк Laravel и переключился на внутренний проект "Личный кабинет для клиентов", где осуществлял всю разработку и front и backend. Используемый стек Laravel/Jquery.`,
    `В период разработки интерфейса для Личного кабинета, я стал понимать, насколько отстает Jquery от современных библиотек и фреймворков. Начал изучать возможности современного стека frontend'а и выбрал для себя библиотеку React. Начал изучение с бесплатных курсов на Youtube и подкрепил все 3-х месячным курсом Яндекс Практикума, где разобрался с нюансами, заполнил пробелы и изучил более подробно Redux Toolkit/Effector/Routing/WebSocket и язык TypeScript.`,
    `При создании проектной работы, понял, что создавать удобный и отзывчивый интерфейс мне нравится больше, чем делать backend, поэтому я выбрал как основную специализацию Frontend на библиотеке React.`
];
registerTest({
    "id": "html-media-links",
    "category": "html",
    "title": "HTML: Медиа, ссылки, списки",
    "description": "Изображения, аудио, видео, ссылки и списки.",
    "questions": [
        {
            "id": 1,
            "type": "single",
            "question": "Какой тег вставляет изображение?",
            "options": ["<image>", "<img>", "<pic>", "<figure>"],
            "correct": [1],
            "explanation": "<img> — изображение. Атрибут src задаёт путь."
        },
        {
            "id": 2,
            "type": "single",
            "question": "Какой тег создаёт клиентскую карту изображения?",
            "options": ["<area>", "<map>", "<imagemap>", "<coords>"],
            "correct": [1],
            "explanation": "<map> — карта изображения, внутри — <area> для областей."
        },
        {
            "id": 3,
            "type": "single",
            "question": "Какой тег задаёт область внутри карты изображения?",
            "options": ["<area>", "<map>", "<zone>", "<region>"],
            "correct": [0],
            "explanation": "<area> — кликабельная область внутри <map>."
        },
        {
            "id": 4,
            "type": "single",
            "question": "Какой тег используется для рисования графики через скрипты?",
            "options": ["<svg>", "<canvas>", "<draw>", "<paint>"],
            "correct": [1],
            "explanation": "<canvas> — растровый холст, рисуется через JS."
        },
        {
            "id": 5,
            "type": "single",
            "question": "Какой тег задаёт подпись к элементу <figure>?",
            "options": ["<caption>", "<figcaption>", "<label>", "<legend>"],
            "correct": [1],
            "explanation": "<figcaption> — подпись к <figure>."
        },
        {
            "id": 6,
            "type": "single",
            "question": "Какой тег задаёт автономное содержимое (иллюстрацию, схему)?",
            "options": ["<figure>", "<aside>", "<image>", "<caption>"],
            "correct": [0],
            "explanation": "<figure> — автономный блок с иллюстрацией, схемой, кодом."
        },
        {
            "id": 7,
            "type": "single",
            "question": "Какой тег задаёт контейнер для нескольких ресурсов изображения (адаптивность)?",
            "options": ["<picture>", "<img>", "<source>", "<media>"],
            "correct": [0],
            "explanation": "<picture> — контейнер для адаптивных изображений."
        },
        {
            "id": 8,
            "type": "single",
            "question": "Какой тег задаёт контейнер для векторной графики?",
            "options": ["<canvas>", "<svg>", "<vector>", "<graphic>"],
            "correct": [1],
            "explanation": "<svg> — Scalable Vector Graphics."
        },
        {
            "id": 9,
            "type": "single",
            "question": "Какой тег вставляет звуковой контент?",
            "options": ["<sound>", "<audio>", "<music>", "<media>"],
            "correct": [1],
            "explanation": "<audio> — звуковой контент."
        },
        {
            "id": 10,
            "type": "single",
            "question": "Какой тег задаёт несколько источников медиафайла?",
            "options": ["<src>", "<source>", "<media>", "<track>"],
            "correct": [1],
            "explanation": "<source> — альтернативные источники для <video>, <audio>, <picture>."
        },
        {
            "id": 11,
            "type": "single",
            "question": "Какой тег задаёт текстовые дорожки (субтитры) для медиа?",
            "options": ["<subtitle>", "<track>", "<caption>", "<text>"],
            "correct": [1],
            "explanation": "<track> — субтитры и другие текстовые дорожки."
        },
        {
            "id": 12,
            "type": "single",
            "question": "Какой тег вставляет видео или фильм?",
            "options": ["<movie>", "<video>", "<media>", "<player>"],
            "correct": [1],
            "explanation": "<video> — видеоконтент."
        },
        {
            "id": 13,
            "type": "single",
            "question": "Какой тег создаёт гиперссылку?",
            "options": ["<link>", "<a>", "<href>", "<url>"],
            "correct": [1],
            "explanation": "<a> — anchor (гиперссылка)."
        },
        {
            "id": 14,
            "type": "single",
            "question": "Какой тег связывает документ с внешним ресурсом (например, CSS-файлом)?",
            "options": ["<a>", "<link>", "<style>", "<src>"],
            "correct": [1],
            "explanation": "<link> — подключение внешних ресурсов."
        },
        {
            "id": 15,
            "type": "single",
            "question": "Какой тег определяет блок навигации?",
            "options": ["<nav>", "<menu>", "<links>", "<navbar>"],
            "correct": [0],
            "explanation": "<nav> — семантический блок навигации."
        },
        {
            "id": 16,
            "type": "single",
            "question": "Какой тег создаёт неупорядоченный список?",
            "options": ["<ol>", "<ul>", "<dl>", "<list>"],
            "correct": [1],
            "explanation": "<ul> — unordered list (маркированный)."
        },
        {
            "id": 17,
            "type": "single",
            "question": "Какой тег создаёт упорядоченный (нумерованный) список?",
            "options": ["<ul>", "<ol>", "<nl>", "<dl>"],
            "correct": [1],
            "explanation": "<ol> — ordered list (нумерованный)."
        },
        {
            "id": 18,
            "type": "single",
            "question": "Какой тег задаёт элемент списка?",
            "options": ["<li>", "<item>", "<el>", "<point>"],
            "correct": [0],
            "explanation": "<li> — list item, используется в <ul>, <ol>, <menu>."
        },
        {
            "id": 19,
            "type": "single",
            "question": "Какой тег создаёт список описаний?",
            "options": ["<ul>", "<ol>", "<dl>", "<desc>"],
            "correct": [2],
            "explanation": "<dl> — description list. Внутри: <dt> (термин) и <dd> (описание)."
        },
        {
            "id": 20,
            "type": "single",
            "question": "Какой тег задаёт термин в списке описаний?",
            "options": ["<dd>", "<dt>", "<li>", "<term>"],
            "correct": [1],
            "explanation": "<dt> — description term. <dd> — description details."
        },
        {
            "id": 21,
            "type": "single",
            "question": "Какой тег задаёт описание термина в списке описаний?",
            "options": ["<dt>", "<dd>", "<li>", "<desc>"],
            "correct": [1],
            "explanation": "<dd> — description details."
        },
        {
            "id": 22,
            "type": "single",
            "question": "Какой тег задаёт список/меню команд?",
            "options": ["<menu>", "<nav>", "<list>", "<commands>"],
            "correct": [0],
            "explanation": "<menu> — список команд (семантически связан с <li>)."
        }
    ]
});
registerTest({
    "id": "html-forms-frames",
    "category": "html",
    "title": "HTML: Формы и фреймы",
    "description": "Теги для создания форм, элементов ввода и фреймов.",
    "questions": [
        {
            "id": 1,
            "type": "single",
            "question": "Какой тег создаёт HTML-форму?",
            "options": ["<input>", "<form>", "<fieldset>", "<shape>"],
            "correct": [1],
            "explanation": "<form> — контейнер для элементов ввода."
        },
        {
            "id": 2,
            "type": "single",
            "question": "Какой тег создаёт элемент управления вводом?",
            "options": ["<input>", "<field>", "<entry>", "<text>"],
            "correct": [0],
            "explanation": "<input> — универсальный элемент ввода."
        },
        {
            "id": 3,
            "type": "single",
            "question": "Какой тег создаёт многострочное поле ввода?",
            "options": ["<input>", "<text>", "<textarea>", "<multiline>"],
            "correct": [2],
            "explanation": "<textarea> — многострочное текстовое поле."
        },
        {
            "id": 4,
            "type": "single",
            "question": "Какой тег создаёт кликабельную кнопку?",
            "options": ["<btn>", "<button>", "<click>", "<press>"],
            "correct": [1],
            "explanation": "<button> — кликабельная кнопка."
        },
        {
            "id": 5,
            "type": "single",
            "question": "Какой тег создаёт раскрывающийся список?",
            "options": ["<dropdown>", "<select>", "<list>", "<combo>"],
            "correct": [1],
            "explanation": "<select> — выпадающий список, внутри используются <option>."
        },
        {
            "id": 6,
            "type": "single",
            "question": "Какой тег группирует связанные элементы в раскрывающемся списке?",
            "options": ["<group>", "<optgroup>", "<fieldset>", "<section>"],
            "correct": [1],
            "explanation": "<optgroup> — группа пунктов внутри <select>."
        },
        {
            "id": 7,
            "type": "single",
            "question": "Какой тег задаёт отдельный пункт раскрывающегося списка?",
            "options": ["<item>", "<option>", "<li>", "<value>"],
            "correct": [1],
            "explanation": "<option> — пункт внутри <select> или <datalist>."
        },
        {
            "id": 8,
            "type": "single",
            "question": "Какой тег создаёт метку для элемента ввода?",
            "options": ["<label>", "<caption>", "<text>", "<title>"],
            "correct": [0],
            "explanation": "<label> — подпись к элементу <input>."
        },
        {
            "id": 9,
            "type": "single",
            "question": "Какой тег группирует связанные элементы формы?",
            "options": ["<group>", "<fieldset>", "<section>", "<formgroup>"],
            "correct": [1],
            "explanation": "<fieldset> — рамка вокруг группы полей. Заголовок задаёт <legend>."
        },
        {
            "id": 10,
            "type": "single",
            "question": "Какой тег задаёт заголовок для группы <fieldset>?",
            "options": ["<title>", "<caption>", "<legend>", "<header>"],
            "correct": [2],
            "explanation": "<legend> — подпись группы полей."
        },
        {
            "id": 11,
            "type": "single",
            "question": "Какой тег задаёт список предопределённых вариантов для ввода?",
            "options": ["<datalist>", "<options>", "<suggestions>", "<autocomplete>"],
            "correct": [0],
            "explanation": "<datalist> — список подсказок для <input> с атрибутом list."
        },
        {
            "id": 12,
            "type": "single",
            "question": "Какой тег определяет результат вычисления?",
            "options": ["<result>", "<output>", "<calc>", "<value>"],
            "correct": [1],
            "explanation": "<output> — результат вычислений (например, из скрипта)."
        },
        {
            "id": 13,
            "type": "single",
            "question": "Какой тег встраивает внешнюю веб-страницу (фрейм)?",
            "options": ["<frame>", "<iframe>", "<embed>", "<object>"],
            "correct": [1],
            "explanation": "<iframe> — встроенный фрейм. Работает и в HTML5."
        },
        {
            "id": 14,
            "type": "multiple",
            "question": "Какие теги фреймов устарели в HTML5? (выберите все)",
            "options": ["<frame>", "<frameset>", "<noframes>", "<iframe>"],
            "correct": [0, 1, 2],
            "explanation": "Устарели: <frame>, <frameset>, <noframes>. <iframe> — действующий."
        }
    ]
});
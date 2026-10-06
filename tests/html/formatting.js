registerTest({
    "id": "html-formatting",
    "category": "html",
    "title": "HTML: Форматирование текста",
    "description": "Теги для выделения и оформления текста.",
    "questions": [
        {
            "id": 1,
            "type": "single",
            "question": "Какой тег задаёт аббревиатуру или акроним?",
            "options": ["<acronym>", "<abbr>", "<abbrev>", "<ab>"],
            "correct": [1],
            "explanation": "<abbr> — аббревиатура. <acronym> устарел в HTML5."
        },
        {
            "id": 2,
            "type": "single",
            "question": "Какой тег задаёт контактную информацию автора?",
            "options": ["<contact>", "<address>", "<info>", "<author>"],
            "correct": [1],
            "explanation": "<address> — контактные данные автора или владельца документа."
        },
        {
            "id": 3,
            "type": "single",
            "question": "Какой тег делает текст полужирным?",
            "options": ["<bold>", "<b>", "<strong>", "<fat>"],
            "correct": [1],
            "explanation": "<b> — визуально полужирный. <strong> — смысловой акцент (тоже жирный)."
        },
        {
            "id": 4,
            "type": "single",
            "question": "Какой тег переопределяет направление текста?",
            "options": ["<bdi>", "<bdo>", "<dir>", "<reverse>"],
            "correct": [1],
            "explanation": "<bdo> — bidirectional override. <bdi> — изолирует текст с другим направлением."
        },
        {
            "id": 5,
            "type": "single",
            "question": "Какой тег создаёт блочную цитату из другого источника?",
            "options": ["<quote>", "<blockquote>", "<cite>", "<q>"],
            "correct": [1],
            "explanation": "<blockquote> — блочная цитата. <q> — короткая цитата в строке."
        },
        {
            "id": 6,
            "type": "single",
            "question": "Какой тег определяет название произведения (книги, фильма)?",
            "options": ["<cite>", "<name>", "<title>", "<work>"],
            "correct": [0],
            "explanation": "<cite> — название работы, источника."
        },
        {
            "id": 7,
            "type": "single",
            "question": "Какой тег обозначает фрагмент компьютерного кода?",
            "options": ["<code>", "<pre>", "<kbd>", "<samp>"],
            "correct": [0],
            "explanation": "<code> — фрагмент кода. <pre> — форматированный текст. <kbd> — ввод с клавиатуры. <samp> — вывод программы."
        },
        {
            "id": 8,
            "type": "single",
            "question": "Какой тег определяет удалённый из документа текст?",
            "options": ["<s>", "<del>", "<strike>", "<removed>"],
            "correct": [1],
            "explanation": "<del> — удалённый текст. <s> — потерявший актуальность. <strike> устарел."
        },
        {
            "id": 9,
            "type": "single",
            "question": "Какой тег представляет определяющий экземпляр термина?",
            "options": ["<term>", "<dfn>", "<define>", "<dt>"],
            "correct": [1],
            "explanation": "<dfn> — defining instance, определяющий экземпляр термина."
        },
        {
            "id": 10,
            "type": "single",
            "question": "Какой тег задаёт текст с эмфатическим ударением?",
            "options": ["<i>", "<em>", "<italic>", "<stress>"],
            "correct": [1],
            "explanation": "<em> — emphasis (смысловое ударение), отображается курсивом."
        },
        {
            "id": 11,
            "type": "single",
            "question": "Какой тег определяет вставленный в документ текст?",
            "options": ["<ins>", "<add>", "<insert>", "<u>"],
            "correct": [0],
            "explanation": "<ins> — inserted text, вставленный текст."
        },
        {
            "id": 12,
            "type": "single",
            "question": "Какой тег обозначает ввод с клавиатуры?",
            "options": ["<key>", "<kbd>", "<input>", "<type>"],
            "correct": [1],
            "explanation": "<kbd> — keyboard input."
        },
        {
            "id": 13,
            "type": "single",
            "question": "Какой тег выделяет текст как маркером?",
            "options": ["<highlight>", "<mark>", "<span>", "<em>"],
            "correct": [1],
            "explanation": "<mark> — выделенный текст (по умолчанию жёлтым фоном)."
        },
        {
            "id": 14,
            "type": "single",
            "question": "Какой тег задаёт скалярное измерение (датчик)?",
            "options": ["<meter>", "<progress>", "<gauge>", "<scale>"],
            "correct": [0],
            "explanation": "<meter> — измерение в известном диапазоне. <progress> — прогресс выполнения задачи."
        },
        {
            "id": 15,
            "type": "single",
            "question": "Какой тег сохраняет форматирование текста (пробелы и переносы)?",
            "options": ["<code>", "<pre>", "<format>", "<text>"],
            "correct": [1],
            "explanation": "<pre> — preformatted text, сохраняет пробелы и переносы."
        },
        {
            "id": 16,
            "type": "single",
            "question": "Какой тег задаёт короткую цитату в строке?",
            "options": ["<q>", "<quote>", "<blockquote>", "<cite>"],
            "correct": [0],
            "explanation": "<q> — короткая цитата. <blockquote> — блочная цитата."
        },
        {
            "id": 17,
            "type": "single",
            "question": "Какой тег обозначает текст, потерявший актуальность?",
            "options": ["<del>", "<s>", "<strike>", "<old>"],
            "correct": [1],
            "explanation": "<s> — устаревший/неактуальный текст. <del> — удалённый. <strike> устарел в HTML5."
        },
        {
            "id": 18,
            "type": "single",
            "question": "Какой тег обозначает пример вывода компьютерной программы?",
            "options": ["<output>", "<samp>", "<code>", "<result>"],
            "correct": [1],
            "explanation": "<samp> — sample output, пример вывода программы."
        },
        {
            "id": 19,
            "type": "single",
            "question": "Какой тег задаёт текст меньшего размера?",
            "options": ["<small>", "<tiny>", "<mini>", "<sub>"],
            "correct": [0],
            "explanation": "<small> — мелкий текст (например, юридическая сноска)."
        },
        {
            "id": 20,
            "type": "single",
            "question": "Какой тег задаёт строгий (важный) текст?",
            "options": ["<bold>", "<b>", "<strong>", "<important>"],
            "correct": [2],
            "explanation": "<strong> — важность, обычно отображается полужирным."
        },
        {
            "id": 21,
            "type": "single",
            "question": "Какой тег задаёт подстрочный текст?",
            "options": ["<sup>", "<sub>", "<down>", "<bottom>"],
            "correct": [1],
            "explanation": "<sub> — subscript (нижний индекс), <sup> — superscript (верхний)."
        },
        {
            "id": 22,
            "type": "single",
            "question": "Какой тег задаёт надстрочный текст?",
            "options": ["<sup>", "<sub>", "<up>", "<top>"],
            "correct": [0],
            "explanation": "<sup> — superscript (верхний индекс)."
        },
        {
            "id": 23,
            "type": "single",
            "question": "Какой тег определяет шаблон для повторного использования?",
            "options": ["<template>", "<pattern>", "<layout>", "<clone>"],
            "correct": [0],
            "explanation": "<template> — шаблон, содержимое которого не отображается, но может быть склонировано через JS."
        },
        {
            "id": 24,
            "type": "single",
            "question": "Какой тег задаёт дату или время?",
            "options": ["<date>", "<time>", "<datetime>", "<clock>"],
            "correct": [1],
            "explanation": "<time> — дата/время в машиночитаемом формате."
        },
        {
            "id": 25,
            "type": "single",
            "question": "Какой тег задаёт переменную в формуле или коде?",
            "options": ["<var>", "<x>", "<val>", "<variable>"],
            "correct": [0],
            "explanation": "<var> — variable, переменная."
        },
        {
            "id": 26,
            "type": "single",
            "question": "Какой тег задаёт возможный разрыв строки (мягкий перенос)?",
            "options": ["<br>", "<wbr>", "<break>", "<wrap>"],
            "correct": [1],
            "explanation": "<wbr> — word break opportunity, точка возможного переноса."
        }
    ]
});
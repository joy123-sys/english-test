registerTest({
    "id": "html-semantics-tables",
    "category": "html",
    "title": "HTML: Семантика, таблицы, мета",
    "description": "Семантические теги, таблицы, метаданные и скрипты.",
    "questions": [
        {
            "id": 1,
            "type": "single",
            "question": "Какой тег задаёт информацию о стилях документа?",
            "options": ["<css>", "<style>", "<link>", "<stylesheet>"],
            "correct": [1],
            "explanation": "<style> — встроенные CSS-стили."
        },
        {
            "id": 2,
            "type": "single",
            "question": "Какой тег создаёт блочный контейнер?",
            "options": ["<span>", "<div>", "<section>", "<container>"],
            "correct": [1],
            "explanation": "<div> — блочный контейнер общего назначения."
        },
        {
            "id": 3,
            "type": "single",
            "question": "Какой тег создаёт строчный контейнер?",
            "options": ["<div>", "<span>", "<inline>", "<text>"],
            "correct": [1],
            "explanation": "<span> — строчный контейнер."
        },
        {
            "id": 4,
            "type": "single",
            "question": "Какой тег задаёт «шапку» документа или раздела?",
            "options": ["<head>", "<header>", "<top>", "<h1>"],
            "correct": [1],
            "explanation": "<header> — семантический тег шапки."
        },
        {
            "id": 5,
            "type": "single",
            "question": "Какой тег задаёт «подвал» документа или раздела?",
            "options": ["<bottom>", "<footer>", "<end>", "<tail>"],
            "correct": [1],
            "explanation": "<footer> — семантический тег подвала."
        },
        {
            "id": 6,
            "type": "single",
            "question": "Какой тег задаёт основное содержимое документа?",
            "options": ["<body>", "<main>", "<content>", "<center>"],
            "correct": [1],
            "explanation": "<main> — основное содержимое. Должен быть один на странице."
        },
        {
            "id": 7,
            "type": "single",
            "question": "Какой тег задаёт раздел документа?",
            "options": ["<div>", "<section>", "<part>", "<block>"],
            "correct": [1],
            "explanation": "<section> — тематический раздел документа."
        },
        {
            "id": 8,
            "type": "single",
            "question": "Какой тег определяет статью?",
            "options": ["<post>", "<article>", "<blog>", "<section>"],
            "correct": [1],
            "explanation": "<article> — самостоятельная единица контента (статья, пост)."
        },
        {
            "id": 9,
            "type": "single",
            "question": "Какой тег задаёт содержимое в стороне от основного (боковая панель)?",
            "options": ["<aside>", "<sidebar>", "<side>", "<extra>"],
            "correct": [0],
            "explanation": "<aside> — боковая врезка, не относящаяся напрямую к основному контенту."
        },
        {
            "id": 10,
            "type": "single",
            "question": "Какой тег создаёт раскрывающийся блок с дополнительной информацией?",
            "options": ["<summary>", "<details>", "<dialog>", "<accordion>"],
            "correct": [1],
            "explanation": "<details> — раскрывающийся блок. Видимый заголовок — <summary>."
        },
        {
            "id": 11,
            "type": "single",
            "question": "Какой тег задаёт видимый заголовок для <details>?",
            "options": ["<caption>", "<summary>", "<legend>", "<title>"],
            "correct": [1],
            "explanation": "<summary> — видимая часть раскрывающегося блока."
        },
        {
            "id": 12,
            "type": "single",
            "question": "Какой тег создаёт диалоговое окно?",
            "options": ["<dialog>", "<modal>", "<popup>", "<window>"],
            "correct": [0],
            "explanation": "<dialog> — диалоговое окно или модальное."
        },
        {
            "id": 13,
            "type": "single",
            "question": "Какой тег связывает контент с машиночитаемым значением?",
            "options": ["<meta>", "<data>", "<info>", "<value>"],
            "correct": [1],
            "explanation": "<data> — связывает видимый текст с machine-readable значением."
        },
        {
            "id": 14,
            "type": "single",
            "question": "Какой тег задаёт метаданные о документе?",
            "options": ["<head>", "<meta>", "<data>", "<info>"],
            "correct": [1],
            "explanation": "<meta> — метаданные (кодировка, viewport, описание)."
        },
        {
            "id": 15,
            "type": "single",
            "question": "Какой тег задаёт базовый URL для относительных ссылок?",
            "options": ["<link>", "<base>", "<href>", "<url>"],
            "correct": [1],
            "explanation": "<base> — базовый URL и/или цель для всех относительных ссылок."
        },
        {
            "id": 16,
            "type": "single",
            "question": "Какой тег подключает клиентский скрипт?",
            "options": ["<js>", "<script>", "<code>", "<javascript>"],
            "correct": [1],
            "explanation": "<script> — подключение или встраивание JavaScript."
        },
        {
            "id": 17,
            "type": "single",
            "question": "Какой тег задаёт альтернативу для пользователей без скриптов?",
            "options": ["<nojs>", "<noscript>", "<fallback>", "<alternative>"],
            "correct": [1],
            "explanation": "<noscript> — содержимое, если скрипты отключены."
        },
        {
            "id": 18,
            "type": "single",
            "question": "Какой тег встраивает внешний (не-HTML) контент?",
            "options": ["<embed>", "<object>", "<iframe>", "<applet>"],
            "correct": [0],
            "explanation": "<embed> — встраивание внешнего контента. <object> — тоже, но с <param>."
        },
        {
            "id": 19,
            "type": "single",
            "question": "Какой тег задаёт параметр для <object>?",
            "options": ["<param>", "<option>", "<arg>", "<setting>"],
            "correct": [0],
            "explanation": "<param> — параметр для <object>."
        },
        {
            "id": 20,
            "type": "single",
            "question": "Какой тег создаёт таблицу?",
            "options": ["<tab>", "<table>", "<grid>", "<tbl>"],
            "correct": [1],
            "explanation": "<table> — таблица."
        },
        {
            "id": 21,
            "type": "single",
            "question": "Какой тег задаёт заголовок таблицы?",
            "options": ["<title>", "<caption>", "<header>", "<th>"],
            "correct": [1],
            "explanation": "<caption> — подпись/заголовок таблицы."
        },
        {
            "id": 22,
            "type": "single",
            "question": "Какой тег задаёт строку в таблице?",
            "options": ["<tr>", "<row>", "<td>", "<line>"],
            "correct": [0],
            "explanation": "<tr> — table row (строка)."
        },
        {
            "id": 23,
            "type": "single",
            "question": "Какой тег задаёт ячейку-заголовок таблицы?",
            "options": ["<td>", "<th>", "<thead>", "<header>"],
            "correct": [1],
            "explanation": "<th> — table header, ячейка-заголовок."
        },
        {
            "id": 24,
            "type": "single",
            "question": "Какой тег задаёт обычную ячейку таблицы?",
            "options": ["<td>", "<th>", "<cell>", "<tc>"],
            "correct": [0],
            "explanation": "<td> — table data, обычная ячейка."
        },
        {
            "id": 25,
            "type": "single",
            "question": "Какой тег группирует содержимое «шапки» таблицы?",
            "options": ["<thead>", "<header>", "<top>", "<hgroup>"],
            "correct": [0],
            "explanation": "<thead> — группа строк-заголовков таблицы."
        },
        {
            "id": 26,
            "type": "single",
            "question": "Какой тег группирует содержимое «тела» таблицы?",
            "options": ["<tbody>", "<body>", "<main>", "<content>"],
            "correct": [0],
            "explanation": "<tbody> — группа основных строк таблицы."
        },
        {
            "id": 27,
            "type": "single",
            "question": "Какой тег группирует содержимое «подвала» таблицы?",
            "options": ["<tfoot>", "<footer>", "<bottom>", "<tbot>"],
            "correct": [0],
            "explanation": "<tfoot> — группа строк-итогов таблицы."
        },
        {
            "id": 28,
            "type": "single",
            "question": "Какой тег задаёт свойства столбца таблицы?",
            "options": ["<col>", "<column>", "<td>", "<c>"],
            "correct": [0],
            "explanation": "<col> — свойства отдельного столбца."
        },
        {
            "id": 29,
            "type": "single",
            "question": "Какой тег группирует несколько столбцов таблицы для форматирования?",
            "options": ["<cols>", "<colgroup>", "<columns>", "<group>"],
            "correct": [1],
            "explanation": "<colgroup> — группа столбцов для общего форматирования."
        }
    ]
});
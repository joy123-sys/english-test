registerTest({
    "id": "css-box-model",
    "category": "css",
    "title": "CSS: Блочная модель",
    "description": "Отступы, границы, размеры элементов.",
    "questions": [
        {
            "id": 1,
            "type": "single",
            "question": "Какое свойство задаёт внешний отступ элемента?",
            "options": ["padding", "margin", "border", "gap"],
            "correct": [1],
            "explanation": "margin — внешний отступ, padding — внутренний."
        },
        {
            "id": 2,
            "type": "single",
            "question": "Какое свойство задаёт внутренний отступ элемента?",
            "options": ["margin", "padding", "border", "indent"],
            "correct": [1],
            "explanation": "padding — внутренний отступ (от содержимого до границы)."
        },
        {
            "id": 3,
            "type": "single",
            "question": "Какое свойство задаёт ширину элемента?",
            "options": ["size", "width", "w", "length"],
            "correct": [1],
            "explanation": "width задаёт ширину."
        },
        {
            "id": 4,
            "type": "single",
            "question": "Какое свойство задаёт высоту элемента?",
            "options": ["height", "h", "size", "length"],
            "correct": [0],
            "explanation": "height задаёт высоту."
        },
        {
            "id": 5,
            "type": "single",
            "question": "Какое свойство задаёт максимальную ширину?",
            "options": ["width-max", "max-width", "limit-width", "width-limit"],
            "correct": [1],
            "explanation": "max-width — максимальная ширина. min-width — минимальная."
        },
        {
            "id": 6,
            "type": "single",
            "question": "Какое свойство задаёт минимальную высоту?",
            "options": ["height-min", "min-height", "limit-height", "height-limit"],
            "correct": [1],
            "explanation": "min-height — минимальная высота."
        },
        {
            "id": 7,
            "type": "single",
            "question": "Какое свойство определяет, включаются ли padding и border в width/height?",
            "options": ["box-model", "box-sizing", "box-style", "border-box"],
            "correct": [1],
            "explanation": "box-sizing: content-box (по умолчанию) | border-box."
        },
        {
            "id": 8,
            "type": "single",
            "question": "Какое свойство задаёт ширину всех четырёх границ?",
            "options": ["border-width", "border-size", "border-thickness", "border"],
            "correct": [0],
            "explanation": "border-width задаёт ширину. border-style — стиль. border-color — цвет."
        },
        {
            "id": 9,
            "type": "single",
            "question": "Какое свойство задаёт стиль всех четырёх границ?",
            "options": ["border-style", "border-type", "border-kind", "border"],
            "correct": [0],
            "explanation": "border-style: solid | dashed | dotted | double | none."
        },
        {
            "id": 10,
            "type": "single",
            "question": "Какое свойство задаёт радиус скругления углов?",
            "options": ["corner-radius", "border-radius", "round", "border-corner"],
            "correct": [1],
            "explanation": "border-radius задаёт скругление углов."
        },
        {
            "id": 11,
            "type": "single",
            "question": "Какое свойство задаёт радиус левого верхнего угла?",
            "options": ["border-top-left-radius", "border-radius-top-left", "corner-top-left", "radius-tl"],
            "correct": [0],
            "explanation": "border-top-left-radius задаёт радиус конкретного угла."
        },
        {
            "id": 12,
            "type": "single",
            "question": "Какое свойство добавляет тень к блоку?",
            "options": ["text-shadow", "box-shadow", "shadow", "drop-shadow"],
            "correct": [1],
            "explanation": "box-shadow — тень блока. text-shadow — тень текста."
        },
        {
            "id": 13,
            "type": "single",
            "question": "Какое свойство задаёт цвет верхней границы?",
            "options": ["border-top-color", "border-color-top", "top-border-color", "color-top"],
            "correct": [0],
            "explanation": "border-top-color задаёт цвет верхней границы."
        },
        {
            "id": 14,
            "type": "single",
            "question": "Какое свойство задаёт расстояние между границами ячеек таблицы?",
            "options": ["border-spacing", "cell-spacing", "table-gap", "border-gap"],
            "correct": [0],
            "explanation": "border-spacing задаёт расстояние между границами соседних ячеек."
        },
        {
            "id": 15,
            "type": "single",
            "question": "Какое свойство определяет, сворачиваются ли границы таблицы в одну?",
            "options": ["border-collapse", "border-merge", "table-collapse", "border-join"],
            "correct": [0],
            "explanation": "border-collapse: collapse | separate."
        },
        {
            "id": 16,
            "type": "single",
            "question": "Какое свойство задаёт алгоритм компоновки таблицы?",
            "options": ["table-layout", "table-style", "layout", "table-mode"],
            "correct": [0],
            "explanation": "table-layout: auto | fixed."
        },
        {
            "id": 17,
            "type": "single",
            "question": "Какое свойство задаёт размещение заголовка таблицы?",
            "options": ["caption-side", "caption-position", "table-caption", "caption"],
            "correct": [0],
            "explanation": "caption-side: top | bottom."
        },
        {
            "id": 18,
            "type": "single",
            "question": "Какое свойство отображает границы пустых ячеек таблицы?",
            "options": ["empty-cells", "empty-border", "show-empty", "cell-border"],
            "correct": [0],
            "explanation": "empty-cells: show | hide."
        },
        {
            "id": 19,
            "type": "multiple",
            "question": "Какие свойства входят в сокращённое свойство border? (выберите все)",
            "options": ["border-width", "border-style", "border-color", "border-radius"],
            "correct": [0, 1, 2],
            "explanation": "border = border-width + border-style + border-color. border-radius задаётся отдельно."
        },
        {
            "id": 20,
            "type": "single",
            "question": "Какое свойство управляет поведением разрыва страницы после элемента?",
            "options": ["break-after", "page-break-after", "after-break", "break"],
            "correct": [1],
            "explanation": "page-break-after и его современный аналог break-after."
        }
    ]
});
registerTest({
    "id": "css-basics",
    "category": "css",
    "title": "CSS: Основы и цвет",
    "description": "Базовые свойства: цвет, фон, прозрачность, видимость.",
    "questions": [
        {
            "id": 1,
            "type": "single",
            "question": "Какое свойство задаёт цвет текста?",
            "options": ["background-color", "color", "text-color", "font-color"],
            "correct": [1],
            "explanation": "color задаёт цвет текста. background-color — цвет фона."
        },
        {
            "id": 2,
            "type": "single",
            "question": "Какое свойство задаёт цвет фона элемента?",
            "options": ["color", "background-color", "bg-color", "fill"],
            "correct": [1],
            "explanation": "background-color задаёт цвет фона."
        },
        {
            "id": 3,
            "type": "single",
            "question": "Какое свойство задаёт уровень непрозрачности элемента?",
            "options": ["transparency", "opacity", "alpha", "visibility"],
            "correct": [1],
            "explanation": "opacity задаёт прозрачность (0 — полностью прозрачный, 1 — непрозрачный)."
        },
        {
            "id": 4,
            "type": "single",
            "question": "Какое свойство управляет видимостью элемента?",
            "options": ["display", "opacity", "visibility", "show"],
            "correct": [2],
            "explanation": "visibility: hidden скрывает элемент, но оставляет его место. display: none убирает из потока."
        },
        {
            "id": 5,
            "type": "single",
            "question": "Какое свойство сбрасывает все CSS-свойства элемента (кроме unicode-bidi и direction)?",
            "options": ["reset", "all", "clear", "initial"],
            "correct": [1],
            "explanation": "all: initial | inherit | unset — сбрасывает все свойства."
        },
        {
            "id": 6,
            "type": "single",
            "question": "Какое свойство задаёт цвет акцента для элементов управления?",
            "options": ["accent-color", "highlight-color", "ui-color", "control-color"],
            "correct": [0],
            "explanation": "accent-color задаёт цвет чекбоксов, радио-кнопок, прогресс-баров и т.д."
        },
        {
            "id": 7,
            "type": "single",
            "question": "Какое свойство задаёт цвет курсора (каретки) в полях ввода?",
            "options": ["cursor-color", "caret-color", "input-color", "text-cursor"],
            "correct": [1],
            "explanation": "caret-color задаёт цвет мигающего курсора в input и textarea."
        },
        {
            "id": 8,
            "type": "single",
            "question": "Какое свойство задаёт режим наложения содержимого элемента с фоном родителя?",
            "options": ["mix-blend-mode", "background-blend-mode", "overlay", "opacity"],
            "correct": [0],
            "explanation": "mix-blend-mode смешивает содержимое с фоном родителя. background-blend-mode — слои фона."
        },
        {
            "id": 9,
            "type": "single",
            "question": "Какое свойство позволяет пользователю изменять размер элемента?",
            "options": ["resize", "scale", "size", "drag"],
            "correct": [0],
            "explanation": "resize: none | both | horizontal | vertical — управляет изменением размера."
        },
        {
            "id": 10,
            "type": "single",
            "question": "Какое свойство задаёт ширину символа табуляции?",
            "options": ["tab-width", "tab-size", "indent-size", "tab"],
            "correct": [1],
            "explanation": "tab-size задаёт ширину символа табуляции (по умолчанию 8)."
        }
    ]
});
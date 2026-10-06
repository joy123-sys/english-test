registerTest({
    "id": "css-text-font",
    "category": "css",
    "title": "CSS: Текст и шрифты",
    "description": "Свойства шрифтов, текста и типографики.",
    "questions": [
        {
            "id": 1,
            "type": "single",
            "question": "Какое свойство задаёт семейство шрифтов?",
            "options": ["font-style", "font-family", "font-name", "font-type"],
            "correct": [1],
            "explanation": "font-family задаёт список шрифтов."
        },
        {
            "id": 2,
            "type": "single",
            "question": "Какое свойство задаёт размер шрифта?",
            "options": ["text-size", "font-size", "size", "font-scale"],
            "correct": [1],
            "explanation": "font-size задаёт размер шрифта (px, em, rem, %)."
        },
        {
            "id": 3,
            "type": "single",
            "question": "Какое свойство задаёт жирность шрифта?",
            "options": ["font-bold", "font-weight", "weight", "font-thickness"],
            "correct": [1],
            "explanation": "font-weight задаёт жирность (100–900, normal, bold)."
        },
        {
            "id": 4,
            "type": "single",
            "question": "Какое свойство задаёт начертание шрифта (курсив)?",
            "options": ["font-weight", "font-style", "text-decoration", "font-variant"],
            "correct": [1],
            "explanation": "font-style: normal | italic | oblique."
        },
        {
            "id": 5,
            "type": "single",
            "question": "Какое свойство управляет регистром текста (капс)?",
            "options": ["text-transform", "font-variant", "text-case", "uppercase"],
            "correct": [0],
            "explanation": "text-transform: uppercase | lowercase | capitalize."
        },
        {
            "id": 6,
            "type": "single",
            "question": "Какое свойство выравнивает текст по горизонтали?",
            "options": ["vertical-align", "text-align", "align-text", "justify"],
            "correct": [1],
            "explanation": "text-align: left | right | center | justify."
        },
        {
            "id": 7,
            "type": "single",
            "question": "Какое свойство задаёт высоту строки?",
            "options": ["line-height", "text-height", "row-height", "leading"],
            "correct": [0],
            "explanation": "line-height задаёт межстрочный интервал."
        },
        {
            "id": 8,
            "type": "single",
            "question": "Какое свойство задаёт расстояние между символами?",
            "options": ["letter-spacing", "word-spacing", "char-spacing", "text-spacing"],
            "correct": [0],
            "explanation": "letter-spacing — расстояние между буквами. word-spacing — между словами."
        },
        {
            "id": 9,
            "type": "single",
            "question": "Какое свойство задаёт расстояние между словами?",
            "options": ["letter-spacing", "word-spacing", "text-spacing", "gap"],
            "correct": [1],
            "explanation": "word-spacing задаёт расстояние между словами."
        },
        {
            "id": 10,
            "type": "single",
            "question": "Какое свойство задаёт отступ первой строки абзаца?",
            "options": ["padding-left", "text-indent", "margin-left", "first-line"],
            "correct": [1],
            "explanation": "text-indent задаёт отступ первой строки."
        },
        {
            "id": 11,
            "type": "single",
            "question": "Какое свойство добавляет тень к тексту?",
            "options": ["box-shadow", "text-shadow", "font-shadow", "shadow"],
            "correct": [1],
            "explanation": "text-shadow — тень текста. box-shadow — тень блока."
        },
        {
            "id": 12,
            "type": "single",
            "question": "Какое свойство задаёт украшение текста (подчёркивание, зачёркивание)?",
            "options": ["text-style", "text-decoration", "font-decoration", "underline"],
            "correct": [1],
            "explanation": "text-decoration: underline | line-through | overline | none."
        },
        {
            "id": 13,
            "type": "single",
            "question": "Какое свойство задаёт цвет украшения текста?",
            "options": ["text-color", "text-decoration-color", "color", "decoration-color"],
            "correct": [1],
            "explanation": "text-decoration-color задаёт цвет линии подчёркивания."
        },
        {
            "id": 14,
            "type": "single",
            "question": "Какое свойство задаёт стиль линии украшения текста?",
            "options": ["text-decoration-line", "text-decoration-style", "text-style", "line-style"],
            "correct": [1],
            "explanation": "text-decoration-style: solid | double | dotted | dashed | wavy."
        },
        {
            "id": 15,
            "type": "single",
            "question": "Какое свойство управляет обработкой пробелов?",
            "options": ["white-space", "space", "text-space", "word-wrap"],
            "correct": [0],
            "explanation": "white-space: normal | nowrap | pre | pre-wrap | pre-line."
        },
        {
            "id": 16,
            "type": "single",
            "question": "Какое свойство управляет переносом длинных слов?",
            "options": ["word-wrap", "text-wrap", "line-break", "word-break"],
            "correct": [0],
            "explanation": "word-wrap (overflow-wrap) позволяет разрывать длинные слова."
        },
        {
            "id": 17,
            "type": "single",
            "question": "Какое свойство указывает, как слова должны переноситься?",
            "options": ["word-wrap", "word-break", "line-break", "hyphens"],
            "correct": [1],
            "explanation": "word-break: normal | break-all | keep-all."
        },
        {
            "id": 18,
            "type": "single",
            "question": "Какое свойство управляет расстановкой переносов в словах?",
            "options": ["word-break", "hyphens", "line-break", "text-hyphens"],
            "correct": [1],
            "explanation": "hyphens: none | manual | auto."
        },
        {
            "id": 19,
            "type": "single",
            "question": "Какое свойство задаёт ориентацию текста в строке?",
            "options": ["text-orientation", "writing-mode", "direction", "text-direction"],
            "correct": [0],
            "explanation": "text-orientation: mixed | upright | sideways."
        },
        {
            "id": 20,
            "type": "single",
            "question": "Какое свойство задаёт направление текста (ltr/rtl)?",
            "options": ["direction", "text-direction", "writing-mode", "orientation"],
            "correct": [0],
            "explanation": "direction: ltr | rtl. Используется вместе с unicode-bidi."
        },
        {
            "id": 21,
            "type": "single",
            "question": "Какое свойство задаёт вертикальное выравнивание элемента?",
            "options": ["text-align", "vertical-align", "align-items", "align-self"],
            "correct": [1],
            "explanation": "vertical-align: baseline | top | middle | bottom — для строчных элементов."
        },
        {
            "id": 22,
            "type": "single",
            "question": "Какое свойство управляет отображением текста при переполнении?",
            "options": ["overflow", "text-overflow", "clip", "hidden"],
            "correct": [1],
            "explanation": "text-overflow: clip | ellipsis — что делать, если текст не помещается."
        },
        {
            "id": 23,
            "type": "single",
            "question": "Какое свойство задаёт тип кавычек для вложенных цитат?",
            "options": ["content", "quotes", "quote-style", "citation"],
            "correct": [1],
            "explanation": "quotes задаёт пары символов для открывающих/закрывающих кавычек."
        },
        {
            "id": 24,
            "type": "multiple",
            "question": "Какие свойства относятся к @-правилам шрифтов? (выберите все)",
            "options": ["@font-face", "@font-feature-values", "@charset", "@import"],
            "correct": [0, 1, 2, 3],
            "explanation": "Все четыре — @-правила. @font-face загружает шрифт, @charset задаёт кодировку, @import импортирует CSS."
        }
    ]
});
registerTest({
    "id": "css-flex-grid",
    "category": "css",
    "title": "CSS: Flexbox и Grid",
    "description": "Свойства флексбоксов и grid-контейнеров.",
    "questions": [
        {
            "id": 1,
            "type": "single",
            "question": "Какое свойство включает flex-контейнер?",
            "options": ["display: flex", "position: flex", "flex: on", "display: flexbox"],
            "correct": [0],
            "explanation": "display: flex делает элемент flex-контейнером."
        },
        {
            "id": 2,
            "type": "single",
            "question": "Какое свойство задаёт направление главной оси flex?",
            "options": ["flex-direction", "flex-flow", "flex-order", "direction"],
            "correct": [0],
            "explanation": "flex-direction: row | row-reverse | column | column-reverse."
        },
        {
            "id": 3,
            "type": "single",
            "question": "Какое свойство задаёт перенос flex-элементов на новую строку?",
            "options": ["flex-wrap", "flex-flow", "wrap", "flex-break"],
            "correct": [0],
            "explanation": "flex-wrap: nowrap | wrap | wrap-reverse."
        },
        {
            "id": 4,
            "type": "single",
            "question": "Какое сокращённое свойство объединяет flex-direction и flex-wrap?",
            "options": ["flex", "flex-flow", "flex-box", "flex-container"],
            "correct": [1],
            "explanation": "flex-flow = flex-direction + flex-wrap."
        },
        {
            "id": 5,
            "type": "single",
            "question": "Какое свойство выравнивает flex-элементы по главной оси?",
            "options": ["align-items", "justify-content", "align-content", "flex-align"],
            "correct": [1],
            "explanation": "justify-content — по главной оси. align-items — по поперечной."
        },
        {
            "id": 6,
            "type": "single",
            "question": "Какое свойство выравнивает flex-элементы по поперечной оси?",
            "options": ["justify-content", "align-items", "align-content", "flex-align"],
            "correct": [1],
            "explanation": "align-items выравнивает по поперечной оси."
        },
        {
            "id": 7,
            "type": "single",
            "question": "Какое свойство задаёт выравнивание между линиями во flex-контейнере?",
            "options": ["align-items", "justify-content", "align-content", "flex-lines"],
            "correct": [2],
            "explanation": "align-content работает при flex-wrap: wrap и нескольких линиях."
        },
        {
            "id": 8,
            "type": "single",
            "question": "Какое свойство выравнивает конкретный flex-элемент?",
            "options": ["align-self", "align-item", "self-align", "flex-self"],
            "correct": [0],
            "explanation": "align-self переопределяет align-items для конкретного элемента."
        },
        {
            "id": 9,
            "type": "single",
            "question": "Какое свойство задаёт порядок flex-элемента?",
            "options": ["order", "flex-order", "index", "position"],
            "correct": [0],
            "explanation": "order задаёт порядок (по умолчанию 0)."
        },
        {
            "id": 10,
            "type": "single",
            "question": "Какое свойство задаёт способность flex-элемента увеличиваться?",
            "options": ["flex-grow", "flex-shrink", "flex-basis", "flex-size"],
            "correct": [0],
            "explanation": "flex-grow — коэффициент роста."
        },
        {
            "id": 11,
            "type": "single",
            "question": "Какое свойство задаёт способность flex-элемента сжиматься?",
            "options": ["flex-grow", "flex-shrink", "flex-basis", "flex-size"],
            "correct": [1],
            "explanation": "flex-shrink — коэффициент сжатия."
        },
        {
            "id": 12,
            "type": "single",
            "question": "Какое свойство задаёт начальный размер flex-элемента?",
            "options": ["flex-grow", "flex-shrink", "flex-basis", "flex-size"],
            "correct": [2],
            "explanation": "flex-basis — начальная длина."
        },
        {
            "id": 13,
            "type": "single",
            "question": "Какое сокращённое свойство объединяет flex-grow, flex-shrink и flex-basis?",
            "options": ["flex", "flex-flow", "flex-all", "flex-container"],
            "correct": [0],
            "explanation": "flex = flex-grow + flex-shrink + flex-basis."
        },
        {
            "id": 14,
            "type": "single",
            "question": "Какое свойство включает grid-контейнер?",
            "options": ["display: grid", "grid: on", "position: grid", "display: gridbox"],
            "correct": [0],
            "explanation": "display: grid делает элемент grid-контейнером."
        },
        {
            "id": 15,
            "type": "single",
            "question": "Какое свойство задаёт количество и размер столбцов сетки?",
            "options": ["grid-template-columns", "grid-columns", "grid-cols", "grid-column"],
            "correct": [0],
            "explanation": "grid-template-columns: 1fr 1fr 1fr — три равных столбца."
        },
        {
            "id": 16,
            "type": "single",
            "question": "Какое свойство задаёт размеры строк сетки?",
            "options": ["grid-template-rows", "grid-rows", "grid-row", "grid-template"],
            "correct": [0],
            "explanation": "grid-template-rows задаёт размеры строк."
        },
        {
            "id": 17,
            "type": "single",
            "question": "Какое свойство задаёт именованные области сетки?",
            "options": ["grid-template-areas", "grid-areas", "grid-names", "grid-template"],
            "correct": [0],
            "explanation": "grid-template-areas позволяет задать именованные области."
        },
        {
            "id": 18,
            "type": "single",
            "question": "Какое свойство задаёт зазор между столбцами и строками сетки?",
            "options": ["gap", "grid-gap", "grid-column-gap", "grid-spacing"],
            "correct": [0],
            "explanation": "gap (или grid-gap) = grid-row-gap + grid-column-gap."
        },
        {
            "id": 19,
            "type": "single",
            "question": "Какое свойство задаёт автоматическое размещение элементов в сетке?",
            "options": ["grid-auto-flow", "grid-flow", "grid-auto", "grid-place"],
            "correct": [0],
            "explanation": "grid-auto-flow: row | column | dense."
        },
        {
            "id": 20,
            "type": "single",
            "question": "Какое свойство задаёт область элемента сетки?",
            "options": ["grid-area", "grid-position", "grid-place", "grid-item"],
            "correct": [0],
            "explanation": "grid-area = grid-row-start + grid-column-start + grid-row-end + grid-column-end."
        },
        {
            "id": 21,
            "type": "single",
            "question": "Какое свойство задаёт начало и конец позиции элемента по столбцу?",
            "options": ["grid-column", "grid-column-start", "grid-column-end", "grid-col"],
            "correct": [0],
            "explanation": "grid-column = grid-column-start + grid-column-end."
        },
        {
            "id": 22,
            "type": "single",
            "question": "Какое свойство задаёт начало и конец позиции элемента по строке?",
            "options": ["grid-row", "grid-row-start", "grid-row-end", "grid-line"],
            "correct": [0],
            "explanation": "grid-row = grid-row-start + grid-row-end."
        },
        {
            "id": 23,
            "type": "single",
            "question": "Какое сокращённое свойство объединяет grid-template-rows, grid-template-columns, grid-template-areas и авто-свойства?",
            "options": ["grid", "grid-template", "grid-all", "grid-flow"],
            "correct": [0],
            "explanation": "grid — самое мощное сокращение для grid-контейнера."
        }
    ]
});
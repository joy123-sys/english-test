registerTest({
    "id": "css-position-display",
    "category": "css",
    "title": "CSS: Позиционирование и display",
    "description": "Свойства position, display, z-index, float, overflow.",
    "questions": [
        {
            "id": 1,
            "type": "single",
            "question": "Какое свойство задаёт способ отображения элемента?",
            "options": ["visibility", "display", "show", "position"],
            "correct": [1],
            "explanation": "display: block | inline | inline-block | flex | grid | none."
        },
        {
            "id": 2,
            "type": "single",
            "question": "Какое свойство задаёт тип позиционирования элемента?",
            "options": ["position", "place", "location", "layout"],
            "correct": [0],
            "explanation": "position: static | relative | absolute | fixed | sticky."
        },
        {
            "id": 3,
            "type": "single",
            "question": "Какое свойство задаёт положение элемента сверху?",
            "options": ["top", "up", "y", "vertical-top"],
            "correct": [0],
            "explanation": "top задаёт верхнее смещение для позиционированного элемента."
        },
        {
            "id": 4,
            "type": "single",
            "question": "Какое свойство задаёт положение элемента слева?",
            "options": ["left", "start", "x", "horizontal-left"],
            "correct": [0],
            "explanation": "left задаёт левое смещение."
        },
        {
            "id": 5,
            "type": "single",
            "question": "Какое свойство задаёт порядок элементов в стеке (по оси Z)?",
            "options": ["z-index", "order", "layer", "stack"],
            "correct": [0],
            "explanation": "z-index задаёт порядок наложения элементов."
        },
        {
            "id": 6,
            "type": "single",
            "question": "Какое свойство указывает, должен ли элемент быть плавающим?",
            "options": ["float", "flow", "position", "swim"],
            "correct": [0],
            "explanation": "float: left | right | none."
        },
        {
            "id": 7,
            "type": "single",
            "question": "Какое свойство отменяет обтекание плавающих элементов?",
            "options": ["clear", "reset", "float-none", "stop"],
            "correct": [0],
            "explanation": "clear: left | right | both | none."
        },
        {
            "id": 8,
            "type": "single",
            "question": "Какое свойство управляет тем, что происходит при переполнении блока?",
            "options": ["overflow", "spill", "clip", "hidden"],
            "correct": [0],
            "explanation": "overflow: visible | hidden | scroll | auto."
        },
        {
            "id": 9,
            "type": "single",
            "question": "Какое свойство управляет переполнением по горизонтали?",
            "options": ["overflow-x", "overflow-horizontal", "overflow-left", "overflow"],
            "correct": [0],
            "explanation": "overflow-x задаёт поведение переполнения по горизонтали."
        },
        {
            "id": 10,
            "type": "single",
            "question": "Какое свойство обрезает абсолютно позиционированный элемент?",
            "options": ["clip", "cut", "crop", "trim"],
            "correct": [0],
            "explanation": "clip: rect(top, right, bottom, left) — устаревшее, но работает."
        },
        {
            "id": 11,
            "type": "single",
            "question": "Какое свойство определяет, должен ли элемент создавать новый контекст наложения?",
            "options": ["isolation", "z-index", "stack", "layer"],
            "correct": [0],
            "explanation": "isolation: isolate создаёт новый stacking context."
        },
        {
            "id": 12,
            "type": "single",
            "question": "Какое свойство определяет, реагирует ли элемент на события указателя?",
            "options": ["pointer-events", "cursor", "click", "events"],
            "correct": [0],
            "explanation": "pointer-events: auto | none — можно ли кликать по элементу."
        },
        {
            "id": 13,
            "type": "single",
            "question": "Какое свойство задаёт вид курсора при наведении?",
            "options": ["cursor", "pointer", "mouse", "hover"],
            "correct": [0],
            "explanation": "cursor: pointer | default | text | move | etc."
        },
        {
            "id": 14,
            "type": "single",
            "question": "Какое свойство применяет 2D- или 3D-преобразования к элементу?",
            "options": ["transform", "translate", "convert", "warp"],
            "correct": [0],
            "explanation": "transform: translate() | rotate() | scale() | skew()."
        },
        {
            "id": 15,
            "type": "single",
            "question": "Какое свойство задаёт точку отсчёта для transform?",
            "options": ["transform-origin", "transform-point", "origin", "pivot"],
            "correct": [0],
            "explanation": "transform-origin задаёт точку (по умолчанию 50% 50%)."
        },
        {
            "id": 16,
            "type": "single",
            "question": "Какое свойство задаёт способ отображения вложенных элементов в 3D?",
            "options": ["transform-style", "transform-3d", "3d-style", "perspective-style"],
            "correct": [0],
            "explanation": "transform-style: flat | preserve-3d."
        },
        {
            "id": 17,
            "type": "single",
            "question": "Какое свойство задаёт перспективу для 3D-элементов?",
            "options": ["perspective", "depth", "3d", "view"],
            "correct": [0],
            "explanation": "perspective задаёт перспективу (например, 1000px)."
        },
        {
            "id": 18,
            "type": "single",
            "question": "Какое свойство определяет, должна ли быть видна задняя грань элемента?",
            "options": ["backface-visibility", "backface", "reverse-visibility", "flip"],
            "correct": [0],
            "explanation": "backface-visibility: visible | hidden."
        },
        {
            "id": 19,
            "type": "single",
            "question": "Какое свойство управляет смешиванием содержимого с фоном родителя?",
            "options": ["mix-blend-mode", "background-blend-mode", "blend", "overlay"],
            "correct": [0],
            "explanation": "mix-blend-mode: multiply | screen | overlay | etc."
        },
        {
            "id": 20,
            "type": "single",
            "question": "Какое свойство определяет, как заменяемый элемент (img, video) вписывается в свой бокс?",
            "options": ["object-fit", "fit", "media-fit", "content-fit"],
            "correct": [0],
            "explanation": "object-fit: fill | contain | cover | none | scale-down."
        },
        {
            "id": 21,
            "type": "single",
            "question": "Какое свойство задаёт выравнивание заменяемого элемента внутри бокса?",
            "options": ["object-position", "object-align", "media-position", "content-position"],
            "correct": [0],
            "explanation": "object-position задаёт позицию объекта внутри бокса."
        },
        {
            "id": 22,
            "type": "single",
            "question": "Какое свойство применяет эффекты (размытие, оттенок) к элементу?",
            "options": ["filter", "effect", "blur", "style"],
            "correct": [0],
            "explanation": "filter: blur() | brightness() | contrast() | grayscale()."
        }
    ]
});
registerTest({
    "id": "css-animations",
    "category": "css",
    "title": "CSS: Анимации и переходы",
    "description": "Свойства transition, animation и @keyframes.",
    "questions": [
        {
            "id": 1,
            "type": "single",
            "question": "Какое свойство задаёт плавный переход между состояниями?",
            "options": ["transition", "animation", "transform", "ease"],
            "correct": [0],
            "explanation": "transition — плавное изменение свойства."
        },
        {
            "id": 2,
            "type": "single",
            "question": "Какое свойство задаёт, к какому свойству применяется transition?",
            "options": ["transition-property", "transition-name", "transition-target", "transition-effect"],
            "correct": [0],
            "explanation": "transition-property задаёт свойство (или all)."
        },
        {
            "id": 3,
            "type": "single",
            "question": "Какое свойство задаёт длительность transition?",
            "options": ["transition-duration", "transition-time", "transition-delay", "transition-speed"],
            "correct": [0],
            "explanation": "transition-duration задаёт время перехода (например, 0.3s)."
        },
        {
            "id": 4,
            "type": "single",
            "question": "Какое свойство задаёт задержку transition?",
            "options": ["transition-delay", "transition-duration", "transition-time", "transition-wait"],
            "correct": [0],
            "explanation": "transition-delay — задержка перед началом перехода."
        },
        {
            "id": 5,
            "type": "single",
            "question": "Какое свойство задаёт кривую скорости transition?",
            "options": ["transition-timing-function", "transition-ease", "transition-curve", "transition-speed"],
            "correct": [0],
            "explanation": "transition-timing-function: ease | linear | ease-in | ease-out | cubic-bezier()."
        },
        {
            "id": 6,
            "type": "single",
            "question": "Какое сокращённое свойство объединяет все transition-* свойства?",
            "options": ["transition", "animate", "effect", "motion"],
            "correct": [0],
            "explanation": "transition = property + duration + timing-function + delay."
        },
        {
            "id": 7,
            "type": "single",
            "question": "Какое свойство задаёт имя @keyframes для анимации?",
            "options": ["animation-name", "animation-id", "animation-key", "animation-ref"],
            "correct": [0],
            "explanation": "animation-name ссылается на @keyframes."
        },
        {
            "id": 8,
            "type": "single",
            "question": "Какое свойство задаёт длительность анимации?",
            "options": ["animation-duration", "animation-time", "animation-delay", "animation-speed"],
            "correct": [0],
            "explanation": "animation-duration задаёт время одного цикла."
        },
        {
            "id": 9,
            "type": "single",
            "question": "Какое свойство задаёт задержку анимации?",
            "options": ["animation-delay", "animation-duration", "animation-time", "animation-wait"],
            "correct": [0],
            "explanation": "animation-delay — задержка перед началом."
        },
        {
            "id": 10,
            "type": "single",
            "question": "Какое свойство задаёт количество повторений анимации?",
            "options": ["animation-iteration-count", "animation-repeat", "animation-loop", "animation-times"],
            "correct": [0],
            "explanation": "animation-iteration-count: число или infinite."
        },
        {
            "id": 11,
            "type": "single",
            "question": "Какое свойство задаёт направление воспроизведения анимации?",
            "options": ["animation-direction", "animation-play", "animation-reverse", "animation-flow"],
            "correct": [0],
            "explanation": "animation-direction: normal | reverse | alternate | alternate-reverse."
        },
        {
            "id": 12,
            "type": "single",
            "question": "Какое свойство задаёт, запущена анимация или приостановлена?",
            "options": ["animation-play-state", "animation-state", "animation-run", "animation-pause"],
            "correct": [0],
            "explanation": "animation-play-state: running | paused."
        },
        {
            "id": 13,
            "type": "single",
            "question": "Какое свойство задаёт кривую скорости анимации?",
            "options": ["animation-timing-function", "animation-ease", "animation-curve", "animation-speed"],
            "correct": [0],
            "explanation": "animation-timing-function: ease | linear | ease-in | ease-out | cubic-bezier()."
        },
        {
            "id": 14,
            "type": "single",
            "question": "Какое свойство задаёт стиль элемента до/после анимации?",
            "options": ["animation-fill-mode", "animation-style", "animation-state", "animation-final"],
            "correct": [0],
            "explanation": "animation-fill-mode: none | forwards | backwards | both."
        },
        {
            "id": 15,
            "type": "single",
            "question": "Какое сокращённое свойство объединяет все animation-* свойства?",
            "options": ["animation", "motion", "keyframe", "effect"],
            "correct": [0],
            "explanation": "animation = name + duration + timing-function + delay + iteration-count + direction + fill-mode + play-state."
        },
        {
            "id": 16,
            "type": "single",
            "question": "Какое @-правило задаёт код анимации?",
            "options": ["@keyframes", "@animation", "@keyframe", "@motion"],
            "correct": [0],
            "explanation": "@keyframes определяет этапы анимации (from/to или %)."
        }
    ]
});
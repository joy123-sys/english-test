// ============================================
// app.js
// ВАЖНО: TEST_REGISTRY и registerTest уже объявлены в registry.js
// ============================================

// ============================================
// СОСТОЯНИЕ
// ============================================
let currentTest = null;
let userAnswers = {};

// ============================================
// DOM ЭЛЕМЕНТЫ
// ============================================
const menuScreen = document.getElementById('menu-screen');
const quizScreen = document.getElementById('quiz-screen');

// Контейнеры для списков тем по категориям
const htmlTopicsContainer = document.getElementById('html-topics');
const cssTopicsContainer = document.getElementById('css-topics');
const jsTopicsContainer = document.getElementById('js-topics');

// Элементы экрана теста
const quizTitle = document.getElementById('quiz-title');
const testDescription = document.getElementById('test-description');
const quizContainer = document.getElementById('quiz-container');

const checkBtn = document.getElementById('check-btn');
const resetBtn = document.getElementById('reset-btn');
const backBtn = document.getElementById('back-btn');

const resultContainer = document.getElementById('result-container');
const scoreDisplay = document.getElementById('score-display');
const detailedResults = document.getElementById('detailed-results');

// ============================================
// УТИЛИТЫ
// ============================================

/**
 * Перемешивает массив (алгоритм Фишера-Йетса).
 * Возвращает НОВЫЙ массив.
 */
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

/**
 * Перемешивает варианты ответов, пересчитывая индексы правильных.
 */
function shuffleOptions(question) {
    const optionsWithMeta = question.options.map((text, index) => ({
        text: text,
        isCorrect: question.correct.includes(index)
    }));

    const shuffled = shuffleArray(optionsWithMeta);
    const newOptions = shuffled.map(o => o.text);
    const newCorrect = [];

    shuffled.forEach((o, newIndex) => {
        if (o.isCorrect) newCorrect.push(newIndex);
    });

    return { ...question, options: newOptions, correct: newCorrect };
}

/**
 * Готовит тест: перемешивает вопросы и опции.
 */
function prepareTest(test) {
    const shuffledQuestions = shuffleArray(test.questions);
    const preparedQuestions = shuffledQuestions.map(q => shuffleOptions(q));
    return { ...test, questions: preparedQuestions };
}

/**
 * Сравнивает два массива.
 */
function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

/**
 * Экранирует HTML-теги в строке, чтобы они отображались как текст.
 * Например, "<bdo>" превращается в "&lt;bdo&gt;".
 */
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return String(text).replace(/[&<>"']/g, m => map[m]);
}

// ============================================
// МЕНЮ
// ============================================

/**
 * Рендерит список тем в соответствующие контейнеры по категориям.
 */
function renderMenu() {
    // Очищаем контейнеры
    htmlTopicsContainer.innerHTML = '';
    cssTopicsContainer.innerHTML = '';
    jsTopicsContainer.innerHTML = '';

    // Проходим по всем зарегистрированным тестам
    window.TEST_REGISTRY.forEach(test => {
        const btn = document.createElement('button');
        btn.className = 'topic-btn';
        btn.textContent = test.title;
        btn.addEventListener('click', () => startTest(test.id));

        // Распределяем по категориям
        if (test.category === 'html') {
            htmlTopicsContainer.appendChild(btn);
        } else if (test.category === 'css') {
            cssTopicsContainer.appendChild(btn);
        } else if (test.category === 'js') {
            jsTopicsContainer.appendChild(btn);
        }
    });
}

/**
 * Инициализирует аккордеон: клик по заголовку сворачивает/разворачивает список.
 */
function initAccordion() {
    const headers = document.querySelectorAll('.category-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const targetId = header.dataset.target;
            const targetList = document.getElementById(targetId);
            if (!targetList) return;

            const section = header.closest('.category-section');
            section.classList.toggle('open');
            targetList.classList.toggle('collapsed');
        });
    });
}

// ============================================
// ЗАПУСК ТЕСТА
// ============================================

function startTest(testId) {
    const test = window.TEST_REGISTRY.find(t => t.id === testId);
    if (!test) return;

    currentTest = prepareTest(test);
    userAnswers = {};

    // Переключаем экраны
    menuScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');

    // Настраиваем заголовки
    quizTitle.textContent = test.title;
    testDescription.textContent = test.description;

    // Сбрасываем состояние кнопок и результатов
    checkBtn.style.display = 'inline-block';
    checkBtn.disabled = false;
    resetBtn.style.display = 'none';
    resultContainer.classList.add('hidden');
    scoreDisplay.innerHTML = '';
    detailedResults.innerHTML = '';

    renderQuiz();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// ОТРИСОВКА ТЕСТА
// ============================================

function renderQuiz() {
    let html = '';

    currentTest.questions.forEach((q, index) => {
        html += `<div class="question-card" data-qid="${q.id}">`;
        html += `<h3>Вопрос ${index + 1}: ${escapeHtml(q.question)}</h3>`;

        if (q.type === 'multiple') {
            html += `<p class="hint">Выберите несколько вариантов</p>`;
        }

        q.options.forEach((option, optIndex) => {
            const inputType = q.type === 'multiple' ? 'checkbox' : 'radio';
            const nameAttr = q.type === 'multiple' ? `q${q.id}[]` : `q${q.id}`;

            html += `
                <label class="option-label">
                    <input type="${inputType}" name="${nameAttr}" value="${optIndex}" data-qid="${q.id}">
                    <span>${escapeHtml(option)}</span>
                </label>
            `;
        });

        html += `</div>`;
    });

    quizContainer.innerHTML = html;

    // Перепривязываем обработчик
    quizContainer.removeEventListener('change', handleAnswerChange);
    quizContainer.addEventListener('change', handleAnswerChange);
}

// ============================================
// ЛОГИКА ОТВЕТОВ
// ============================================

function handleAnswerChange(e) {
    const qid = parseInt(e.target.dataset.qid);

    if (!userAnswers[qid]) {
        userAnswers[qid] = [];
    }

    const question = currentTest.questions.find(q => q.id === qid);

    if (question.type === 'single') {
        userAnswers[qid] = [parseInt(e.target.value)];
    } else {
        if (e.target.checked) {
            if (!userAnswers[qid].includes(parseInt(e.target.value))) {
                userAnswers[qid].push(parseInt(e.target.value));
            }
        } else {
            userAnswers[qid] = userAnswers[qid].filter(v => v !== parseInt(e.target.value));
        }
    }
}

// ============================================
// ПРОВЕРКА ОТВЕТОВ
// ============================================

function checkAnswers() {
    let score = 0;
    const total = currentTest.questions.length;
    let detailsHtml = '';

    currentTest.questions.forEach((q, index) => {
        const userAnswer = userAnswers[q.id] || [];
        const isCorrect = arraysEqual([...userAnswer].sort(), [...q.correct].sort());

        if (isCorrect) score++;

        const questionCard = document.querySelector(`.question-card[data-qid="${q.id}"]`);
        const labels = questionCard.querySelectorAll('.option-label');

        labels.forEach((label, optIndex) => {
            const input = label.querySelector('input');
            label.classList.remove('correct', 'incorrect');

            if (q.correct.includes(optIndex)) {
                label.classList.add('correct');
            } else if (userAnswer.includes(optIndex)) {
                label.classList.add('incorrect');
            }

            input.disabled = true;
        });

        const status = isCorrect ? '✅ Верно' : '❌ Неверно';
        detailsHtml += `
            <div class="result-item ${isCorrect ? 'success' : 'fail'}">
                <p><strong>Вопрос ${index + 1}:</strong> ${status}</p>
                <p class="explanation">💡 ${escapeHtml(q.explanation)}</p>
            </div>
        `;
    });

    scoreDisplay.innerHTML = `Вы набрали <span>${score}</span> из <span>${total}</span>`;
    detailedResults.innerHTML = detailsHtml;
    resultContainer.classList.remove('hidden');

    checkBtn.style.display = 'none';
    resetBtn.style.display = 'inline-block';
    resetBtn.scrollIntoView({ behavior: 'smooth' });
}

// ============================================
// СБРОС ТЕСТА
// ============================================

function resetQuiz() {
    if (!currentTest) return;
    startTest(currentTest.id);
}

// ============================================
// ВОЗВРАТ В МЕНЮ
// ============================================

function goBackToMenu() {
    quizScreen.classList.add('hidden');
    menuScreen.classList.remove('hidden');
    currentTest = null;
    userAnswers = {};
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// СЛУШАТЕЛИ СОБЫТИЙ
// ============================================

checkBtn.addEventListener('click', checkAnswers);
resetBtn.addEventListener('click', resetQuiz);
backBtn.addEventListener('click', goBackToMenu);

// ============================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================

console.log('🚀 Инициализация. Найдено тестов:', window.TEST_REGISTRY.length);
renderMenu();
initAccordion();
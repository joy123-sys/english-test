// registry.js
// Глобальный реестр тестов. Должен быть подключён ПЕРВЫМ.

window.TEST_REGISTRY = [];

window.registerTest = function(testData) {
    window.TEST_REGISTRY.push(testData);
};

console.log('✅ Реестр тестов инициализирован');
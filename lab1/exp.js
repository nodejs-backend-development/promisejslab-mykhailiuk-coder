// ==================== ЗАВДАННЯ 1.3 ====================
/**
 * Створіть проміс з валідацією email
 * Якщо email містить @ та . - resolve з email
 * Інакше - reject з повідомленням про помилку
 * 
 * @param {string} email 
 * @returns {Promise<string, string>}
 */

function validateEmail(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (checkEmail(email)) {
                resolve(email); 
            } else {
                reject("Email is invalid"); 
            }
        }, 300);
    });
}

const checkEmail = (email) => {
    return email.includes("@") && email.includes(".");
};

validateEmail("test@me.com")
    .then(data => console.log("Валідний:", data))
    .catch(error => console.error(error));

validateEmail("invalid-email")
    .then(data => console.log(data))
    .catch(error => console.error(error));

// ==================== ЗАВДАННЯ 1.4 ====================
/**
 * Створіть проміс, який симулює авторизацію користувача
 * - Якщо username та password не порожні - resolve з об'єктом користувача
 * - Якщо username порожній - reject з 'Username is required'
 * - Якщо password порожній - reject з 'Password is required'
 * - Якщо password коротший за 6 символів - reject з 'Password too short'
 * 
 * @param {string} username 
 * @param {string} password 
 * @returns {Promise<{username: string, authenticated: boolean}, string>}
 */

function authenticateUser(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!username) {
                reject("Username is required");
            }
            else if (!password) {
                reject("Password is required");
            }
            else if (password.length < 6) {
                reject("Password too short");
            }
            else {
                resolve({ username, authenticated: true });
            }
        }, 300);
    });
}

// Перевірка:
authenticateUser('john', 'password123')
    .then(user => console.log(' Тест 1.4 (успіх):', user))
    .catch(err => console.log('   Помилка:', err));

authenticateUser('', 'password123')
    .then(user => console.log('   Не повинно виконатися'))
    .catch(err => console.log(' Тест 1.4 (немає username):', err));

authenticateUser('john', '12345')
    .then(user => console.log('   Не повинно виконатися'))
    .catch(err => console.log(' Тест 1.4 (короткий пароль):', err));

// ==================== ЗАВДАННЯ 1.5 ====================
/**
 * Створіть функцію, яка перевіряє вік користувача
 * - age < 0: reject 'Invalid age'
 * - age < 18: reject 'Too young'
 * - age >= 18 та age < 65: resolve {age, category: 'adult'}
 * - age >= 65: resolve {age, category: 'senior'}
 * 
 * @param {number} age 
 * @returns {Promise<{age: number, category: string}, string>}
 */

function checkAge(age) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age < 0) {
                reject("Invalid age");
            } else if (age < 18) {
                reject("Too young");
            } else if (age >= 18 && age < 65) {
                resolve({ age, category: "adult" });
            } else {
                resolve({ age, category: "senior" });
            }
        }, 300);
    });
}

// Перевірка (розкоментуйте після реалізації):
checkAge(25).then(console.log).catch(console.error);
checkAge(70).then(console.log).catch(console.error);
checkAge(15).then(console.log).catch(console.error);
checkAge(-5).then(console.log).catch(console.error); 

// ==================== ЗАВДАННЯ 2.1 ====================
/**
 * Створіть проміс, який одразу резолвиться зі значенням
 * 
 * @param {any} value - Будь-яке значення
 * @returns {Promise<any>}
 */
function makePromiseResolveWith(value) {
    // TODO: Використайте Promise.resolve()
    return Promise.resolve(value);
}

// Перевірка:
makePromiseResolveWith(5)
    .then(value => console.log(' Тест 2.1:', value)); // Очікується: 5

// ==================== ЗАВДАННЯ 2.5 ====================
/**
 * Створіть функцію для конвертації callback-based функції в проміс
 * Функція має приймати значення та callback(error, result)
 * Поверніть проміс, який резолвиться з результатом
 * 
 * @param {any} value 
 * @returns {Promise<string>}
 */

function callbackBasedFunction(callback, value){
    if (typeof callback == "function"){ 
        setTimeout(() => {
            callback("Processed" + value);
        }, 100)
    } else {
        console.log("Error: function parameter is not a function");
    }
}

function callbackToPromise(value) {
    // TODO: Симулюйте роботу з callback
    // Створіть проміс, який використовує setTimeout для виклику callback
    // callback має викликатися через 100мс з результатом 'Processed: ' + value
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(callbackBasedFunction());
        }, 100);
    });
}

// Перевірка:
callbackToPromise('test')
    .then(result => console.log(' Тест 2.5:', result));
// Очікується: 'Processed: test'

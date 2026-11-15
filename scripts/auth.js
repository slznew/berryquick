document.addEventListener('DOMContentLoaded', () => {
    const formTitle = document.getElementById('formTitle');
    const authForm = document.getElementById('authForm');
    const registerBtn = document.getElementById('registerBtn');
    const loginBtn = document.getElementById('loginBtn');
    const loginGroup = document.getElementById('loginGroup');
    const codeGroup = document.getElementById('codeGroup');
    const emailInput = document.getElementById('emailInput');
    const codeInput = document.getElementById('codeInput');
    let currentMode = 'register';
    function setRegisterMode() {
        currentMode = 'register';
        formTitle.textContent = 'Регистрация';
        loginGroup.style.display = 'flex';
        registerBtn.className = 'btn btn-primary';
        loginBtn.className = 'btn btn-outline';
    }
    function setLoginMode() {
        currentMode = 'login';
        formTitle.textContent = 'Вход';
        loginGroup.style.display = 'none';
        loginBtn.className = 'btn btn-primary';
        registerBtn.className = 'btn btn-outline';
    }
    registerBtn.addEventListener('click', () => {
        if (currentMode === 'register') {
            submitForm();
        } else {
            setRegisterMode();
        }
    });
    loginBtn.addEventListener('click', () => {
        if (currentMode === 'login') {
            submitForm();
        } else {
            setLoginMode();
        }
    });
    function submitForm() {
        const login = document.getElementById('loginInput').value.trim();
        const password = document.getElementById('passwordInput').value.trim();
        const email = emailInput.value.trim();
        const code = codeInput.value.trim();
        if (!email || !password) {
            return;
        }
        if (currentMode === 'register') {
            console.log('Отправка данных РЕГИСТРАЦИИ:', { login, password, email, code });
            window.location.href = './index.html';
        } else if (email == 'slznew@yandex.ru' && password == '12345'){
            window.location.href = './admin.html';
        } else {
            console.log('Отправка данных ВХОДА:', { login, password });
            window.location.href = './index.html';
        }
        }
    }
);
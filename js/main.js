const passwordInput = document.getElementById('password');
const copyIcon = document.querySelector('.box img');
const generateBtn = document.querySelector('button');
const message = document.getElementById('message');

function generatePassword() {
    characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    length = 15;
    password = "";

    for(let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    passwordInput.value = password;

}

function copyPassword() {
    if (passwordInput.value !== "") {
    navigator.clipboard.writeText(passwordInput.value);

    message.classList.add("show");

    setTimeout(() => {
        message.classList.remove("show");
    }, 2000);
    }
}

generateBtn.addEventListener("click", generatePassword);
copyIcon.addEventListener("click", copyPassword);
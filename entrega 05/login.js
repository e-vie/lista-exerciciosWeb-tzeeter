document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginButton = document.getElementById("login-button");
    const emailErro = document.getElementById("email-erro");
    const senhaErro = document.getElementById("senha-erro");
    const form = document.getElementById("login-form");

    function validarFormulario() {
        const emailValido = validarEmail(emailInput.value);
        const senhaPreenchida = passwordInput.value.trim().length > 0;

        if (!emailValido && emailInput.value.length > 0) {
            emailErro.textContent = "Email inválido";
            emailErro.style.display = "block";
        } else {
            emailErro.style.display = "none";
        }

        if (!senhaPreenchida) {
            senhaErro.textContent = "Senha obrigatória";
            senhaErro.style.display = "block";
        } else {
            senhaErro.style.display = "none";
        }

        loginButton.disabled = !(emailValido && senhaPreenchida);
    }

    function validarEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    form.addEventListener("submit", function (event) {
        if (loginButton.disabled) {
            event.preventDefault();
        }
    });

    emailInput.addEventListener("input", validarFormulario);
    passwordInput.addEventListener("input", validarFormulario);
});

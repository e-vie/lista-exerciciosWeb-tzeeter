document.addEventListener("DOMContentLoaded", function () {
    const nomeInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");
    const senhaInput = document.getElementById("senha");
    const confirmaSenhaInput = document.getElementById("confirma-senha");
    const mesSelect = document.getElementById("mes");
    const diaSelect = document.getElementById("dia");
    const anoSelect = document.getElementById("ano");
    const aceitarTermos = document.getElementById("aceitar");
    const signupButton = document.getElementById("signup-button");
    const fecharButton = document.getElementById("fechar");

    function validarCampo(input, errorId, validacao) {
        const errorSpan = document.getElementById(errorId);
        if (validacao) {
            errorSpan.style.display = "none";
        } else {
            errorSpan.style.display = "block";
        }
    }

    function validarFormulario() {
        const nomeValido = nomeInput.value.trim().length > 0;
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
        const senhaValida = senhaInput.value.length >= 6;
        const senhasIguais = senhaInput.value === confirmaSenhaInput.value;
        const dataValida = mesSelect.value && diaSelect.value && anoSelect.value;
        const termosAceitos = aceitarTermos.checked;

        validarCampo(nomeInput, "nome-erro", nomeValido);
        validarCampo(emailInput, "email-erro", emailValido);
        validarCampo(senhaInput, "senha-erro", senhaValida);
        validarCampo(confirmaSenhaInput, "confirma-senha-erro", senhasIguais);
        validarCampo(mesSelect, "data-erro", dataValida);

        signupButton.disabled = !(nomeValido && emailValido && senhaValida && senhasIguais && dataValida && termosAceitos);
    }

    function atualizarDias() {
        const mes = parseInt(mesSelect.value);
        const ano = parseInt(anoSelect.value);
        const diasNoMes = new Date(ano || 2000, mes, 0).getDate();

        diaSelect.innerHTML = '<option value="" disabled selected>Dia</option>';
        for (let i = 1; i <= diasNoMes; i++) {
            diaSelect.innerHTML += `<option value="${i}">${i}</option>`;
        }
        validarFormulario();
    }

    function atualizarAnos() {
        const anoAtual = new Date().getFullYear();
        anoSelect.innerHTML = '<option value="">Ano</option>';
        for (let i = anoAtual - 100; i <= anoAtual; i++) {
            anoSelect.innerHTML += `<option value="${i}">${i}</option>`;
        }
        validarFormulario();
    }

    mesSelect.addEventListener("change", atualizarDias);
    anoSelect.addEventListener("change", atualizarDias);
    atualizarAnos();

    nomeInput.addEventListener("input", validarFormulario);
    emailInput.addEventListener("input", validarFormulario);
    senhaInput.addEventListener("input", validarFormulario);
    confirmaSenhaInput.addEventListener("input", validarFormulario);
    aceitarTermos.addEventListener("change", validarFormulario);

    fecharButton.addEventListener("click", function () {
        window.location.href = "login.html";
    });
});

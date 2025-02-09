document.addEventListener('DOMContentLoaded', function() {
const textarea = document.getElementById('escrever-tzeet');
const contador = document.getElementById('contador');
const enviar = document.getElementById('enviar')

function atualizarContador() {
    contador.textContent = textarea.value.length;
    const length = textarea.value.length;
    contador.textContent = length;
  if (length == 0) {
     contador.style.display = "none";
  } else {
     contador.style.display = "inline";
  }
  if(length >=100){
    contador.style.color="rgb(255, 200, 0)"
  }
  if(length > 140){
    contador.style.color="rgb(255, 0, 0)"
    enviar.disabled="true"
  }
  if (length == 0 || length > 140) {
    enviar.disabled = true;
  } else {
    enviar.disabled = false;
  }
}


textarea.addEventListener('input', atualizarContador);
atualizarContador();
});

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("modal-tzeet");
    const abrirModal = document.getElementById("tzeetar");
    const fecharModal = document.getElementById("fechar-modal");
    const modalTextarea = document.getElementById("modal-textarea");
    const modalEnviar = document.getElementById("modal-enviar");

    abrirModal.addEventListener("click", () => modal.showModal());
    fecharModal.addEventListener("click", () => modal.close());

    modalTextarea.addEventListener("input", function () {
        modalEnviar.disabled = modalTextarea.value.trim().length == 0;
    });

    modalEnviar.addEventListener("click", function () {
        modal.close();
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const modalTextarea = document.getElementById('modal-textarea');
    const modalContador = document.createElement('span'); 
    const modalEnviar = document.getElementById('modal-enviar');

   
    modalTextarea.parentNode.insertBefore(modalContador, modalTextarea.nextSibling);

    function atualizarContadorModal() {
        const length = modalTextarea.value.length;
        modalContador.textContent = length;

        
        modalContador.style.display = length === 0 ? 'none' : 'inline';

        
        if (length >= 100) {
            modalContador.style.color = 'rgb(255, 200, 0)';
        }
        if (length > 140) {
            modalContador.style.color = 'rgb(255, 0, 0)';
            modalEnviar.disabled = true;
        } else {
            modalEnviar.disabled = length === 0;
        }
    }

    modalTextarea.addEventListener('input', atualizarContadorModal);
    atualizarContadorModal(); 
});

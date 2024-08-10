document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#user-form');
    const submitButton = document.querySelector('#submit-btn');
    const successMessage = document.querySelector('#formulario--mensaje-exito');
    const errors = {
        nickName: true, // Inicialmente, asumimos que hay un error
        email: true,
        mensaje: true
    };

    function validacion(box, boxInput) {
        if (boxInput.name === 'nickName') {
            if (boxInput.value.trim() === '') {
                showError(true, box, boxInput);
            } else {
                showError(false, box, boxInput);
            }
        } else if (boxInput.name === 'email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(boxInput.value)) {
                showError(true, box, boxInput);
            } else {
                showError(false, box, boxInput);
            }
        } else if (boxInput.name === 'mensaje') {
            if (boxInput.value.trim() === '') {
                showError(true, box, boxInput);
            } else {
                showError(false, box, boxInput);
            }
        }
        submitController();
    }

    function showError(check, box, boxInput) {
        if (check) {
            box.classList.remove('form-success');
            box.classList.add('form-error');
            errors[boxInput.name] = true;
        } else {
            box.classList.remove('form-error');
            box.classList.add('form-success');
            errors[boxInput.name] = false;
        }
    }

    function submitController() {
        const hasErrors = Object.values(errors).some(error => error);
        if (hasErrors) {
            submitButton.setAttribute('disabled', true);
        } else {
            submitButton.removeAttribute('disabled');
        }
    }

    form.addEventListener('input', (event) => {
        const box = event.target.closest('.form-box');
        validacion(box, event.target);
    });

    form.addEventListener('submit', (event) => {
        const hasErrors = Object.values(errors).some(error => error);
        if (hasErrors) {
            event.preventDefault();
            alert('Por favor, rellena todos los campos correctamente.');
        } else {
            // No prevenir el envío del formulario
            successMessage.classList.add('show');
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 3000); // Ocultar el mensaje después de 5 segundos
        }
    });
});
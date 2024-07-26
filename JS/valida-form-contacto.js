
const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
    nombre: /^[a-zA-Z\s]{4,30}$/,
    password: /^.{4,12}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-,]+$/,
    mensaje: /^[a-zA-Z\s]{1,100}$/,
    telefono: /^\d{8,16}$/,
};

const form = document.getElementById('user-form');
const submitButton = document.getElementById('submit-btn');

let timeout = null;

let errors = {
    nickName: true,
}

document.querySelectorAll('.form-box').forEach((box) => {
    const boxInput = box.querySelector('input');
    boxInput.addEventListener('keydown', (event) => {clearTimeout(timeout);
         timeout = setTimeout(() => {     
            validacion(box, boxInput);
        }, 300);
    });
})


function validacion (box, boxInput) {
    if (boxInput.name == 'nickName') {
        if (boxInput.value == '') {
            showError(true, box, boxInput);
        } else {
            showError(false, box, boxInput);
        }
    }
    submitController();
}

function showError (check, box, boxInput) {  
    if (check) {
        box.classlist.remove('form-success');
        box.classlist.add('form-error');
        errors[boxInput.name] = true;
    } else {
        box.classlist.remove('form-error');
        box.classlist.add('form-success');
        errors[boxInput.name] = false;
    }
};


function submitController() {
    if (error.nickName) {
        submitButton.toggleAttribute('disabled', true);
    } else {
        submitButton.toggleAttribute('disabled', false);
    }
};


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new formData(event.target)
    for (let [key, value] of formData.entries()) { }

})
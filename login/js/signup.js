//VARIABLES

const formulario = document.querySelector('#form');
const email = document.querySelector('#email');
const password1 = document.querySelector('#password1');
const password2 = document.querySelector('#password2');
const btnLogin = document.querySelector('#btnLogin');
const erMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let succEmail = false;
let succPassword = false;

//AEL   
email.addEventListener('blur', validarFormulario);
password1.addEventListener('blur', validarFormulario);
password2.addEventListener('blur', validarFormulario);
document.addEventListener('DOMContentLoaded', iniciarApp);
formulario.addEventListener('submit', enviarFormulario);

//FUNCIONES
function iniciarApp() {
    console.log('Hola');
    btnLogin.disabled = true;
    btnLogin.classList.add('cursor-bloqueado');
}

function validarFormulario(e) {
    if (e.target.type === 'email') {
        console.log('validando email...');
        const resultado = e.target.value;
        if (erMail.test(resultado)) {
            succEmail = true;
        } else {
            console.log('no sirve');
        }
    }

    if (e.target.type === 'password') {
        if (e.target.value !== '') {
            if (password1.value !== password2.value) {
                console.log('Las contraseñas no coinciden');
            } else {
                if (e.target.value.length < 8) {
                    console.log('mas de 8 caracteres porfavor');
                } else {
                    succPassword = true;
                }
            }
        }

    }

    if (succEmail == true && succPassword == true) {
        console.log(' pasaste homs');
        btnLogin.disabled = false;
        btnLogin.classList.remove('cursor-bloqueado');
    }
}

function enviarFormulario(e) {
    let datos = new FormData(formulario);
    e.preventDefault();

    // const datos = {
    //     username: email.value,
    //     password: password1.value
    // }

    fetch("php/insertOne.php", {
            method: "POST",
            body: datos,
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });

    console.log('xd');
    formulario.reset();
}
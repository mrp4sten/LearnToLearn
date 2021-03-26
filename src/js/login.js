const formLogin = document.querySelector('#formLogin');
const btnLogin = document.querySelector('#btnLogin');

btnLogin.addEventListener('click', e => {
    // console.log('Holaaaaaaaaaaaaa')
    e.preventDefault();

    let datos = new FormData(formLogin);

    fetch("../php/findOne.php", {
            method: 'POST',
            body: datos
        })
        .then(res => res.json())
        .then(data => {

            if (data == '0') {
                console.log('Usuario no encontrado')
            } else if (data == 'contraseña incorrecta') {
                console.log(data);
            } else {
                location.href = '../html/inicio.php'
            }
        })
})
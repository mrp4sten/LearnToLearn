const formulario = document.querySelector('#form');

formulario.addEventListener('submit', e => {
    e.preventDefault();

    let datos = new FormData(formulario);

    fetch('php/findOne.php', {
            method: 'POST',
            body: datos
        })
        .then(res => res.json())
        .then(data => {
            if (data == '0') {
                console.log('Usuario no encontrado')
                formLogin.classList.add('inputErroneo');
                formLogin.children[1].placeholder = 'Usuario no encontrado';
                formLogin.children[2].placeholder = 'Usuario no encontrado';

            } else if (data == 'contraseña incorrecta') {
                console.log(data);
                formLogin.classList.add('inputErroneo');
                formLogin.children[2].placeholder = 'Contraseña incorrecta';
                console.log('xd');
            } else {
                location.href = '../html/inicio.php'
            }
        })
})
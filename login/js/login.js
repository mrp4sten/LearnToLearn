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


            } else if (data == 'contraseña incorrecta') {
                console.log(data);

                console.log('xd');
            } else {
                location.href = '../index.html';
            }
        })
})
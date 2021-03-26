const btnLogout = document.querySelector('#btnLogout');

btnLogout.addEventListener('click', e => {
    e.preventDefault();
    console.log('HOLAAAAAAAAAA');
    fetch('../php/salidaSesion.php')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data == 'SESION DESTRUIDA') {
                location.href = '../html/login.html'
            }
        });
})
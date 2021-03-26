const formulario = document.querySelector('#form');
const btnRegister = document.querySelector('#btnRegister');




btnRegister.addEventListener("click", e => {
    console.log('adentro');
    e.preventDefault();

    let datos = new FormData(formulario);

    if (datos.get('username') == '' || datos.get('password') == '' || datos.get('passwordConfirm') == '') {
        // console.log('estoy vacio');
        formulario.children[1].placeholder = 'Rellena todos los campos!'
        formulario.children[2].placeholder = 'Rellena todos los campos!'
        formulario.children[3].placeholder = 'Rellena todos los campos!'
        formulario.classList.add('inputErroneo');


    } else {
        formulario.classList.remove('inputErroneo');
        fetch("../php/insertOne.php", {
                method: "POST",
                body: datos,
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    }

});
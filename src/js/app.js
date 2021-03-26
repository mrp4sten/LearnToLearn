const formulario = document.querySelector('#form');
const btnLogin = document.querySelector('#btnLogin')
console.log('Hola');


btnLogin.addEventListener("click", e => {
    console.log('adentro');
    e.preventDefault();

    let datos = new FormData(formulario);
    console.log(datos.get("username"));
    console.log(datos.get("password"));
    console.log(datos.get("passwordConfirm"));

    if (datos.get("username") === "" || datos.get("password") === "" || datos.get("passwordConfirm") === "") {
        console.log('Rellena todos los campos')
    } else if (datos.get("password") !== datos.get("passwordConfirm")) {
        console.log('Las contraseñas no coinciden')
    } else {
        fetch("php/insertOne.php", {
                method: "POST",
                body: datos,
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
    }



});
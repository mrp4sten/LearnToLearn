const formulario = document.querySelector('#form');
const btnRegister = document.querySelector('#btnRegister');


btnRegister.addEventListener("click", e => {
    console.log('adentro');
    e.preventDefault();

    let datos = new FormData(formulario);

    formulario.classList.remove('inputErroneo');
    fetch("../php/insertOne.php", {
            method: "POST",
            body: datos,
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        });
});
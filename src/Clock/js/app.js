let hrs = 0;
let min = 0;
let sec = 0;
const contenedor = document.querySelector('.contenedor');
const segundos = document.querySelector('#seconds');
const minutos = document.querySelector('#minutes');
const horas = document.querySelector('#hours');
const relojBtns = document.querySelector('#relojBtns');
let detenido = false;

relojBtns.addEventListener('click', timer);

function timer(e) {


    if (e.target.classList.contains('btn-start')) {
        stop = false;
        console.log('le diste start');

        let id = setInterval(() => {

            if (stop == true) {
                clearInterval(id);
            } else {
                sec += 1;
            }


            if (sec == 60) {
                sec = 0;
                min += 1;


                if (min == 60) {
                    min = 0;
                    hrs += 1;
                    if (hrs == 24) {
                        hrs = 0;
                    }
                    if (hrs >= 0 && hrs < 10) {
                        horas.textContent = `0${hrs}`;
                    } else {
                        horas.textContent = hrs;
                    }
                }

                if (min >= 0 && min < 10) {
                    minutos.textContent = `0${min}`;
                } else {
                    minutos.textContent = min;
                }


            }
            if (sec >= 0 && sec < 10) {
                segundos.textContent = `0${sec}`;

            } else {
                segundos.textContent = sec;

            }

        }, 1000);



    }

    if (e.target.classList.contains('btn-stop')) {

        if (stop == true) {
            stop = false;
        } else {
            stop = true;
        }
        console.log('diste stop, variable stop= ' + stop);
    }

    if (e.target.classList.contains('btn-reset')) {
        sec = 0;
        min = 0;
        hrs = 0;
        segundos.textContent = `0${sec}`;
        minutos.textContent = `0${min}`;
        horas.textContent = `0${hrs}`;
    }

}
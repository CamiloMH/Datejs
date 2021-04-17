import '../css/componentes.css';
 


const diasEl = document.getElementById('dias');
const horasEl = document.getElementById('horas');
const minutosEl = document.getElementById('minutos');
const segundosEl = document.getElementById('segundos');


export const cuentaRegresiva = () => {
    const nuevoAnio = '1 Jan 2022';
 
    const nuevoAnioDate = new Date(nuevoAnio);
    const actualDate = new Date();

    const totalSegundos = (nuevoAnioDate - actualDate) / 1000;

    const dias = Math.floor(totalSegundos / 3600 / 24);
    const horas = Math.floor(totalSegundos / 3600) % 24;
    const minutos = Math.floor(totalSegundos / 60) % 60;
    const segundos = Math.floor(totalSegundos) % 60;

    diasEl.innerHTML = dias;
    horasEl.innerHTML = formatoTiempo(horas);
    minutosEl.innerHTML = formatoTiempo(minutos);
    segundosEl.innerHTML = formatoTiempo(segundos);


    return dias, horas ,minutos,segundos 
}
const formatoTiempo = (tiempo) => {
    return tiempo < 10 ? (`0${tiempo}`) : tiempo;
}





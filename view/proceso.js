import { guardarRespuesta, getRespuestas } from './database.js'

export { array };

//import {getPuntajeNivel1, getPuntajes} from './visualizar.js'
var array = new Array();

window.addEventListener('DOMContentLoaded', async() => {
    const encuestas = await getRespuestas()

    encuestas.forEach(doc => {
        array.push(doc.data());
        console.log(doc.data());
    })

    for (var i = 0; i < array.length; i++) {
        con.innerHTML = con.innerHTML +
            '<td>' + array[i].nombre + '</td>' +

            '<td>Intentos Primer nivel</td>' +
            '<td>Intentos Segundo nivel</td>' +
            '<td>Intentos Tercer nivel</td>' +
            '<td>Intentos Cuarto nivel</td>' +
            '<td>Intentos Quinto nivel</td>' +

            '<td>Puntaje Primer nivel</td>' +
            '<td>Puntaje Segundo nivel</td>' +
            '<td>Puntaje Tercer nivel</td>' +
            '<td>Puntaje Cuarto nivel</td>' +
            '<td>Puntaje Quinto nivel</td>' +

            '<td>' + array[i].respuesta1 + '</td>' +
            '<td>' + array[i].respuesta2 + '</td>' +
            '<td>' + array[i].respuesta3 + '</td>' +
            '<td>' + array[i].respuesta4 + '</td>' +
            '<td>' + array[i].respuesta5 + '</td>';
    }

});

function tabla() {
    for (var i = 0; i < 10; i++) {
        con.innerHTML = con.innerHTML +
            '<td>' + +'</td>' +
            '<td>Intentos Segundo nivel</td>' +
            '<td>Intentos Tercer nivel</td>' +
            '<td>Intentos Cuarto nivel</td>' +
            '<td>Intentos Quinto nivel</td>';
    }
}
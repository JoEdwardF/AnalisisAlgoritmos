import { guardarRespuesta, getRespuestas } from './database.js'

export { array };

//import {getPuntajeNivel1, getPuntajes} from './visualizar.js'
var array = new Array();

var promedioPrimeraPregunta = 0;
var promedioSegundaPregunta = 0;
var promedioTerceraPregunta = 0;
var promedioCuartaPregunta = 0;
var promedioQuintaPregunta = 0;


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

        if (Number(array[i].respuesta1) != 'NaN') {
            promedioPrimeraPregunta += Number(array[i].respuesta1);
        }
        if (Number(array[i].respuesta2) != 'NaN') {
            promedioSegundaPregunta += Number(array[i].respuesta2);
        }
        if (Number(array[i].respuesta3) != 'NaN') {
            promedioTerceraPregunta += Number(array[i].respuesta3);
        }
        if (Number(array[i].respuesta4) != 'NaN') {
            promedioCuartaPregunta += Number(array[i].respuesta4);
        }
        if (Number(array[i].respuesta5) != 'NaN') {
            promedioQuintaPregunta += Number(array[i].respuesta5);
        }
    }

    promedioPrimeraPregunta /= array.length;
    promedioSegundaPregunta /= array.length;
    promedioTerceraPregunta /= array.length;
    promedioCuartaPregunta /= array.length;
    promedioQuintaPregunta /= array.length;

    document.getElementById("promedioPrimeraPregunta").innerHTML = "Promedio global para la primera pregúnta: " + promedioPrimeraPregunta +
        "<br/> Promedio global para la segunda pregúnta  : " + promedioSegundaPregunta +
        "<br/> Promedio global para la tercera pregúnta  : " + promedioTerceraPregunta +
        "<br/> Promedio global para la cuarta pregúnta  : " + promedioCuartaPregunta +
        "<br/> Promedio global para la quinta pregúnta  : " + promedioQuintaPregunta;

});
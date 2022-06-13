 import { guardarRespuesta, getRespuestas } from './database.js'

 //import {getPuntajeNivel1, getPuntajes} from './visualizar.js'

 window.addEventListener('DOMContentLoaded', async() => {
     const encuestas = await getRespuestas()
     encuestas.forEach(doc => {
         console.log(doc.data())
     })
 })

 const encuesta = document.getElementById('encu');

 encuesta.addEventListener('submit', (e) => {
     e.preventDefault();

     const name = encuesta['name'];
     const p1r1 = encuesta['p1r1'];
     const p1r2 = encuesta['p1r2'];
     const p1r3 = encuesta['p1r3'];
     const p1r4 = encuesta['p1r4'];
     const p1r5 = encuesta['p1r5'];

     const p2r1 = encuesta['p2r1'];
     const p2r2 = encuesta['p2r2'];
     const p2r3 = encuesta['p2r3'];
     const p2r4 = encuesta['p2r4'];
     const p2r5 = encuesta['p2r5'];

     const p3r1 = encuesta['p1r1'];
     const p3r2 = encuesta['p1r2'];
     const p3r3 = encuesta['p1r3'];
     const p3r4 = encuesta['p1r4'];
     const p3r5 = encuesta['p1r5'];

     const p4r1 = encuesta['p1r1'];
     const p4r2 = encuesta['p1r2'];
     const p4r3 = encuesta['p1r3'];
     const p4r4 = encuesta['p1r4'];
     const p4r5 = encuesta['p1r5'];

     const p5r1 = encuesta['p1r1'];
     const p5r2 = encuesta['p1r2'];
     const p5r3 = encuesta['p1r3'];
     const p5r4 = encuesta['p1r4'];
     const p5r5 = encuesta['p1r5'];

     var respuesta1 = "";
     var respuesta2 = "";
     if (p1r1.checked) {
         respuesta1 = p1r1.value;
     } else if (p1r2.checked) {
         respuesta1 = p1r2.value;
     } else if (p1r3.checked) {
         respuesta1 = p1r3.value;
     } else if (p1r4.checked) {
         respuesta1 = p1r4.value;
     } else if (p1r5.checked) {
         respuesta1 = p1r5.value;
     }

     if (p2r1.checked) {
         respuesta2 = p2r1.value;
     } else if (p2r2.checked) {
         respuesta2 = p2r2.value;
     } else if (p2r3.checked) {
         respuesta2 = p2r3.value;
     } else if (p2r4.checked) {
         respuesta2 = p2r4.value;
     } else if (p2r5.checked) {
         respuesta2 = p2r5.value;
     }
     var respuesta3 = "";
     if (p3r1.checked) {
         respuesta3 = p3r1.value;
     } else if (p3r2.checked) {
         respuesta3 = p3r2.value;
     } else if (p3r3.checked) {
         respuesta3 = p3r3.value;
     } else if (p3r4.checked) {
         respuesta3 = p3r4.value;
     } else if (p3r5.checked) {
         respuesta3 = p3r5.value;
     }
     var respuesta4 = "";
     if (p4r1.checked) {
         respuesta4 = p4r1.value;
     } else if (p4r2.checked) {
         respuesta4 = p4r2.value;
     } else if (p4r3.checked) {
         respuesta4 = p4r3.value;
     } else if (p4r4.checked) {
         respuesta4 = p4r4.value;
     } else if (p4r5.checked) {
         respuesta4 = p4r5.value;
     }
     var respuesta5 = "";
     if (p5r1.checked) {
         respuesta5 = p5r1.value;
     } else if (p5r2.checked) {
         respuesta5 = p5r2.value;
     } else if (p5r3.checked) {
         respuesta5 = p5r3.value;
     } else if (p5r4.checked) {
         respuesta5 = p5r4.value;
     } else if (p5r5.checked) {
         respuesta5 = p5r5.value;
     }
     /*console.log(name.value);
     console.log(respuesta1);
     console.log(respuesta2);
     console.log(respuesta3);
     console.log(respuesta4);
     console.log(respuesta5);*/

     guardarRespuesta(name.value, respuesta1, respuesta2, respuesta3, respuesta4, respuesta5);
 })
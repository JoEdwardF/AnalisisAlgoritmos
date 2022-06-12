 import {guardarRespuesta, getRespuestas} from './database.js'



window.addEventListener('DOMContentLoaded',async ()=>{
    const querySanpshot = await getRespuestas()
    querySanpshot.forEach(doc => {
        console.log(doc.data())
    })
})

const encuesta = document.getElementById('encuesta');

encuesta.addEventListener('submit', (e)=>{
    e.preventDefault();

    const name = encuesta['name'];
    const p1r1 = encuesta['p1r1'];
    const p1r2 = encuesta['p1r2'];
    const p1r3 = encuesta['p1r3'];
    const p2r1 = encuesta['p2r1'];
    const p2r2 = encuesta['p2r2'];
    const p2r3 = encuesta['p2r3'];
    const p2r4 = encuesta['p2r4'];
    const p2r5 = encuesta['p2r5'];
    

    var respuesta1 = "" ;
    var respuesta2 = "";
    if(p1r1.checked){
        respuesta1=p1r1.value;
    }else if(p1r2.checked){
        respuesta1=p1r2.value;
    }else {
        respuesta1=p1r3.value;
    }

    if(p2r1.checked){
        respuesta2=p2r1.value;
    }else if(p2r2.checked){
        respuesta2=p2r2.value;
    }else if (p2r3.checked){
        respuesta2=p2r3.value;
    }else if(p2r4.checked){
        respuesta2=p2r4.value;
    }else {
        respuesta2=p2r5.value;
    }
    
    guardarRespuesta(name.value,respuesta1,respuesta2);
})
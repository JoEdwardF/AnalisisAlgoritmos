var nivel = 0;
let x, y;

var matriz1 = [
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 1, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 0, 0, 0, 0, 0, 0, 0, 2, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
];

var matriz2 = [
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 1, 0, 0, 0, 3, 0, 0, 3, 3],
    [3, 0, 0, 3, 0, 0, 0, 0, 0, 3],
    [3, 0, 0, 0, 0, 0, 3, 0, 0, 3],
    [3, 3, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 0, 3, 0, 0, 0, 3, 0, 0, 3],
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 0, 0, 3, 0, 0, 0, 0, 2, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
];

var matriz3 = [
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 1, 3, 0, 0, 0, 3, 0, 0, 3],
    [3, 0, 3, 0, 0, 0, 3, 0, 0, 3],
    [3, 0, 3, 0, 0, 0, 3, 0, 0, 3],
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 3, 3, 0, 3, 3, 0, 3, 3, 3],
    [3, 0, 0, 0, 0, 3, 0, 0, 0, 3],
    [3, 0, 0, 0, 0, 3, 0, 0, 2, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
];

var matriz4 = [
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 1, 3, 0, 3, 0, 3, 0, 3, 3],
    [3, 0, 0, 0, 0, 3, 0, 0, 0, 3],
    [3, 0, 3, 0, 3, 0, 3, 0, 3, 3],
    [3, 3, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 0, 3, 0, 3, 0, 3, 0, 3, 3],
    [3, 0, 0, 0, 0, 0, 0, 3, 0, 3],
    [3, 0, 3, 0, 3, 0, 3, 0, 3, 3],
    [3, 3, 0, 3, 0, 0, 0, 0, 2, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
];

var matriz5 = [
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 1, 0, 0, 0, 0, 0, 3, 0, 3],
    [3, 0, 3, 3, 0, 3, 3, 0, 3, 3],
    [3, 0, 0, 3, 0, 0, 0, 0, 3, 3],
    [3, 3, 0, 3, 0, 3, 3, 3, 3, 3],
    [3, 0, 0, 3, 0, 3, 0, 0, 0, 3],
    [3, 0, 3, 3, 0, 3, 0, 3, 0, 3],
    [3, 0, 0, 3, 0, 0, 0, 3, 0, 3],
    [3, 3, 0, 0, 0, 3, 3, 3, 2, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
];

var puntajeNivel1 = 100;
var puntajeNivel2 = 100;
var puntajeNivel3 = 100;
var puntajeNivel4 = 100;
var puntajeNivel5 = 100;

var intentosNivel1 = 0;
var intentosNivel2 = 0;
var intentosNivel3 = 0;
var intentosNivel4 = 0;
var intentosNivel5 = 0;

var array = new Array();
var positionI = 1;
var positionJ = 1;

function escribir() {

    var texto = "";

    for (let i = 0; i < array.length; i++) {
        texto += (i + 1) + ") " + array[i] + "<br>";
    }
    escribirPuntajes();
    document.getElementById("listaMovimiento").innerHTML = texto;
}

function escribirPuntajes() {
    if (puntajeNivel1 >= 100) {
        document.getElementById("puntajeNivel1").innerHTML = "Nivel 1 no completado";
        document.getElementById("intentosNivel1").innerHTML = "Llevas " + intentosNivel1 + " intentos en el nivel 1";
    } else {
        document.getElementById("puntajeNivel1").innerHTML = "Tu puntaje en el nivel 1 es de: " + puntajeNivel1;
        document.getElementById("intentosNivel1").innerHTML = "Llevas " + intentosNivel1 + " intentos en el nivel 1";
    }
    if (puntajeNivel2 >= 100) {
        document.getElementById("puntajeNivel2").innerHTML = "Nivel 2 no completado";
        document.getElementById("intentosNivel2").innerHTML = "Llevas " + intentosNivel2 + " intentos en el nivel 2";
    } else {
        document.getElementById("puntajeNivel2").innerHTML = "Tu puntaje en el nivel 2 es de: " + puntajeNivel2;
        document.getElementById("intentosNivel2").innerHTML = "Llevas " + intentosNivel2 + " intentos en el nivel 2";
    }
    if (puntajeNivel3 >= 100) {
        document.getElementById("puntajeNivel3").innerHTML = "Nivel 3 no completado";
        document.getElementById("intentosNivel3").innerHTML = "Llevas " + intentosNivel3 + " intentos en el nivel 3";
    } else {
        document.getElementById("puntajeNivel3").innerHTML = "Tu puntaje en el nivel 3 es de: " + puntajeNivel3;
        document.getElementById("intentosNivel3").innerHTML = "Llevas " + intentosNivel3 + " intentos en el nivel 3";
    }
    if (puntajeNivel4 >= 100) {
        document.getElementById("puntajeNivel4").innerHTML = "Nivel 4 no completado";
        document.getElementById("intentosNivel4").innerHTML = "Llevas " + intentosNivel4 + " intentos en el nivel 4";
    } else {
        document.getElementById("puntajeNivel4").innerHTML = "Tu puntaje en el nivel 4 es de: " + puntajeNivel4;
        document.getElementById("intentosNivel4").innerHTML = "Llevas " + intentosNivel4 + " intentos en el nivel 4";
    }
    if (puntajeNivel5 >= 100) {
        document.getElementById("puntajeNivel5").innerHTML = "Nivel 5 no completado";
        document.getElementById("intentosNivel5").innerHTML = "Llevas " + intentosNivel5 + " intentos en el nivel 5";
    } else {
        document.getElementById("puntajeNivel5").innerHTML = "Tu puntaje en el nivel 5 es de: " + puntajeNivel5;
        document.getElementById("intentosNivel5").innerHTML = "Llevas " + intentosNivel5 + " intentos en el nivel 5";
    }

}

function ejecuting() {
    var matrizAUsar = [10][10];
    if (nivel == 0) {
        matrizAUsar = matriz1;
    }
    if (nivel == 1) {
        matrizAUsar = matriz2;
    }
    if (nivel == 2) {
        matrizAUsar = matriz3;
    }
    if (nivel == 3) {
        matrizAUsar = matriz4;
    }
    if (nivel == 4) {}

    ejecutarRecursivo(matrizAUsar, 0);
}

function ejecutarRecursivo(matrizAusar, i) {

    if (i == array.length) {
        if (positionI == 8 && positionJ == 8) {
            alert("Llegaste a la meta, felicidades!");
            if (nivel == 0) {
                intentosNivel1 += 1;
                if (array.length < puntajeNivel1) {
                    puntajeNivel1 = array.length;
                    console.log(puntajeNivel1);
                }
            } else if (nivel == 1) {
                intentosNivel2 += 1;
                if (array.length < puntajeNivel2) {
                    puntajeNivel2 = array.length;
                    console.log(puntajeNivel2);
                }
            } else if (nivel == 2) {
                intentosNivel3 += 1;
                if (array.length < puntajeNivel3) {
                    puntajeNivel3 = array.length;
                    console.log(puntajeNivel3);
                }
            } else if (nivel == 3) {
                intentosNivel4 += 1;
                if (array.length < puntajeNivel4) {
                    puntajeNivel4 = array.length;
                    console.log(puntajeNivel4);
                }
            } else {
                intentosNivel5 += 1;
                if (array.length < puntajeNivel5) {
                    puntajeNivel5 = array.length;
                    console.log(puntajeNivel5);
                }
            }
            dibujarSiguienteNivel();
            document.getElementById("mundo").innerHTML = "Nivel " + (nivel + 1);
            array.splice(0, array.length);
            escribir();
        } else {
            alert("No acabaste en la meta, intenta de nuevo!");
            if (nivel == 0) {
                intentosNivel1 += 1;
            } else if (nivel == 1) {
                intentosNivel2 += 1;
            } else if (nivel == 2) {
                intentosNivel3 += 1;
            } else if (nivel == 3) {
                intentosNivel4 += 1;
            } else {
                intentosNivel5 += 1;
            }
            setTimeout(reset, 1000);
            array.splice(0, array.length);
            escribir();
        }
    } else {
        if (array[i] == "Derecha") {
            moverDerecha(matrizAusar);
            setTimeout(ejecutarRecursivo, 1000, matrizAusar, i + 1);
        }
        if (array[i] == "Izquierda") {
            moverIzquierda(matrizAusar);
            setTimeout(ejecutarRecursivo, 1000, matrizAusar, i + 1);
        }
        if (array[i] == "Arriba") {
            moverArriba(matrizAusar);
            setTimeout(ejecutarRecursivo, 1000, matrizAusar, i + 1);
        }
        if (array[i] == "Abajo") {
            moverAbajo(matrizAusar);
            setTimeout(ejecutarRecursivo, 1000, matrizAusar, i + 1);
        }
    }

}

function ejecutar() {
    var matrizAUsar = [10][10];
    var centi = true;
    if (nivel == 0) {
        matrizAUsar = matriz1;
    }
    if (nivel == 1) {
        matrizAUsar = matriz2;
    }
    if (nivel == 2) {
        matrizAUsar = matriz3;
    }
    if (nivel == 3) {
        matrizAUsar = matriz4;
    }
    if (nivel == 4) {}

    for (let i = 0; i < array.length && centi == true; i++) {
        if (array[i] == "Derecha") {
            moverDerecha(matrizAUsar);
        }
        if (array[i] == "Izquierda") {
            moverIzquierda(matrizAUsar);
        }
        if (array[i] == "Arriba") {
            moverArriba(matrizAUsar);
        }
        if (array[i] == "Abajo") {
            moverAbajo(matrizAUsar);
        }
        sleep(1000);
    }

    array.splice(0, array.length);
    escribir();
}

function sleep(milisegundos) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milisegundos);
}

function derecha() {
    array.push("Derecha");
    escribir();
}

function izquierda() {
    array.push("Izquierda");
    escribir();
}

function arriba() {
    array.push("Arriba");
    escribir();
}

function abajo() {
    array.push("Abajo");
    escribir();
}

function moverDerecha(matrizAUsar) {
    if (positionI + 1 < matrizAUsar.length && positionJ < matrizAUsar[0].length) {

        if (matrizAUsar[positionI + 1][positionJ] != 3) {
            if (positionI == 8 && positionJ == 8) {
                image(coin, (42 * positionI) + 10, (42 * positionJ) + 10, 40, 40);
                //fill(184, 200, 0);
                //rect((42 * positionI) + 10, (42 * positionJ) + 10, 40, 40);
            } else {
                image(cesped, (42 * positionI) + 10, (42 * positionJ) + 10, 40, 40);
                //fill(81, 187, 234);
                //rect((42 * positionI) + 10, (42 * positionJ) + 10, 40, 40);
            }
            positionI += 1;
            console.log(1);

            fill(247, 80, 80);
            triangle((42 * positionI) + 10, (42 * positionJ) + 50, (42 * positionI) + 30, (42 * positionJ) + 10, (42 * positionI) + 50, (42 * positionJ) + 50);
        }
    } else {
        alert("Te saliste del mapa");
        reset();
    }
}

function moverIzquierda(matrizAUsar) {
    if (positionI - 1 >= 0 && positionJ < matrizAUsar[0].length) {
        if (matrizAUsar[positionI - 1][positionJ] != 3) {

            if (positionI == 8 && positionJ == 8) {
                image(coin, (42 * positionI) + 10, (42 * positionJ) + 10, 40, 40);
                //fill(184, 200, 0);
                //rect((42 * positionI) + 10, (42 * positionJ) + 10, 40, 40);
            } else {
                image(cesped, (42 * positionI) + 10, (42 * positionJ) + 10, 40, 40);
                //fill(81, 187, 234);
                //rect((42 * positionI) + 10, (42 * positionJ) + 10, 40, 40);
            }
            positionI -= 1;
            console.log(1);

            fill(247, 80, 80);
            triangle((42 * positionI) + 10, (42 * positionJ) + 50, (42 * positionI) + 30, (42 * positionJ) + 10, (42 * positionI) + 50, (42 * positionJ) + 50);
        }
    } else {
        alert("Te saliste del mapa");
        reset();
    }
}

function moverArriba(matrizAUsar) {
    if (positionI < matrizAUsar.length && positionJ - 1 >= 0) {
        if (matrizAUsar[positionI][positionJ - 1] != 3) {

            if (positionI == 8 && positionJ == 8) {
                image(coin, (42 * positionI) + 10, (42 * positionJ) + 10, 40, 40);
                //fill(184, 200, 0);
                //rect((42 * positionI) + 10, (42 * positionJ) + 10, 40, 40);
            } else {
                image(cesped, (42 * positionI) + 10, (42 * positionJ) + 10, 40, 40);
                //fill(81, 187, 234);
                //rect((42 * positionI) + 10, (42 * positionJ) + 10, 40, 40);
            }
            positionJ -= 1;
            console.log(1);

            fill(247, 80, 80);
            triangle((42 * positionI) + 10, (42 * positionJ) + 50, (42 * positionI) + 30, (42 * positionJ) + 10, (42 * positionI) + 50, (42 * positionJ) + 50);
        }
    } else {
        alert("Te saliste del mapa");
        reset();
    }
}

function moverAbajo(matrizAUsar) {
    if (positionI < matrizAUsar.length && positionJ + 1 < matrizAUsar[0].length) {
        if (matrizAUsar[positionI][positionJ + 1] != 3) {

            if (positionI == 8 && positionJ == 8) {
                image(coin, (42 * i) + 10, (42 * j) + 10, 40, 40);
                //fill(184, 200, 0);
                //rect((42 * positionI) + 10, (42 * positionJ) + 10, 40, 40);
            } else {
                image(cesped, (42 * positionI) + 10, (42 * positionJ) + 10, 40, 40);
                //fill(81, 187, 234);
                //rect((42 * positionI) + 10, (42 * positionJ) + 10, 40, 40);
            }
            positionJ += 1;
            console.log(1);

            fill(247, 80, 80);
            triangle((42 * positionI) + 10, (42 * positionJ) + 50, (42 * positionI) + 30, (42 * positionJ) + 10, (42 * positionI) + 50, (42 * positionJ) + 50);
        }
    } else {
        alert("Te saliste del mapa");
        reset();
    }
}


function dibujarSiguienteNivel() {
    nivel += 1;
    console.log(nivel)
    reset();
}

function reset() {
    var matrizAUsar;
    if (nivel == 0) {
        matrizAUsar = matriz1;
    }
    if (nivel == 1) {
        matrizAUsar = matriz2;
    }
    if (nivel == 2) {
        matrizAUsar = matriz3;
    }
    if (nivel == 3) {
        matrizAUsar = matriz4;
    }
    if (nivel == 4) {
        matrizAUsar = matriz5;
    }

    positionI = 1;
    positionJ = 1;

    for (let i = 0; i < matrizAUsar.length; i++) {
        for (let j = 0; j < matrizAUsar[0].length; j++) {
            if (matrizAUsar[i][j] == 0) {
                image(cesped, (42 * i) + 10, (42 * j) + 10, 40, 40);
                //fill(81, 187, 234);
                //rect((42 * i) + 10, (42 * j) + 10, 40, 40);
            } else {
                if (matrizAUsar[i][j] == 1) {
                    image(cesped, (42 * i) + 10, (42 * j) + 10, 40, 40);
                    //fill(81, 187, 234);
                    //rect((42 * i) + 10, (42 * j) + 10, 40, 40);
                    fill(247, 80, 80);
                    triangle((42 * i) + 10, (42 * j) + 50, (42 * i) + 30, (42 * j) + 10, (42 * i) + 50, (42 * j) + 50);
                } else {
                    if (matrizAUsar[i][j] == 2) {
                        image(coin, (42 * i) + 10, (42 * j) + 10, 40, 40);
                        //fill(184, 200, 0);
                        //rect((42 * i) + 10, (42 * j) + 10, 40, 40);
                    } else {
                        image(pared, (42 * i) + 10, (42 * j) + 10, 40, 40);
                        //fill(86, 0, 0);
                        //rect((42 * i) + 10, (42 * j) + 10, 40, 40);
                    }
                }
            }
        }
    }
}

var cesped;
var coin;
var pared;

function preload() {

    cesped = loadImage("assets/cesped.png");
    coin = loadImage("assets/coin.jpg");
    pared = loadImage("assets/pared.png");
}

function setup() {
    // crear el lienzo
    createCanvas(440, 440);
    background('#3F2212');
    // Definir colores
    fill(204, 101, 192, 127);
    stroke(127, 63, 120);

    escribirPuntajes();
    document.getElementById("mundo").innerHTML = "Nivel " + (nivel + 1);


    for (let i = 0; i < matriz1.length; i++) {
        for (let j = 0; j < matriz1[0].length; j++) {
            if (matriz1[j][i] == 0) {
                image(cesped, (42 * i) + 10, (42 * j) + 10, 40, 40);
                //fill(81, 187, 234);
                //rect((42 * i) + 10, (42 * j) + 10, 40, 40);
            } else {
                if (matriz1[j][i] == 1) {
                    image(cesped, (42 * i) + 10, (42 * j) + 10, 40, 40);
                    //fill(81, 187, 234);
                    //rect((42 * i) + 10, (42 * j) + 10, 40, 40);
                    fill(247, 80, 80);
                    triangle((42 * i) + 10, (42 * j) + 50, (42 * i) + 30, (42 * j) + 10, (42 * i) + 50, (42 * j) + 50);
                } else {
                    if (matriz1[i][j] == 2) {
                        image(coin, (42 * i) + 10, (42 * j) + 10, 40, 40);
                        //fill(184, 200, 0);
                        //rect((42 * i) + 10, (42 * j) + 10, 40, 40);
                    } else {
                        image(pared, (42 * i) + 10, (42 * j) + 10, 40, 40);
                        //fill(86, 0, 0);
                        //rect((42 * i) + 10, (42 * j) + 10, 40, 40);
                    }
                }
            }
        }
    }

}
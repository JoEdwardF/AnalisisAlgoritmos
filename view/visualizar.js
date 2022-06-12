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

var puntajeNivel1;
var puntajeNivel2;
var puntajeNivel3;
var puntajeNivel4;
var puntajeNivel5;

var array = new Array();
var positionI = 1;
var positionJ = 1;

function escribir() {

    var x = "";

    for (let i = 0; i < array.length; i++) {
        x += " -" + array[i] + "<br>";
    }
    document.getElementById("listaMovimiento").innerHTML = x;
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
            dibujarSiguienteNivel();
            array.splice(0, array.length);
            escribir();
        } else {
            alert("No acabaste en la meta, intenta de nuevo!");
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

    /**
    if (positionI == 9 && positionJ == 9) {
        alert("Llegaste a la meta, felicidades!");
        dibujarSiguienteNivel();
    } else {
        alert("No acabaste en la meta, intenta de nuevo!");
        reset();
    }
     */

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
            if (positionI == 9 && positionJ == 9) {
                fill(184, 200, 0);
                rect((42 * positionI) + 10, (42 * positionJ) + 10, 40, 40);
            } else {
                fill(81, 187, 234);
                rect((42 * positionI) + 10, (42 * positionJ) + 10, 40, 40);
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

            if (positionI == 9 && positionJ == 9) {
                fill(184, 200, 0);
                rect((42 * positionI) + 10, (42 * positionJ) + 10, 40, 40);
            } else {
                fill(81, 187, 234);
                rect((42 * positionI) + 10, (42 * positionJ) + 10, 40, 40);
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

            if (positionI == 9 && positionJ == 9) {
                fill(184, 200, 0);
                rect((42 * positionI) + 10, (42 * positionJ) + 10, 40, 40);
            } else {
                fill(81, 187, 234);
                rect((42 * positionI) + 10, (42 * positionJ) + 10, 40, 40);
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

            if (positionI == 9 && positionJ == 9) {
                fill(184, 200, 0);
                rect((42 * positionI) + 10, (42 * positionJ) + 10, 40, 40);
            } else {
                fill(81, 187, 234);
                rect((42 * positionI) + 10, (42 * positionJ) + 10, 40, 40);
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
                fill(81, 187, 234);
                rect((42 * i) + 10, (42 * j) + 10, 40, 40);
            } else {
                if (matrizAUsar[i][j] == 1) {
                    fill(81, 187, 234);
                    rect((42 * i) + 10, (42 * j) + 10, 40, 40);
                    fill(247, 80, 80);
                    triangle((42 * i) + 10, (42 * j) + 50, (42 * i) + 30, (42 * j) + 10, (42 * i) + 50, (42 * j) + 50);
                } else {
                    if (matrizAUsar[i][j] == 2) {
                        fill(184, 200, 0);
                        rect((42 * i) + 10, (42 * j) + 10, 40, 40);
                    } else {
                        fill(86, 0, 0);
                        rect((42 * i) + 10, (42 * j) + 10, 40, 40);
                    }
                }
            }
        }
    }
}

let pared;
let cesped;

function preload() {
    cesped = loadImage('assets/cesped.jpg');
    pared = loadImage('assets/pared.png');
}

function setup() {
    // crear el lienzo
    createCanvas(500, 450);
    //background(200);
    //background();
    // Definir colores
    fill(204, 101, 192, 127);
    stroke(127, 63, 120);

    for (let i = 0; i < matriz1.length; i++) {
        for (let j = 0; j < matriz1[0].length; j++) {
            if (matriz1[j][i] == 0) {
                image(cesped, (42 * i) + 10, (42 * i) + 10, 40, 40)
                    //fill(81, 187, 234);
                    //rect((42 * i) + 10, (42 * i) + 10, 40, 40);
            } else {
                if (matriz1[j][i] == 1) {
                    fill(81, 187, 234);
                    rect((42 * i) + 10, (42 * j) + 10, 40, 40);
                    fill(247, 80, 80);
                    triangle((42 * i) + 10, (42 * j) + 50, (42 * i) + 30, (42 * j) + 10, (42 * i) + 50, (42 * j) + 50);
                } else {
                    if (matriz1[i][j] == 2) {
                        fill(184, 200, 0);
                        rect((42 * i) + 10, (42 * j) + 10, 40, 40);
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